
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Erro",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would send this to the server
    toast({
      title: "Sucesso!",
      description: "Você foi inscrito na nossa newsletter.",
      variant: "default",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-dark-purple/30 to-cyberpunk-neon-blue/20 z-0"></div>
      <div className="absolute inset-0" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300FFFF' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '20px 20px',
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-cyber neon-text-blue mb-4">Entre na nossa Network</h2>
          <p className="text-gray-300 mb-8">
            Receba novidades, promoções exclusivas e conteúdo especial diretamente no seu e-mail.
            Sem spam, apenas pixels de qualidade.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-black bg-opacity-50 border border-cyberpunk-neon-blue/50 focus:border-cyberpunk-neon-blue text-white rounded-md flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple/80 text-white font-bold rounded-md button-hover-effect px-6"
            >
              Inscrever-se
            </Button>
          </form>
          
          <p className="text-gray-500 text-xs mt-4">
            Ao se inscrever, você concorda com nossa Política de Privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
