
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with animated pixels */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-cyberpunk-dark-purple opacity-90"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239D00FF' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '20px 20px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-cyber mb-6 max-w-3xl">
            <span className="neon-text-blue">Seu universo geek </span> 
            <span className="neon-text-purple">em cada pixel.</span>
          </h1>
          
          <p className="text-gray-200 mb-8 max-w-xl text-lg">
            Produtos exclusivos para gamers, colecionadores e amantes da cultura geek. 
            Level up no seu estilo com a PixelNerd.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button asChild className="bg-cyberpunk-neon-blue hover:bg-cyberpunk-neon-blue/80 text-black font-bold py-2 px-6 rounded-md button-hover-effect">
              <Link to="/products">Ver Produtos</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border border-cyberpunk-neon-purple text-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple/20 font-bold py-2 px-6 rounded-md button-hover-effect">
              <Link to="/about">Sobre Nós</Link>
            </Button>
          </div>
        </div>

        {/* Pixel artwork/decorated video game controller */}
        <div className="relative w-full h-64 md:h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-cyberpunk-neon-blue/20 to-cyberpunk-neon-purple/20 rounded-full blur-2xl"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              {/* Stylized Gaming Controller SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M85,40 C90,45 90,55 85,60 L75,70 C70,75 60,75 55,70 L45,70 C40,75 30,75 25,70 L15,60 C10,55 10,45 15,40 L25,30 C30,25 40,25 45,30 L55,30 C60,25 70,25 75,30 L85,40 Z" 
                  fill="#000" stroke="#00FFFF" strokeWidth="1" className="animate-pulse" />
                <circle cx="70" cy="50" r="5" fill="#9D00FF" className="animate-pulse" />
                <circle cx="80" cy="50" r="5" fill="#9D00FF" className="animate-pulse" />
                <circle cx="30" cy="50" r="5" fill="#00FFFF" className="animate-pulse" />
                <circle cx="20" cy="50" r="5" fill="#00FFFF" className="animate-pulse" />
                <rect x="45" y="45" width="10" height="10" fill="#9D00FF" className="animate-pulse" />
              </svg>

              {/* Glitch effect overlay */}
              <div className="absolute inset-0 opacity-50 animate-glitch">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M85,40 C90,45 90,55 85,60 L75,70 C70,75 60,75 55,70 L45,70 C40,75 30,75 25,70 L15,60 C10,55 10,45 15,40 L25,30 C30,25 40,25 45,30 L55,30 C60,25 70,25 75,30 L85,40 Z" 
                    fill="none" stroke="#FF00FF" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
