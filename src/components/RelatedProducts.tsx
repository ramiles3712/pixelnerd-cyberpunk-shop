
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Product } from '@/types/product';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface RelatedProductsProps {
  productId: number;
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId, category }) => {
  const navigate = useNavigate();
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(product => product.category === category && product.id !== productId)
    .slice(0, 4);
    
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-cyber text-white">Produtos Relacionados</h2>
        <button 
          onClick={() => navigate('/products', { state: { category } })}
          className="flex items-center text-cyberpunk-neon-blue hover:text-cyberpunk-neon-purple transition-colors"
        >
          <span>Ver todos</span>
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
