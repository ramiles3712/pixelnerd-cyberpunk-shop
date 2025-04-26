
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  link: string;
  linkText: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  title, 
  products, 
  link, 
  linkText 
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-cyber neon-text-blue">{title}</h2>
          <Button asChild variant="outline" className="border-cyberpunk-neon-purple text-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple/20 rounded-md font-cyber">
            <Link to={link} className="flex items-center gap-2">
              {linkText}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
