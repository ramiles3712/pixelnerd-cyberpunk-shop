
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoriesSection from '@/components/CategoriesSection';
import Newsletter from '@/components/Newsletter';
import { getFeaturedProducts, getNewProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <FeaturedProducts 
        title="Produtos em Destaque" 
        products={featuredProducts} 
        link="/products" 
        linkText="Ver Todos" 
      />
      
      <CategoriesSection />
      
      <FeaturedProducts 
        title="Novidades" 
        products={newProducts} 
        link="/products?filter=new" 
        linkText="Ver Mais" 
      />
      
      <Newsletter />
    </div>
  );
};

export default Index;
