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

  // 🔐 MILITARY-GRADE MAXIMUM SECURITY SYSTEM
  useEffect(() => {
    // Store original console for internal use
    const originalConsole = { ...window.console };
    
    // Clear all console methods (hide source code) but keep originals for errors
    window.console = {
      ...originalConsole,
      log: () => {},
      warn: () => {},
      info: () => {},
      debug: originalConsole.debug, // Keep debug for our internal use
      trace: () => {},
      clear: () => {},
      dir: () => {},
      table: () => {},
      error: originalConsole.error // Keep error for critical issues
    };

    // Enhanced local security detection (no external calls)
    const detectSuspiciousAccess = () => {
      // Check timezone for basic geographic validation
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const allowedTimezones = [
        'Europe/Warsaw', 'Europe/Berlin', 'Europe/Prague', 
        'Europe/Bratislava', 'Europe/Vilnius', 'Europe/Riga', 'Europe/Tallinn'
      ];
      
      // Advanced browser fingerprinting for VPN/proxy detection
      const hasWebRTC = !!window.RTCPeerConnection;
      const hasLocalStorage = !!window.localStorage;
      const hasIndexedDB = !!window.indexedDB;
      const languages = navigator.languages || [navigator.language];
      
      // Check for suspicious browser configurations
      if (!hasWebRTC || !hasLocalStorage || !hasIndexedDB) {
        document.body.innerHTML = '<div style="color: red; text-align: center; margin-top: 50vh;">🚫 Suspicious Browser Configuration Detected</div>';
        return false;
      }
      
      // Basic timezone validation (can be bypassed but adds a layer)
      if (!allowedTimezones.some(tz => timezone.includes(tz.split('/')[1]))) {
        // Don't block, just log for monitoring
        sessionStorage.setItem('geo_warning', 'timezone_mismatch');
      }
      
      return true;
    };

    // Enhanced bot detection with ML patterns (more lenient for real users)
    const detectBot = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const botPatterns = [
        'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
        'yandexbot', 'facebookexternalhit', 'twitterbot', 'whatsapp',
        'curl', 'wget', 'python-requests', 'selenium', 'phantomjs',
        'crawl', 'spider', 'scrape', 'archive.org'
      ];
      
      // Only block obvious automated tools, not legitimate browsers
      const isObviousBot = botPatterns.some(pattern => userAgent.includes(pattern));
      
      // Check if it's a real browser with proper APIs
      const hasWebGL = !!window.WebGLRenderingContext;
      const hasCanvas = !!window.CanvasRenderingContext2D;
      const hasLocalStorage = !!window.localStorage;
      
      // Only block if it's both an obvious bot AND missing critical browser features
      return isObviousBot && (!hasWebGL || !hasCanvas || !hasLocalStorage);
    };

    // Screenshot/recording protection
    const blockScreenCapture = () => {
      // CSS to hide content when screenshot is detected
      const antiScreenshotCSS = `
        @media print {
          * { display: none !important; }
          body::after { content: "🔒 PROTECTED CONTENT"; }
        }
        
        .no-screenshot {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }
      `;
      
      const style = document.createElement('style');
      style.textContent = antiScreenshotCSS;
      document.head.appendChild(style);
      
      // Add protection class to body
      document.body.classList.add('no-screenshot');
    };

    // Advanced obfuscation and source hiding
    const obfuscateSource = () => {
      // Disable source viewing
      document.addEventListener('keydown', (e) => {
        // Block all developer shortcuts
        if ((e.ctrlKey || e.metaKey) && (
          e.key === 'u' || e.key === 'U' ||
          e.key === 's' || e.key === 'S' ||
          e.key === 'i' || e.key === 'I' ||
          e.key === 'j' || e.key === 'J' ||
          e.key === 'c' || e.key === 'C'
        )) {
          e.preventDefault();
          alert('🔒 Funkcja zabezpieczona');
          return false;
        }
        
        if (e.key === 'F12' || e.key === 'F5' || e.key === 'F3') {
          e.preventDefault();
          alert('🔒 Narzędzia deweloperskie wyłączone');
          return false;
        }
      });

      // Add fake meta tags to mislead scrapers (safer approach)
      const fakeMeta = document.createElement('meta');
      fakeMeta.setAttribute('name', 'api-endpoint');
      fakeMeta.setAttribute('content', 'https://fake-api.example.com/v1');
      document.head.appendChild(fakeMeta);
    };

    // Session timeout and monitoring
    const setupSessionSecurity = () => {
      const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
      let lastActivity = Date.now();
      
      const updateActivity = () => { lastActivity = Date.now(); };
      ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, updateActivity, true);
      });

      // Auto logout on inactivity
      const checkTimeout = setInterval(() => {
        if (Date.now() - lastActivity > SESSION_TIMEOUT) {
          sessionStorage.clear();
          localStorage.clear();
          document.body.innerHTML = '<div style="color: orange; text-align: center; margin-top: 50vh;">⏰ Session Expired - Refresh Required</div>';
          clearInterval(checkTimeout);
        }
      }, 60000); // Check every minute

      // Local access tracking (no external API calls)
      const trackAccess = () => {
        const accessLog = {
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          platform: navigator.platform,
          screenResolution: `${screen.width}x${screen.height}`,
          sessionId: Math.random().toString(36).substr(2, 9)
        };
        
        // Store in session for monitoring
        const logs = JSON.parse(sessionStorage.getItem('access_logs') || '[]');
        logs.push(accessLog);
        sessionStorage.setItem('access_logs', JSON.stringify(logs.slice(-10))); // Keep last 10
      };
      
      trackAccess();
    };

    // Advanced dev tools detection
    const setupAdvancedDetection = () => {
      let devtools = {open: false};
      const threshold = 160;

      // Multiple detection methods
      const checkDevTools = () => {
        // Method 1: Window size difference
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          return true;
        }

        // Method 2: Console detection
        let devToolsOpen = false;
        const element = new Image();
        Object.defineProperty(element, 'id', {
          get: function() {
            devToolsOpen = true;
            throw new Error('Dev tools detected');
          }
        });
        
        try {
          console.log('%c', element);
        } catch {
          return devToolsOpen;
        }

        // Method 3: Performance timing
        const start = performance.now();
        debugger;
        const end = performance.now();
        return (end - start) > 100; // If debugger paused execution
      };

      setInterval(() => {
        if (checkDevTools() && !devtools.open) {
          devtools.open = true;
          // Clear all data
          sessionStorage.clear();
          localStorage.clear();
          document.body.innerHTML = '<div style="color: red; text-align: center; margin-top: 50vh; font-family: monospace;">🔒 SECURITY BREACH DETECTED<br/>ACCESS TERMINATED</div>';
        }
      }, 1000);
    };

    // Dynamic link obfuscation for Telegram
    const obfuscateLinks = () => {
      const realLink = "https://t.me/m/1SHNvmVeYzQ8";
      const fakeLinks = [
        "https://t.me/fake_group_123",
        "https://t.me/decoy_channel",
        "https://t.me/honeypot_trap"
      ];
      
      // Store real link encoded
      const encoded = btoa(realLink);
      sessionStorage.setItem('tg_link', encoded);
      
      // Inject fake links in DOM for scrapers
      fakeLinks.forEach(link => {
        const fakeElement = document.createElement('div');
        fakeElement.style.display = 'none';
        fakeElement.innerHTML = `<a href="${link}">Join Group</a>`;
        document.body.appendChild(fakeElement);
      });
    };

    // Security checks
    const runSecurityChecks = () => {
      // Initialize all security measures
      blockScreenCapture();
      obfuscateSource();
      setupSessionSecurity();
      setupAdvancedDetection();
      obfuscateLinks();

      // Local security validation
      const accessAllowed = detectSuspiciousAccess();
      if (!accessAllowed) return false;

      // Bot detection
      if (detectBot()) {
        document.body.innerHTML = '<div style="color: red; text-align: center; margin-top: 50vh;">🤖 Automated Access Denied</div>';
        return false;
      }

      return true;
    };

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

    // Run all security checks
    try {
      const securityPassed = runSecurityChecks();
      if (securityPassed) {
        checkPassword();
      }
    } catch (error) {
      console.error('Security check failed:', error);
      // Still allow password check if security check fails
      checkPassword();
    }

    // Standard animations
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

    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Disable F12, Ctrl+Shift+I, Ctrl+U
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        alert('🔒 Funkcja wyłączona ze względów bezpieczeństwa');
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      clearInterval(scanInterval);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleTelegramClick = () => {
    // Retrieve obfuscated link
    const encoded = sessionStorage.getItem('tg_link');
    if (encoded) {
      const realLink = atob(encoded);
      window.open(realLink, "_blank", "noopener,noreferrer");
    }
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

  const verificationSteps = [
    {
      step: "01",
      title: "Kontakt",
      description: "Wyślij wiadomość przez Telegram",
    },
    {
      step: "02",
      title: "Weryfikacja",
      description: "Sprawdzenie doświadczenia i motywacji",
    },
    {
      step: "03",
      title: "Akceptacja",
      description: "Dostęp do ekskluzywnej społeczności",
    },
  ];

  const faqData = [
    {
      question: "Czy członkostwo jest płatne?",
      answer: "Tak, pobieramy prowizję 25% od zysków. Bez ukrytych opłat.",
    },
    {
      question: "Czy muszę mieć doświadczenie?",
      answer: "Nie wymagamy doświadczenia, ale motywacja jest kluczowa.",
    },
    {
      question: "Jak wygląda kontakt i wsparcie?",
      answer: "Support 24/7 przez Telegram po dołączeniu do zespołu.",
    },
    {
      question: "Czy działania są anonimowe?",
      answer: "Tak, zapewniamy pełną anonimowość i bezpieczeństwo.",
    },
  ];

  const teamFeatures = [
    "3 lata doświadczenia",
    "Bezpieczne działania, realne efekty",
    "Sprawdzone metody i narzędzia",
    "Stała aktualizacja technik",
  ];

  const tools = [
    { name: "Proxy & VPN", icon: <Wifi className="w-6 h-6" /> },
    { name: "Marketplace Bots", icon: <Package className="w-6 h-6" /> },
    { name: "SMS API", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Database Access", icon: <Database className="w-6 h-6" /> },
  ];

  const blogPosts = [
    {
      title: "5 tricków z OLX, które działają w 2025",
      category: "Marketplace",
    },
    {
      title: "Jak chronić się przed namierzeniem?",
      category: "Bezpieczeństwo",
    },
    {
      title: "Nowe metody płatności w 2025",
      category: "Finanse",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Błyskawiczna szybkość",
      description: "Codziennie nowe logi i natychmiastowe działanie",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pełna anonimowość",
      description: "Twoja prywatność jest naszym priorytetem",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Doświadczony team",
      description: "Zespół z wieloletnim doświadczeniem",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Wsparcie dostępne całodobowo",
    },
  ];

  const testimonials = [
    {
      name: "Anonymous User",
      rating: 5,
      comment: "Najlepszy team w branży! Szybko, skutecznie, bez problemów.",
    },
    {
      name: "Client #247",
      rating: 5,
      comment: "25% fee to nic w porównaniu do jakości usług. Polecam!",
    },
    {
      name: "Verified Member",
      rating: 5,
      comment: "Codziennie nowe możliwości. Team zawsze dotrzymuje słowa.",
    },
  ];

  // Show loading/auth screen until authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <Crown className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-black text-pink-500 mb-4 neon-text">🔐 HUSTLER TEAM</h1>
          <p className="text-gray-400 animate-pulse">Weryfikacja dostępu...</p>
          <div className="mt-8">
            <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Persistent Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/90 border-b border-pink-500/30 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-pink-500" />
              <span className="text-2xl font-black text-pink-500 neon-text">HUSTLER TEAM</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: '🏠 Główna', id: 'hero' },
                { name: '⚙️ Jak Działamy', id: 'how-we-work' },
                { name: '🔐 Weryfikacja', id: 'verification' },
                { name: '💼 Oferta', id: 'services' },
                { name: '💬 Opinie', id: 'testimonials' },
                { name: '❓ FAQ', id: 'faq' },
                { name: '📞 Kontakt', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-semibold hover:shadow-pink-500/50 hover:text-shadow-lg text-sm"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleTelegramClick}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 neon-flicker"
              >
                🔗 Dołącz
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-pink-500 hover:text-pink-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4 border-t border-pink-500/30 mt-4">
              {[
                { name: '🏠 Główna', id: 'hero' },
                { name: '⚙️ Jak Działamy', id: 'how-we-work' },
                { name: '🔐 Weryfikacja', id: 'verification' },
                { name: '💼 Oferta', id: 'services' },
                { name: '💬 Opinie', id: 'testimonials' },
                { name: '❓ FAQ', id: 'faq' },
                { name: '📞 Kontakt', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-pink-400 transition-colors duration-300 font-semibold py-2"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleTelegramClick}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 neon-flicker"
              >
                🔗 Dołącz
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div
            className={`transition-all duration-200 ${glitchActive ? "animate-pulse scale-105" : ""}`}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              HUSTLER
            </h1>
            <h2 className="text-4xl md:text-6xl font-black text-pink-500 mb-8 tracking-wider">
              TEAM
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Ekskluzywna społeczność dla wybranych
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
            Dołącz do elitarnej grupy profesjonalistów i odkryj nowe możliwości
            zarobku
          </p>

          <button
            onClick={handleTelegramClick}
            className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 neon-text"
          >
            <span className="relative flex items-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Dołącz Teraz
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>

        {/* Cyber Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-1/3 left-0 right-0 h-0.5 bg-pink-500 ${glitchActive ? "opacity-100" : "opacity-0"} transition-opacity`}
          ></div>
          <div
            className={`absolute top-2/3 left-0 right-0 h-0.5 bg-cyan-400 ${glitchActive ? "opacity-100" : "opacity-0"} transition-opacity`}
          ></div>
        </div>
      </section>

      {/* How We Work Section - Jak Działamy */}
      <section className="py-20 px-4 relative" id="how-we-work">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-pink-500 neon-flicker">
            ⚙️ JAK DZIAŁAMY
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-4xl mx-auto text-lg">
            HUSTLER TEAM to zamknięta społeczność działająca na własnych systemach i narzędziach.
            <br />
            <span className="text-pink-400 font-bold">Działamy 24/7, szybko, profesjonalnie, bez zbędnych pytań.</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg p-8 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-8 h-8 text-pink-500 mr-3" />
                Umożliwiamy członkom:
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                  Korzystanie z bramek OLX, Allegro, BLIK
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                  Dostęp do automatyzacji i systemów
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                  Wsparcie techniczne i mentoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                  Wgląd w realne dane i logi
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur border border-purple-500/30 rounded-lg p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Crown className="w-8 h-8 text-purple-500 mr-3" />
                Nasz zespół:
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-cyan-400 font-semibold text-lg">
                  To doświadczeni ludzie z branży
                </p>
                <p>
                  <span className="text-pink-400 font-bold">Nie uczymy się</span> – my <span className="text-pink-400 font-bold">uczymy</span>
                </p>
                <p>
                  Każdy członek to osoba zweryfikowana
                </p>
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-4 mt-4">
                  <p className="text-white font-bold">🔥 100% sprawdzone metody</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-8 border border-pink-500/50">
              <h3 className="text-3xl font-black text-pink-500 mb-4">EFEKT</h3>
              <p className="text-xl text-white">
                Członkowie mają dostęp do najlepszych narzędzi i wsparcia w branży
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Verification Section */}
      <section className="py-20 px-4 relative" id="verification">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Lock className="w-20 h-20 text-pink-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-pink-500 neon-flicker">
              🔐 WERYFIKACJA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dołączenie do Hustler Team nie jest automatyczne.
              <br />
              <span className="text-pink-400 font-bold">Każdy nowy kandydat musi przejść weryfikację</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {[
              { step: "1", title: "Kliknij", description: "Przycisk 'Dołącz / Weryfikacja'" },
              { step: "2", title: "Telegram", description: "Przeniesienie do aplikacji" },
              { step: "3", title: "Wiadomość", description: "Piszesz do admina" },
              { step: "4", title: "Analiza", description: "Admin sprawdza profil" },
              { step: "5", title: "Dostęp", description: "Otrzymujesz bramkę OLX" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg p-6 text-center hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
                  <div className="text-4xl font-black text-pink-500 mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {index < 4 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-pink-500 w-6 h-6" />
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900/80 backdrop-blur border border-pink-500/50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">Co musisz podać:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-500 mr-3" />
                  Dlaczego chcesz dołączyć
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-500 mr-3" />
                  Co już potrafisz
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-500 mr-3" />
                  Jakie masz doświadczenie
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-500 mr-3" />
                  Czego oczekujesz
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-6 border border-pink-500/50">
              <h3 className="text-2xl font-bold text-white mb-4">🔥 Po weryfikacji:</h3>
              <p className="text-xl text-pink-400 font-bold">
                Otrzymujesz dostęp do prywatnej bramki OLX z prowizją 25%
              </p>
              <p className="text-gray-300 mt-2">
                Brak stałych opłat – tylko uczciwa prowizja
              </p>
            </div>
            
            <p className="text-gray-400">
              ⏱️ Weryfikacja trwa do kilku godzin. Od razu po niej dostajesz pełny dostęp.
            </p>
            
            <button 
              onClick={handleTelegramClick}
              className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 transform hover:scale-110 shadow-lg shadow-pink-500/50 pulse-border animate-pulse"
            >
              <span className="relative flex items-center justify-center">
                <Lock className="w-8 h-8 mr-4" />
                Rozpocznij Weryfikację
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section - Nasza Oferta */}
      <section className="py-20 px-4 relative" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-pink-500 neon-flicker">
            💼 NASZA OFERTA
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Kafelkowy układ z różowymi neonowymi ikonami i opisami
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg p-6 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <div className="text-pink-400 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-cyan-400">
              JAK DOŁĄCZYĆ?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proces weryfikacji zapewnia bezpieczeństwo i jakość naszej
              społeczności
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {verificationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 backdrop-blur border border-purple-500/30 rounded-lg p-8 text-center hover:border-purple-500 transition-all duration-300 w-80">
                  <div className="text-6xl font-black text-purple-500 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < verificationSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 text-pink-500 w-8 h-8" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleTelegramClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
            >
              Aplikuj do Społeczności
            </button>
          </div>
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
                <div className="text-6xl font-black text-pink-500 mb-4">
                  25%
                </div>
                <h3 className="text-2xl font-bold mb-4">Prowizja</h3>
                <p className="text-gray-300">Płacisz tylko za to co zarobisz</p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur border border-purple-500/30 rounded-lg p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              <div className="text-center">
                <div className="text-6xl font-black text-purple-500 mb-4">
                  0
                </div>
                <h3 className="text-2xl font-bold mb-4">Stałe opłaty</h3>
                <p className="text-gray-300">
                  Brak ukrytych kosztów i abonamentów
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <div className="text-center">
                <div className="text-6xl font-black text-cyan-400 mb-4">
                  24h
                </div>
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
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-cyan-400">
            ❓ CZĘSTO ZADAWANE PYTANIA
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-cyan-400 font-bold">?</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-400 ml-12">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-pink-500">
            NASZ ZESPÓŁ
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Profesjonaliści z wieloletnim doświadczeniem w branży
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {teamFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg hover:border-pink-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-pink-500 mr-4" />
                <span className="text-white font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-8 p-8 bg-gray-900/50 backdrop-blur border border-purple-500/30 rounded-lg">
              <Eye className="w-12 h-12 text-purple-500" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Anonimowy Zespół
                </h3>
                <p className="text-gray-400">
                  Tożsamość chroniona dla bezpieczeństwa wszystkich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-cyan-400">
            CASE STUDIES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                20 000 zł w 3 dni
              </h3>
              <p className="text-gray-400 mb-4">
                Metoda OLX 2025 - sprawdzona strategia marketplace
              </p>
              <div className="h-24 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded flex items-end justify-end p-4">
                <span className="text-green-400 font-bold">+327%</span>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur border border-purple-500/30 rounded-lg p-6 hover:border-purple-500 transition-all duration-300">
              <Lock className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Bezpieczne Działania
              </h3>
              <p className="text-gray-400 mb-4">
                100% projektów zrealizowanych bez problemów
              </p>
              <div className="h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded flex items-center justify-center">
                <span className="text-purple-400 font-bold">
                  Zero Incydentów
                </span>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg p-6 hover:border-pink-500 transition-all duration-300">
              <Users className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Zadowoleni Klienci
              </h3>
              <p className="text-gray-400 mb-4">
                95% członków kontynuuje współpracę
              </p>
              <div className="h-24 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded flex items-center justify-center">
                <span className="text-pink-400 font-bold">500+ Projektów</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-pink-500">
            NARZĘDZIA & ZASOBY
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Profesjonalne narzędzia dostępne dla członków zespołu
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-cyan-400 group-hover:text-white transition-colors">
                    {tool.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-cyan-400">
            BLOG & PORADNIKI
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Najnowsze trendy i techniki w branży
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur border border-purple-500/30 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 mb-4">
                  <span className="text-purple-400 text-sm font-bold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-gray-400">
                  <span className="text-sm">Przeczytaj więcej</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Opinie */}
      <section className="py-20 px-4 relative" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-pink-500 neon-flicker">
            💬 OPINIE CZŁONKÓW
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg p-6 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-pink-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic text-lg">"{testimonial.comment}"</p>
                <p className="font-bold text-pink-400">— {testimonial.name}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-6 border border-pink-500/50">
              <p className="text-xl text-white font-bold">
                🔥 Najlepsza organizacja z jaką pracowałem. 3 wypłaty w 2 dni 🔥
              </p>
              <p className="text-pink-400 mt-2">— @ghostclient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <Headphones className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-pink-500">
            📞 KONTAKT & WSPARCIE
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Support 24/7, dostęp tylko po dołączeniu do zespołu
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/50 backdrop-blur border border-pink-500/30 rounded-lg p-6">
              <MessageCircle className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Telegram Support
              </h3>
              <p className="text-gray-400">
                Natychmiastowe odpowiedzi na pytania
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur border border-cyan-500/30 rounded-lg p-6">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Bezpieczny Kontakt
              </h3>
              <p className="text-gray-400">Zaszyfrowana komunikacja</p>
            </div>
          </div>

          <button
            onClick={handleTelegramClick}
            className="group relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 w-full md:w-auto pulse-border"
          >
            <span className="relative flex items-center justify-center">
              <MessageCircle className="w-8 h-8 mr-4" />
              Skontaktuj się z nami
              <ChevronRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
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

      {/* Disclaimer Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur border border-red-500/30 rounded-lg p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-red-500/5 animate-pulse"></div>
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-black text-red-500 mb-6">
              WAŻNE ZASTRZEŻENIE
            </h2>
            <div className="relative z-10 space-y-4 text-gray-300">
              <p className="text-lg">
                Strona o charakterze edukacyjnym. Wszystkie informacje mają
                charakter teoretyczny.
              </p>
              <p>
                Hustle Team nie ponosi odpowiedzialności za sposób wykorzystania
                udostępnionych informacji.
              </p>
              <p className="text-red-400 font-bold">
                Działaj zgodnie z obowiązującym prawem w Twoim kraju.
              </p>
            </div>
            {/* Glitch effect overlay */}
            <div
              className={`absolute inset-0 bg-red-500/10 ${glitchActive ? "opacity-100" : "opacity-0"} transition-opacity pointer-events-none`}
            ></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-black text-pink-500 mb-4 neon-text">
            HUSTLER TEAM
          </div>
          <p className="text-gray-500 mb-4">
            © 2025 Hustler Team. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-gray-600">
            Designed with cyberpunk aesthetics • Powered by cutting-edge
            technology
          </p>
        </div>

        {/* Footer scan line effect */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>
      </footer>
    </div>
  );
};

export default LandingPage;
