
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.includes('@')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would send this to the server
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado por entrar em contato. Responderemos em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-cyber neon-text-blue mb-4">Entre em Contato</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Tem alguma dúvida, sugestão ou precisa de ajuda? Estamos aqui para te ajudar.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="cyberpunk-card">
            <h2 className="text-2xl font-cyber neon-text-blue mb-6 flex items-center">
              <MessageSquare className="mr-2" size={24} />
              <span>Envie uma Mensagem</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Nome <span className="text-cyberpunk-neon-purple">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="bg-cyberpunk-dark-gray border-cyberpunk-neon-blue/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  E-mail <span className="text-cyberpunk-neon-purple">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="bg-cyberpunk-dark-gray border-cyberpunk-neon-blue/50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sobre o que você deseja falar?"
                  className="bg-cyberpunk-dark-gray border-cyberpunk-neon-blue/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Mensagem <span className="text-cyberpunk-neon-purple">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem aqui..."
                  className="w-full bg-cyberpunk-dark-gray border border-cyberpunk-neon-blue/50 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyberpunk-neon-blue"
                />
              </div>
              
              <Button
                type="submit"
                className="bg-cyberpunk-neon-blue text-black hover:bg-cyberpunk-neon-blue/80 font-bold flex items-center gap-2"
              >
                <Send size={16} />
                <span>Enviar Mensagem</span>
              </Button>
            </form>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-8">
          {/* Info Cards */}
          <div className="cyberpunk-card hover:border-cyberpunk-neon-blue transition-all duration-300">
            <div className="flex items-start">
              <div className="mr-4">
                <Mail className="text-cyberpunk-neon-blue h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-cyber text-white mb-2">E-mail</h3>
                <p className="text-gray-300">contato@pixelnerd.com.br</p>
                <p className="text-gray-300">suporte@pixelnerd.com.br</p>
              </div>
            </div>
          </div>
          
          <div className="cyberpunk-card hover:border-cyberpunk-neon-purple transition-all duration-300">
            <div className="flex items-start">
              <div className="mr-4">
                <Phone className="text-cyberpunk-neon-purple h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-cyber text-white mb-2">Telefone</h3>
                <p className="text-gray-300">(11) 99999-9999</p>
                <p className="text-gray-300">Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>
          </div>
          
          <div className="cyberpunk-card hover:border-cyberpunk-neon-blue transition-all duration-300">
            <div className="flex items-start">
              <div className="mr-4">
                <MapPin className="text-cyberpunk-neon-blue h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-cyber text-white mb-2">Localização</h3>
                <p className="text-gray-300">Av. Paulista, 1000</p>
                <p className="text-gray-300">São Paulo, SP - Brasil</p>
                <p className="text-gray-300">CEP: 01310-100</p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="cyberpunk-card">
            <h3 className="text-xl font-cyber text-white mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/PixelNerdStore" target="_blank" rel="noopener noreferrer" className="bg-cyberpunk-dark-gray hover:bg-cyberpunk-neon-blue/20 transition-colors p-3 rounded-full">
                <svg className="w-6 h-6 text-cyberpunk-neon-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com/PixelNerdStore" target="_blank" rel="noopener noreferrer" className="bg-cyberpunk-dark-gray hover:bg-cyberpunk-neon-purple/20 transition-colors p-3 rounded-full">
                <svg className="w-6 h-6 text-cyberpunk-neon-purple" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/PixelNerdStore" target="_blank" rel="noopener noreferrer" className="bg-cyberpunk-dark-gray hover:bg-cyberpunk-neon-blue/20 transition-colors p-3 rounded-full">
                <svg className="w-6 h-6 text-cyberpunk-neon-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com/PixelNerdStore" target="_blank" rel="noopener noreferrer" className="bg-cyberpunk-dark-gray hover:bg-cyberpunk-neon-purple/20 transition-colors p-3 rounded-full">
                <svg className="w-6 h-6 text-cyberpunk-neon-purple" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
