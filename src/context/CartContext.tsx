
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Product } from '@/types/product';
import { useToast } from '@/components/ui/use-toast';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('pixelnerd-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('pixelnerd-cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Produto atualizado",
          description: `Quantidade de "${product.name}" atualizada no carrinho.`,
        });
        
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        toast({
          title: "Produto adicionado",
          description: `"${product.name}" adicionado ao carrinho.`,
        });
        
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => {
      const updatedCart = prev.filter(item => item.id !== productId);
      
      if (updatedCart.length === 0) {
        localStorage.removeItem('pixelnerd-cart');
      }
      
      return updatedCart;
    });
    
    toast({
      title: "Produto removido",
      description: "Item removido do carrinho.",
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('pixelnerd-cart');
    
    toast({
      title: "Carrinho esvaziado",
      description: "Todos os itens foram removidos do carrinho.",
    });
  };

  // Calculate the total price of items in the cart
  const cartTotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 
      ? item.price * (100 - item.discount) / 100 
      : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);

  // Calculate the total number of items in the cart
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartTotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};
