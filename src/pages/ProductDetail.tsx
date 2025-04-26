import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Tag, Package, Share, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import { Product } from '@/types/product';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
      const productData = getProductById(parseInt(id));
      if (productData) {
        setProduct(productData);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      toast({
        title: "Produto adicionado",
        description: `${quantity}x ${product.name} adicionado ao carrinho.`,
      });
    }
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleFinalizePurchase = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      navigate('/cart');
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-pulse text-cyberpunk-neon-blue text-xl">Carregando produto...</div>
      </div>
    );
  }

  const discountedPrice = product.discount > 0 
    ? product.price * (100 - product.discount) / 100 
    : product.price;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-cyberpunk-neon-blue">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-cyberpunk-neon-blue">Produtos</Link>
        <span className="mx-2">/</span>
        <span className="text-cyberpunk-neon-blue">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="cyberpunk-card p-8 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-96 object-contain"
          />
        </div>
        
        <div className="flex flex-col">
          <h1 className="text-3xl font-cyber text-white mb-4">{product.name}</h1>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Tag size={16} />
              <span>{product.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Package size={16} />
              <span>{product.stock > 0 ? `${product.stock} em estoque` : 'Fora de estoque'}</span>
            </div>
          </div>
          
          <div className="mb-6">
            {product.discount > 0 ? (
              <div className="flex flex-col mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-cyber neon-text-blue">
                    R$ {discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <span className="bg-cyberpunk-neon-purple text-white text-xs px-2 py-1 rounded-md">
                    -{product.discount}%
                  </span>
                </div>
                <div className="text-gray-400 mt-1">
                  Economize R$ {(product.price - discountedPrice).toFixed(2)}
                </div>
              </div>
            ) : (
              <div className="text-3xl font-cyber neon-text-blue mb-2">
                R$ {product.price.toFixed(2)}
              </div>
            )}
            <div className="text-gray-400">
              Em até 3x de R$ {(discountedPrice / 3).toFixed(2)} sem juros
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-cyber text-white mb-3">Descrição</h3>
            <p className="text-gray-300">{product.description}</p>
          </div>
          
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Quantidade:</span>
              <div className="flex items-center">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="bg-cyberpunk-dark-gray px-3 py-1 rounded-l-md text-cyberpunk-neon-blue border border-cyberpunk-neon-blue/50"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                  className="w-12 text-center bg-cyberpunk-dark-gray text-white border-y border-cyberpunk-neon-blue/50 py-1"
                />
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                  className="bg-cyberpunk-dark-gray px-3 py-1 rounded-r-md text-cyberpunk-neon-blue border border-cyberpunk-neon-blue/50"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className="flex-1 bg-cyberpunk-neon-blue text-black hover:bg-cyberpunk-neon-blue/80 font-bold py-3 rounded-md flex items-center justify-center gap-2 button-hover-effect"
              >
                <ShoppingCart size={20} />
                <span>Adicionar ao Carrinho</span>
              </Button>
              
              <Button
                onClick={handleFinalizePurchase}
                disabled={product.stock <= 0}
                className="flex-1 bg-cyberpunk-neon-purple text-white hover:bg-cyberpunk-neon-purple/80 font-bold py-3 rounded-md flex items-center justify-center gap-2"
              >
                <ArrowRight size={20} />
                <span>Finalizar Compra</span>
              </Button>

              <Button
                variant="outline"
                className="flex-1 border-cyberpunk-neon-purple text-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple/20 font-bold py-3 rounded-md flex items-center justify-center gap-2"
              >
                <Share size={20} />
                <span>Compartilhar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
