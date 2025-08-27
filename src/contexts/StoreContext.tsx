import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  cartTotal: string;
  cartCount: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const addToWishlist = (item: WishlistItem) => {
    setWishlist(prev => {
      if (prev.find(wishItem => wishItem.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id: number) => {
    return wishlist.some(item => item.id === id);
  };

  const cartTotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + (price * item.quantity);
  }, 0).toFixed(2);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <StoreContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      cartTotal,
      cartCount,
    }}>
      {children}
    </StoreContext.Provider>
  );
};