
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    toast({
      title: "Produto adicionado",
      description: `${product.name} adicionado ao carrinho.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="cyberpunk-card group-hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-md mb-4 aspect-square bg-gradient-to-br from-cyberpunk-dark-gray to-black">
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-cyberpunk-neon-purple text-white text-xs px-2 py-1 rounded-md z-10 font-cyber">
              -{product.discount}%
            </div>
          )}
          <img 
            src={product.image} 
            alt={`${product.name} - ${product.category} - Acessórios Gamer e Produtos Geek PixelNerd`} 
            className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
            loading={priority ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <Button 
              onClick={handleAddToCart}
              variant="default"
              className="bg-cyberpunk-neon-blue text-black font-bold px-3 py-2 rounded-md inline-flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 animate-pulse-button"
            >
              <ShoppingCart size={16} />
              <span>Adicionar</span>
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-grow flex flex-col">
          <h3 className="font-cyber text-white text-lg mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.category}</p>
          
          <div className="mt-auto">
            <div className="flex items-baseline">
              {product.discount > 0 ? (
                <>
                  <span className="text-cyberpunk-neon-blue font-cyber text-xl">
                    R$ {((product.price * (100 - product.discount)) / 100).toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through ml-2 text-sm">
                    R$ {product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-cyberpunk-neon-blue font-cyber text-xl">
                  R$ {product.price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Em até 3x de R$ {(product.price / 3).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
