import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  Zap,
  Shield,
  Users,
  Clock,
  Star,
  ChevronRight,
  CreditCard,
  Package,
  Lock,
  Database,
  User,
  ArrowRight,
  CheckCircle,
  Eye,
  Headphones,
  AlertTriangle,
  TrendingUp,
  Wifi,
  Smartphone,
  Menu,
  X,
  Crown,
  DollarSign,
} from "lucide-react";

const LandingPage = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanLineActive, setScanLineActive] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 🔐 PODSTAWOWE ZABEZPIECZENIA
  useEffect(() => {
    // Ukrycie konsoli
    window.console.log = () => {};
    window.console.error = () => {};
    window.console.warn = () => {};
    
    // Blokada prawego przycisku
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Blokada F12 i Ctrl+U
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        alert('🔒 Funkcja wyłączona ze względów bezpieczeństwa');
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Password protection
    const checkPassword = () => {
      const storedAuth = sessionStorage.getItem('hustler_auth');
      if (storedAuth === 'verified') {
        setIsAuthenticated(true);
        return true;
      }

      const passwords = ['HUSTLER2025', 'PINK_SECURITY', 'CYBER_ACCESS'];
      let attempts = 0;
      const maxAttempts = 3;

      const promptPassword = () => {
        if (attempts >= maxAttempts) {
          alert('🚫 Zbyt wiele prób. Dostęp zablokowany.');
          window.close();
          return false;
        }

        const password = prompt('🔐 DOSTĘP ZABEZPIECZONY\nWprowadź hasło dostępu:');
        
        if (!password) {
          window.close();
          return false;
        }

        if (passwords.includes(password.toUpperCase())) {
          sessionStorage.setItem('hustler_auth', 'verified');
          setIsAuthenticated(true);
          return true;
        } else {
          attempts++;
          alert(`❌ Nieprawidłowe hasło. Pozostałe próby: ${maxAttempts - attempts}`);
          return promptPassword();
        }
      };

      return promptPassword();
    };

    // Initialize password check
    checkPassword();

    // Animations
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    const scanInterval = setInterval(() => {
      setScanLineActive(true);
      setTimeout(() => setScanLineActive(false), 1000);
    }, 5000);

    // Show navbar on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowNavbar(scrolled);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      clearInterval(scanInterval);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleTelegramClick = () => {
    const realLink = "https://t.me/m/1SHNvmVeYzQ8";
    window.open(realLink, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Bramki Płatnicze",
      description: "Blik, Revolut, PayPal i inne metody",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "OLX / Marketplace",
      description: "Sprawdzone metody marketplace",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Facebook / Social",
      description: "Dostęp do platform społecznościowych",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bazy Danych",
      description: "Dostęp do logów i baz danych",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Panele Klienta",
      description: "Bezpieczne dostępy do systemów",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ekskluzywne Metody",
      description: "Unikalne rozwiązania dla członków",
    },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">🔐 Weryfikacja dostępu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden relative">
      {/* Cyber effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent transform transition-transform duration-200 ${
            glitchActive ? "translate-x-2" : "translate-x-0"
          }`}
        />
        <div
          className={`absolute inset-0 border-t-2 border-pink-500/30 transition-transform duration-1000 ${
            scanLineActive ? "translate-y-full" : "-translate-y-full"
          }`}
        />
      </div>

      {/* Header */}
      <header className="relative z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Hustler Team
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                O nas
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                Kontakt
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-800">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-pink-500 transition-colors"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-pink-500 transition-colors"
              >
                O nas
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-pink-500 transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                HUSTLER TEAM
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Ekskluzywna społeczność dla ambitnych osób
              <br />
              <span className="text-pink-500 font-semibold">Sprawdzone metody • Bezpieczne działania • Realne efekty</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleTelegramClick}
                className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Dołącz do Telegram</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <Shield className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Bezpieczeństwo</h3>
                <p className="text-gray-400 text-sm">Najwyższy poziom ochrony i anonimowości</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Społeczność</h3>
                <p className="text-gray-400 text-sm">Doświadczony team z 3-letnim stażem</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <TrendingUp className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Efektywność</h3>
                <p className="text-gray-400 text-sm">Sprawdzone metody i stała aktualizacja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Nasze Usługi
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferujemy kompleksowe rozwiązania dla wszystkich potrzeb
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Dlaczego My?
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3 lata doświadczenia</h3>
                    <p className="text-gray-400">Sprawdzone metody z długoletnią praktyką</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bezpieczne działania</h3>
                    <p className="text-gray-400">Najwyższy poziom bezpieczeństwa i anonimowości</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Support 24/7</h3>
                    <p className="text-gray-400">Całodobowe wsparcie przez Telegram</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Stała aktualizacja</h3>
                    <p className="text-gray-400">Ciągłe doskonalenie technik i narzędzi</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-pink-500">Prowizja tylko 25%</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Bez ukrytych opłat. Płacisz tylko gdy zarabiasz. 
                  To pokazuje nasze zaufanie do własnych metod.
                </p>
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-4 border border-pink-500/30">
                  <p className="text-sm text-pink-200">
                    💰 Twój zysk = Nasz zysk. Jesteśmy zmotywowani do Twojego sukcesu!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                Dołącz do Nas
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Gotowy na zmianę? Skontaktuj się z nami przez Telegram 
              i rozpocznij swoją drogę do finansowej niezależności
            </p>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <MessageCircle className="w-8 h-8 text-pink-500" />
                  <span className="text-2xl font-semibold">Telegram</span>
                </div>
                
                <p className="text-gray-400">
                  Kliknij poniżej, aby dołączyć do naszej ekskluzywnej grupy
                </p>
                
                <button
                  onClick={handleTelegramClick}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Dołącz Teraz</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <p className="text-sm text-gray-500">
                  🔒 Bezpieczne połączenie • Weryfikacja wymagana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Hustler Team
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Ekskluzywna społeczność • Bezpieczne metody • Realne rezultaty
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 Hustler Team. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;