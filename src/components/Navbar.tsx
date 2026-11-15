import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Sparkles, ChevronRight, Phone, Mail, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  settings: any;
  onOpenAdminLogin: () => void;
  isAdminLoggedIn: boolean;
  onLogoutAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  settings,
  onOpenAdminLogin,
  isAdminLoggedIn,
  onLogoutAdmin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <img
                src="/assets/aistudio/image_cffe0852.png"
                alt="Anish Digital Studio Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay" />
            </div>
            <div>
              <span className="block font-black text-lg tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-all">
                {settings.businessName || "ANISH DIGITAL STUDIO"}
              </span>
              <span className="block text-[10px] tracking-widest text-cyan-400/80 uppercase font-medium">
                By {settings.founder || "Anish Kumar Singh"}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  currentTab === item.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions & Admin */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl group-hover:opacity-100 opacity-75 transition-opacity animate-pulse" />
              <span className="relative px-5 py-2.5 bg-black rounded-xl flex items-center gap-2 text-sm font-semibold text-white transition-colors">
                <span>Hire Me</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {isAdminLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('admin')}
                  className="px-3 py-2 bg-purple-600/30 border border-purple-500/50 rounded-xl text-xs font-semibold text-purple-300 hover:bg-purple-600/50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={onLogoutAdmin}
                  className="px-3 py-2 bg-red-500/20 border border-red-500/40 rounded-xl text-xs font-semibold text-red-300 hover:bg-red-500/40 transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAdminLogin}
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
                title="Admin Login"
              >
                <Shield className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-cyan-500/30 px-6 py-6 space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.9)] animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-3 rounded-xl text-left font-medium transition-all cursor-pointer ${
                  currentTab === item.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setCurrentTab('contact');
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold text-center shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Hire Me / Request Quote
            </button>

            {isAdminLoggedIn ? (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCurrentTab('admin');
                    setIsOpen(false);
                  }}
                  className="flex-1 py-2.5 bg-purple-600/30 border border-purple-500/50 rounded-xl text-purple-300 font-semibold text-center text-sm"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    onLogoutAdmin();
                    setIsOpen(false);
                  }}
                  className="py-2.5 px-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-300 font-semibold text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onOpenAdminLogin();
                  setIsOpen(false);
                }}
                className="w-full py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white text-sm font-medium flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>Admin Portal</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
