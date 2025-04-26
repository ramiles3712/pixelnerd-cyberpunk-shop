
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Teclado Mecânico RGB Gamer",
    description: "Teclado mecânico com switches blue, retroiluminação RGB customizável e design ergonômico para jogos intensos. Teclas anti-ghosting para máxima performance.",
    price: 249.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    category: "Acessórios Gamer",
    featured: true,
    new: true,
    stock: 15
  },
  {
    id: 2,
    name: "Mouse Gamer 16000 DPI RGB",
    description: "Mouse gamer com sensor óptico de 16000 DPI, 8 botões programáveis e iluminação RGB. Design ergonômico para máximo conforto em longas sessões de jogo.",
    price: 189.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
    category: "Acessórios Gamer",
    featured: true,
    new: false,
    stock: 8
  },
  {
    id: 3,
    name: "Headset Gamer 7.1 Surround",
    description: "Headset gamer com áudio surround 7.1, drivers de 50mm, microfone com cancelamento de ruído e almofadas de espuma memory foam.",
    price: 299.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Áudio",
    featured: false,
    new: true,
    stock: 12
  },
  {
    id: 4,
    name: "Luminária Pixel Art Retro",
    description: "Luminária decorativa de pixel art com 16 cores alteráveis via controle remoto. Perfeita para dar um toque geek ao seu espaço gamer.",
    price: 149.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1563073409-609e92dff230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl4ZWwlMjBhcnR8ZW58MHx8MHx8fDA%3D",
    category: "Decoração Geek",
    featured: true,
    new: false,
    stock: 7
  },
  {
    id: 5,
    name: "Mousepad Extended RGB",
    description: "Mousepad gamer extended com iluminação RGB em toda borda, superfície de tecido de alta precisão e base antiderrapante.",
    price: 129.99,
    discount: 5,
    image: "https://images.unsplash.com/photo-1616363088386-31c4a8414858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vdXNlcGFkfGVufDB8fDB8fHww",
    category: "Acessórios Gamer",
    featured: false,
    new: true,
    stock: 20
  },
  {
    id: 6,
    name: "Caneca Pixel Art Gamers",
    description: "Caneca de cerâmica de alta qualidade com design de pixel art de controles clássicos de videogame. Capacidade de 350ml.",
    price: 49.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbXVnfGVufDB8fDB8fHww",
    category: "Decoração Geek",
    featured: true,
    new: false,
    stock: 25
  },
  {
    id: 7,
    name: "Suporte de Headset RGB",
    description: "Suporte para headset com iluminação RGB, base estável com 3 portas USB e controle touch para alteração de cores.",
    price: 159.99,
    discount: 12,
    image: "https://images.unsplash.com/photo-1615655449925-7365ba26587c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Acessórios Gamer",
    featured: true,
    new: false,
    stock: 10
  },
  {
    id: 8,
    name: "Quadro Decorativo Pixel Art",
    description: "Quadro decorativo com moldura em pixel art de personagens clássicos de videogame. Impressão de alta qualidade em material premium.",
    price: 89.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBpeGVsJTIwYXJ0fGVufDB8fDB8fHww",
    category: "Decoração Geek",
    featured: false,
    new: true,
    stock: 15
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getPopularCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};
