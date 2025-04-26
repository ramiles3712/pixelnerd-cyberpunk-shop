
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, getPopularCategories } from '@/data/products';
import { Product } from '@/types/product';

const ProductListing = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const filterParam = queryParams.get('filter');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('recommended');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = getPopularCategories();
  
  useEffect(() => {
    let results = [...products];
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    results = results.filter(product => {
      const effectivePrice = product.discount > 0 
        ? product.price * (100 - product.discount) / 100 
        : product.price;
      return effectivePrice >= priceRange[0] && effectivePrice <= priceRange[1];
    });
    
    // Filter by special filters (new, featured)
    if (filterParam === 'new') {
      results = results.filter(product => product.new);
    } else if (filterParam === 'featured') {
      results = results.filter(product => product.featured);
    }
    
    // Sort products
    switch(sortBy) {
      case 'price-asc':
        results.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (100 - a.discount) / 100 : a.price;
          const priceB = b.discount > 0 ? b.price * (100 - b.discount) / 100 : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        results.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (100 - a.discount) / 100 : a.price;
          const priceB = b.discount > 0 ? b.price * (100 - b.discount) / 100 : b.price;
          return priceB - priceA;
        });
        break;
      case 'discount':
        results.sort((a, b) => b.discount - a.discount);
        break;
      case 'newest':
        results.sort((a, b) => (a.new === b.new) ? 0 : a.new ? -1 : 1);
        break;
      default:
        // Default sorting (recommended) - no specific sort
        break;
    }
    
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, priceRange, sortBy, filterParam]);
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-cyber neon-text-blue mb-2">Nossos Produtos</h1>
        <p className="text-gray-400">
          Descubra os melhores produtos geek e tech para levar seu setup ao próximo level
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <Input 
              type="text"
              placeholder="Buscar produtos..."
              className="pl-10 border-cyberpunk-neon-blue/50 bg-cyberpunk-dark-gray"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyberpunk-neon-blue/70 h-4 w-4" />
          </div>
          
          {/* Sort Dropdown */}
          <div className="w-full md:w-1/3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-cyberpunk-neon-blue/50 bg-cyberpunk-dark-gray text-white rounded-md p-2"
            >
              <option value="recommended">Recomendados</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="discount">Maior Desconto</option>
              <option value="newest">Novidades</option>
            </select>
          </div>
          
          {/* Filter Toggle Button */}
          <div className="w-full md:w-auto">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="w-full md:w-auto border-cyberpunk-neon-purple text-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple/20"
            >
              <Filter size={16} className="mr-2" />
              <span>Filtros</span>
            </Button>
          </div>
        </div>
        
        {/* Advanced Filters */}
        {showFilters && (
          <div className="cyberpunk-card mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {/* Categories */}
            <div>
              <h3 className="text-white font-cyber mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  className={selectedCategory === null 
                    ? "bg-cyberpunk-neon-blue text-black"
                    : "border-cyberpunk-neon-blue/50 text-white"}
                  onClick={() => setSelectedCategory(null)}
                >
                  Todos
                </Button>
                
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category 
                      ? "bg-cyberpunk-neon-blue text-black"
                      : "border-cyberpunk-neon-blue/50 text-white"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="text-white font-cyber mb-3">Preço</h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-gray-400">
                  <span>R$ {priceRange[0]}</span>
                  <span>R$ {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-cyberpunk-neon-blue"
                />
              </div>
            </div>
            
            {/* Special Filters */}
            <div>
              <h3 className="text-white font-cyber mb-3">Filtros Especiais</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filterParam === 'new' ? "default" : "outline"}
                  className={filterParam === 'new' 
                    ? "bg-cyberpunk-neon-purple text-white"
                    : "border-cyberpunk-neon-purple/50 text-white"}
                  onClick={() => {
                    const params = new URLSearchParams(location.search);
                    if (filterParam === 'new') {
                      params.delete('filter');
                    } else {
                      params.set('filter', 'new');
                    }
                    window.history.replaceState({}, '', `${location.pathname}?${params}`);
                    window.location.reload();
                  }}
                >
                  Novidades
                </Button>
                
                <Button
                  variant={filterParam === 'featured' ? "default" : "outline"}
                  className={filterParam === 'featured' 
                    ? "bg-cyberpunk-neon-purple text-white"
                    : "border-cyberpunk-neon-purple/50 text-white"}
                  onClick={() => {
                    const params = new URLSearchParams(location.search);
                    if (filterParam === 'featured') {
                      params.delete('filter');
                    } else {
                      params.set('filter', 'featured');
                    }
                    window.history.replaceState({}, '', `${location.pathname}?${params}`);
                    window.location.reload();
                  }}
                >
                  Destaques
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-2xl font-cyber neon-text-blue mb-4">Nenhum produto encontrado</div>
          <p className="text-gray-400 mb-6">Tente ajustar seus filtros ou buscar por outro termo.</p>
          <Button 
            variant="default"
            className="bg-cyberpunk-neon-blue text-black hover:bg-cyberpunk-neon-blue/80"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory(null);
              setPriceRange([0, 1000]);
              setSortBy('recommended');
            }}
          >
            Limpar Filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
