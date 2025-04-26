
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <ShoppingCart size={64} className="text-cyberpunk-neon-blue opacity-50" />
          </div>
          <h2 className="text-2xl font-cyber neon-text-blue mb-4">Seu carrinho está vazio</h2>
          <p className="text-gray-400 mb-8">Parece que você ainda não adicionou nenhum produto ao carrinho.</p>
          <Button asChild className="bg-cyberpunk-neon-blue text-black hover:bg-cyberpunk-neon-blue/80 font-bold">
            <Link to="/products">Explorar Produtos</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-cyber neon-text-blue mb-8">Seu Carrinho</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="cyberpunk-card">
            <div className="flex justify-between pb-4 border-b border-cyberpunk-neon-blue/30 mb-4">
              <h2 className="text-xl font-cyber text-white">Itens do Carrinho</h2>
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-cyberpunk-neon-purple"
                onClick={clearCart}
              >
                <Trash2 size={18} className="mr-2" />
                <span>Limpar</span>
              </Button>
            </div>
            
            <div className="space-y-6">
              {cartItems.map((item) => {
                const itemPrice = item.discount > 0 
                  ? item.price * (100 - item.discount) / 100 
                  : item.price;
                
                return (
                  <div key={item.id} className="flex flex-col md:flex-row gap-6 py-4 border-b border-white/10">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`} className="flex-shrink-0 w-full md:w-32 h-32">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </Link>
                    
                    {/* Product Info */}
                    <div className="flex flex-col md:flex-row flex-grow justify-between">
                      <div className="flex-grow pr-4">
                        <Link to={`/product/${item.id}`} className="text-lg font-cyber text-white hover:text-cyberpunk-neon-blue transition-colors">
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-400">{item.category}</p>
                        
                        <div className="mt-2">
                          {item.discount > 0 ? (
                            <div className="flex items-center gap-2">
                              <span className="text-cyberpunk-neon-blue">
                                R$ {itemPrice.toFixed(2)}
                              </span>
                              <span className="text-gray-500 line-through text-sm">
                                R$ {item.price.toFixed(2)}
                              </span>
                            </div>
                          ) : (
                            <span className="text-cyberpunk-neon-blue">
                              R$ {item.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-4 mt-4 md:mt-0">
                        {/* Quantity Controls */}
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-cyberpunk-dark-gray px-3 py-1 rounded-l-md text-cyberpunk-neon-blue border border-cyberpunk-neon-blue/50"
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-12 text-center bg-cyberpunk-dark-gray text-white border-y border-cyberpunk-neon-blue/50 py-1"
                          />
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-cyberpunk-dark-gray px-3 py-1 rounded-r-md text-cyberpunk-neon-blue border border-cyberpunk-neon-blue/50"
                          >
                            +
                          </button>
                        </div>
                        
                        {/* Subtotal and Remove */}
                        <div className="flex flex-col items-end">
                          <span className="text-white">
                            Subtotal: <span className="text-cyberpunk-neon-blue">R$ {(itemPrice * item.quantity).toFixed(2)}</span>
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-cyberpunk-neon-purple text-sm mt-2 flex items-center"
                          >
                            <Trash2 size={14} className="mr-1" />
                            <span>Remover</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6">
              <Button asChild variant="outline" className="text-cyberpunk-neon-blue border-cyberpunk-neon-blue/50 hover:bg-cyberpunk-neon-blue/20">
                <Link to="/products" className="flex items-center">
                  <ArrowLeft size={16} className="mr-2" />
                  <span>Continuar Comprando</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="cyberpunk-card sticky top-24">
            <h2 className="text-xl font-cyber text-white pb-4 border-b border-cyberpunk-neon-blue/30 mb-4">
              Resumo do Pedido
            </h2>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete:</span>
                <span className="text-cyberpunk-neon-blue">GRÁTIS</span>
              </div>
            </div>
            
            <div className="border-t border-cyberpunk-neon-blue/30 my-4 pt-4">
              <div className="flex justify-between font-cyber">
                <span className="text-white">Total:</span>
                <span className="text-xl text-cyberpunk-neon-blue">
                  R$ {cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-1 text-right">
                Em até 3x de R$ {(cartTotal / 3).toFixed(2)} sem juros
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <Button className="w-full bg-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple/80 text-white font-bold py-3 button-hover-effect">
                Finalizar Compra
              </Button>
              
              <div className="text-center text-sm text-gray-400">
                <p>Formas de pagamento aceitas:</p>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="h-6 w-10 bg-gray-700 rounded"></div>
                  <div className="h-6 w-10 bg-gray-700 rounded"></div>
                  <div className="h-6 w-10 bg-gray-700 rounded"></div>
                  <div className="h-6 w-10 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
