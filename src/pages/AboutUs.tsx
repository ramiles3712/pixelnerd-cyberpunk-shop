
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-cyber neon-text-blue mb-4">Sobre a PixelNerd</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Somos geeks, para geeks. Cada pixel pensado para seu universo pessoal.
        </p>
      </div>
      
      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="cyberpunk-card h-full">
            <div className="relative overflow-hidden rounded-md h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-neon-blue/20 to-cyberpunk-neon-purple/20"></div>
              <div className="flex items-center justify-center h-full p-10">
                {/* Pixel Art Shop Logo */}
                <div className="w-64 h-64 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="10" y="10" width="80" height="80" fill="#000" stroke="#00FFFF" strokeWidth="2" />
                    <text x="50" y="45" fontFamily="'Press Start 2P', cursive" fontSize="12" fill="#00FFFF" textAnchor="middle">PIXEL</text>
                    <text x="50" y="65" fontFamily="'Press Start 2P', cursive" fontSize="12" fill="#9D00FF" textAnchor="middle">NERD</text>
                    <rect x="25" y="70" width="50" height="10" fill="#00FFFF" />
                    <rect x="35" y="20" width="30" height="5" fill="#9D00FF" />
                    <rect x="20" y="30" width="5" height="5" fill="#00FFFF" />
                    <rect x="30" y="30" width="5" height="5" fill="#00FFFF" />
                    <rect x="40" y="30" width="5" height="5" fill="#00FFFF" />
                    <rect x="50" y="30" width="5" height="5" fill="#00FFFF" />
                    <rect x="60" y="30" width="5" height="5" fill="#00FFFF" />
                    <rect x="70" y="30" width="5" height="5" fill="#00FFFF" />
                  </svg>
                  <div className="absolute inset-0 opacity-50 animate-glitch">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect x="10" y="10" width="80" height="80" fill="none" stroke="#FF00FF" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-cyber neon-text-purple mb-4">Nossa História</h2>
          <p className="text-gray-300 mb-4">
            Fundada em 2022 por um grupo de amigos apaixonados por games, animes e cultura pop, a PixelNerd nasceu com uma missão clara: criar produtos que realmente entendessem a alma geek.
          </p>
          <p className="text-gray-300 mb-4">
            Cansados de encontrar apenas produtos genéricos no mercado, decidimos criar uma marca que respirasse pixels e falasse a mesma língua dos verdadeiros nerds e entusiastas de tecnologia.
          </p>
          <p className="text-gray-300">
            Hoje, somos uma equipe de 12 pessoas, todos apaixonados por diferentes universos da cultura geek, trabalhando para trazer produtos exclusivos e de alta qualidade para nossos clientes.
          </p>
        </div>
      </div>
      
      {/* Our Mission Section */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-cyber neon-text-blue mb-4">Nossa Missão</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="cyberpunk-card hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 h-full p-6">
            <h3 className="text-xl font-cyber text-cyberpunk-neon-blue mb-3">Ser Referência</h3>
            <p className="text-gray-300">
              Queremos ser referência em produtos geek-tech no Brasil, trazendo inovação e qualidade para o universo nerd.
            </p>
          </div>
          
          <div className="cyberpunk-card hover:shadow-[0_0_15px_rgba(157,0,255,0.3)] transition-all duration-300 h-full p-6">
            <h3 className="text-xl font-cyber text-cyberpunk-neon-purple mb-3">Conectar</h3>
            <p className="text-gray-300">
              Conectar pessoas através do amor pela cultura geek, criando uma comunidade forte e engajada.
            </p>
          </div>
          
          <div className="cyberpunk-card hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 h-full p-6">
            <h3 className="text-xl font-cyber text-cyberpunk-neon-blue mb-3">Inovar</h3>
            <p className="text-gray-300">
              Trazer sempre novidades que elevam a experiência geek, com produtos funcionais e cheios de personalidade.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-cyber neon-text-purple mb-6">Junte-se ao Nosso Universo</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Venha fazer parte da nossa comunidade e embarque nessa jornada. Siga-nos nas redes sociais, inscreva-se em nossa newsletter e fique por dentro de todas as novidades.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-cyberpunk-neon-blue text-black hover:bg-cyberpunk-neon-blue/80 font-bold">
            <Link to="/products">Nossos Produtos</Link>
          </Button>
          <Button asChild variant="outline" className="border-cyberpunk-neon-purple text-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple/20 font-bold">
            <Link to="/contact">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
