
import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad, Monitor, Image, Headphones } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Acessórios Gamer',
    description: 'Level up na sua experiência com nossos acessórios',
    icon: <Gamepad size={40} className="text-cyberpunk-neon-blue" />,
    link: '/products?category=acessorios-gamer',
    color: 'from-cyberpunk-neon-blue/20 to-cyberpunk-neon-blue/5'
  },
  {
    id: 2,
    name: 'Hardware',
    description: 'Componentes de alta performance para seu setup',
    icon: <Monitor size={40} className="text-cyberpunk-neon-purple" />,
    link: '/products?category=hardware',
    color: 'from-cyberpunk-neon-purple/20 to-cyberpunk-neon-purple/5'
  },
  {
    id: 3,
    name: 'Decoração Geek',
    description: 'Deixe seu espaço com a sua cara nerd',
    icon: <Image size={40} className="text-cyberpunk-neon-blue" />,
    link: '/products?category=decoracao-geek',
    color: 'from-cyberpunk-neon-blue/20 to-cyberpunk-neon-blue/5'
  },
  {
    id: 4,
    name: 'Áudio',
    description: 'Som imersivo para suas jornadas virtuais',
    icon: <Headphones size={40} className="text-cyberpunk-neon-purple" />,
    link: '/products?category=audio',
    color: 'from-cyberpunk-neon-purple/20 to-cyberpunk-neon-purple/5'
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-cyberpunk-dark-gray/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-cyber neon-text-blue text-center mb-12">Categorias</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id}
              className="group"
            >
              <div className={`h-full rounded-lg p-6 bg-gradient-to-br ${category.color} backdrop-blur-sm border border-white/10 hover:shadow-lg hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center text-center cyberpunk-card hover:transform hover:scale-[1.02]`}>
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-cyber text-white mb-2">{category.name}</h3>
                <p className="text-gray-400">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
