
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black border-b border-cyberpunk-neon-blue/30 py-4 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="PixelNerd Logo" 
            className="h-10 mr-2"
          />
          <span className="sr-only">PixelNerd</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-cyber text-white hover:neon-text-blue transition-all">Home</Link>
          <Link to="/products" className="font-cyber text-white hover:neon-text-blue transition-all">Produtos</Link>
          <Link to="/about" className="font-cyber text-white hover:neon-text-blue transition-all">Sobre</Link>
          <Link to="/contact" className="font-cyber text-white hover:neon-text-blue transition-all">Contato</Link>
        </div>

        {/* Search and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Input 
              className="bg-cyberpunk-dark-gray border-cyberpunk-neon-blue/50 rounded-md pl-10 w-[200px]" 
              placeholder="Buscar..." 
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyberpunk-neon-blue/70 h-4 w-4" />
          </div>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" className="p-2 hover:bg-cyberpunk-neon-blue/20 rounded-md">
              <ShoppingCart className="text-cyberpunk-neon-blue h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyberpunk-neon-purple text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="relative mr-4">
            <Button variant="ghost" className="p-1 hover:bg-cyberpunk-neon-blue/20 rounded-md">
              <ShoppingCart className="text-cyberpunk-neon-blue h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyberpunk-neon-purple text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" onClick={toggleMenu} className="p-1">
            <Menu className="text-cyberpunk-neon-blue h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-cyberpunk-neon-blue/30 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="font-cyber text-white hover:neon-text-blue transition-all" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="font-cyber text-white hover:neon-text-blue transition-all" onClick={toggleMenu}>Produtos</Link>
            <Link to="/about" className="font-cyber text-white hover:neon-text-blue transition-all" onClick={toggleMenu}>Sobre</Link>
            <Link to="/contact" className="font-cyber text-white hover:neon-text-blue transition-all" onClick={toggleMenu}>Contato</Link>
            <div className="relative">
              <Input 
                className="bg-cyberpunk-dark-gray border-cyberpunk-neon-blue/50 rounded-md pl-10 w-full" 
                placeholder="Buscar..." 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyberpunk-neon-blue/70 h-4 w-4" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
