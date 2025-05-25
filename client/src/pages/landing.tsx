import React, { useEffect, useState } from 'react';
import { MessageCircle, Zap, Shield, Users, Clock, Star, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanLineActive, setScanLineActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    const scanInterval = setInterval(() => {
      setScanLineActive(true);
      setTimeout(() => setScanLineActive(false), 1000);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(scanInterval);
    };
  }, []);

  const handleTelegramClick = () => {
    // Placeholder for Telegram link - user can replace with actual link
    window.open('https://t.me/YourHustlerTeamGroup', '_blank');
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Błyskawiczna szybkość",
      description: "Codziennie nowe logi i natychmiastowe działanie"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pełna anonimowość",
      description: "Twoja prywatność jest naszym priorytetem"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Doświadczony team",
      description: "Zespół z wieloletnim doświadczeniem"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Wsparcie dostępne całodobowo"
    }
  ];

  const testimonials = [
    {
      name: "Anonymous User",
      rating: 5,
      comment: "Najlepszy team w branży! Szybko, skutecznie, bez problemów."
    },
    {
      name: "Client #247",
      rating: 5,
      comment: "25% fee to nic w porównaniu do jakości usług. Polecam!"
    },
    {
      name: "Verified Member",
      rating: 5,
      comment: "Codziennie nowe możliwości. Team zawsze dotrzymuje słowa."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className={`transition-all duration-200 ${glitchActive ? 'animate-pulse scale-105' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              HUSTLER
            </h1>
            <h2 className="text-4xl md:text-6xl font-black text-pink-500 mb-8 tracking-wider">
              TEAM
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ekskluzywna grupa Telegram dla prawdziwych hustlerów
          </p>
          
          <button 
            onClick={handleTelegramClick}
            className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 neon-text"
          >
            <span className="relative flex items-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Dołącz na Telegram
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-1/3 left-0 right-0 h-0.5 bg-pink-500 ${glitchActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}></div>
          <div className={`absolute top-2/3 left-0 right-0 h-0.5 bg-cyan-400 ${glitchActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}></div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-pink-500">
            NASZA OFERTA
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg p-8 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
              <div className="text-center">
                <div className="text-6xl font-black text-pink-500 mb-4">25%</div>
                <h3 className="text-2xl font-bold mb-4">Prowizja</h3>
                <p className="text-gray-300">Płacisz tylko za to co zarobisz</p>
              </div>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur border border-purple-500/30 rounded-lg p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="text-center">
                <div className="text-6xl font-black text-purple-500 mb-4">0</div>
                <h3 className="text-2xl font-bold mb-4">Stałe opłaty</h3>
                <p className="text-gray-300">Brak ukrytych kosztów i abonamentów</p>
              </div>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <div className="text-center">
                <div className="text-6xl font-black text-cyan-400 mb-4">24h</div>
                <h3 className="text-2xl font-bold mb-4">Szybkość</h3>
                <p className="text-gray-300">Natychmiastowe działanie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-cyan-400">
            DLACZEGO WARTO?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-pink-400 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-pink-500">
            OPINIE KLIENTÓW
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-lg p-6 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-pink-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-bold text-pink-400">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
            GOTOWY NA <span className="text-pink-500">DZIAŁANIE?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Dołącz do ekskluzywnej grupy i zacznij zarabiać już dziś
          </p>
          
          <div className="space-y-6">
            <button 
              onClick={handleTelegramClick}
              className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 w-full md:w-auto pulse-border"
            >
              <span className="relative flex items-center justify-center">
                <MessageCircle className="w-8 h-8 mr-4" />
                Dołącz na Telegram
                <ChevronRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <p className="text-sm text-gray-500">
              Kliknij przycisk powyżej, aby otrzymać link do grupy
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-black text-pink-500 mb-4">HUSTLER TEAM</div>
          <p className="text-gray-500">© 2024 Hustler Team. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;