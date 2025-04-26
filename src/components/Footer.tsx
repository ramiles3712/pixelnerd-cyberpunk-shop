
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyberpunk-dark-gray border-t border-cyberpunk-neon-blue/30 pt-10 pb-6 mt-16 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-2">
              <span className="text-3xl font-cyber font-bold neon-text-blue">
                Pixel<span className="neon-text-purple">Nerd</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4 text-center md:text-left">Seu universo geek em cada pixel.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/PixelNerdStore" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/PixelNerdStore" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/PixelNerdStore" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyberpunk-neon-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cyber text-lg mb-4 text-white">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2 text-gray-300">
              <Link to="/products" className="hover:text-cyberpunk-neon-blue transition-colors">Produtos</Link>
              <Link to="/about" className="hover:text-cyberpunk-neon-blue transition-colors">Sobre Nós</Link>
              <Link to="/contact" className="hover:text-cyberpunk-neon-blue transition-colors">Contato</Link>
              <Link to="/privacy" className="hover:text-cyberpunk-neon-blue transition-colors">Privacidade</Link>
              <Link to="/terms" className="hover:text-cyberpunk-neon-blue transition-colors">Termos de Uso</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cyber text-lg mb-4 text-white">Contato</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 text-cyberpunk-neon-purple" />
                <span>contato@pixelnerd.com.br</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 text-cyberpunk-neon-purple" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Home size={18} className="mr-2 text-cyberpunk-neon-purple" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} PixelNerd - Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
