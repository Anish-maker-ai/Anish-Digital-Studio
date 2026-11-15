import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Instagram, Github, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  settings: any;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, settings }) => {
  return (
    <footer className="relative bg-black border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-gray-400">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-cyan-600/10 via-purple-600/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <img
                  src="/assets/aistudio/image_cffe0852.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-black text-lg tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  {settings.businessName || "ANISH DIGITAL STUDIO"}
                </span>
                <span className="block text-xs text-cyan-400 tracking-wider">
                  Founder: {settings.founder || "Anish Kumar Singh"}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {settings.tagline || "Turning Ideas Into Digital Experiences."} {settings.subTagline || ""}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={settings.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {['home', 'about', 'services', 'portfolio', 'pricing', 'contact'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => {
                      setCurrentTab(tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-400 transition-colors capitalize flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                    <span>{tab}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Video Editing
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Graphic & Logo Design
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Motion Graphics
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  AI & Python Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{settings.location || "New Delhi, India"}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-cyan-400 transition-colors">
                  {settings.email || "contact@anishdigitalstudio.com"}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`https://wa.me/${(settings.whatsapp || "").replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  {settings.whatsapp || "+91 98765 43210"}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {settings.businessName || "Anish Digital Studio"}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setCurrentTab('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setCurrentTab('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
