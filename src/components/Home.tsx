import React from 'react';
import { Sparkles, ArrowRight, Code, Video, Palette, Film, Cpu, Terminal, ChevronRight, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  services: any[];
  portfolio: any[];
  settings: any;
}

export const Home: React.FC<HomeProps> = ({ setCurrentTab, services, portfolio, settings }) => {
  const featuredPortfolio = portfolio.filter(p => p.featured).slice(0, 4);

  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Background Gradients & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-600/20 via-purple-600/10 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[70%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-300 uppercase">
                Welcome to {settings.businessName || "Anish Digital Studio"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              WE BUILD YOUR <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                DIGITAL FUTURE.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {settings.subTagline || "Creative Design. Powerful Websites. Smart Digital Solutions."} Led by <span className="text-white font-semibold">{settings.founder || "Anish Kumar Singh"}</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => {
                  setCurrentTab('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl font-bold text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  setCurrentTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 hover:border-cyan-500/60 rounded-2xl font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <span>Hire Me</span>
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-cyan-400">100%</div>
                <div className="text-xs text-gray-400">Custom Code & Design</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-purple-400">24/7</div>
                <div className="text-xs text-gray-400">Dedicated Support</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-blue-400">Top-Tier</div>
                <div className="text-xs text-gray-400">Creative Solutions</div>
              </div>
            </div>

          </div>

          {/* Right 3D Showcase Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/50 via-purple-500/50 to-pink-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-in fade-in zoom-in duration-700">
              <div className="w-full h-full bg-black/90 rounded-[22px] overflow-hidden relative flex flex-col items-center justify-center p-6 group">
                {/* Glowing aura */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-600/20 pointer-events-none" />

                {/* 3D Logo Image */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-700 mb-6">
                  <img
                    src="/assets/aistudio/image_cffe0852.png"
                    alt="Anish Digital Studio 3D Emblem"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay" />
                </div>

                <div className="text-center z-10 space-y-2">
                  <h3 className="font-bold text-xl text-white tracking-wide">ANISH DIGITAL STUDIO</h3>
                  <p className="text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                    Founder & Creator: Anish Kumar Singh
                  </p>
                  <p className="text-xs text-gray-400 pt-2 px-4">
                    "Turning Ideas Into Digital Experiences with precision, passion, and modern aesthetic."
                  </p>
                </div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 border border-cyan-500/40 text-[10px] font-bold text-cyan-300 tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase">What I Do</h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight">
              PROFESSIONAL DIGITAL SERVICES
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              From full-stack web applications and cinematic video editing to brand logos and AI workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                onClick={() => {
                  setCurrentTab('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-zinc-900/60 border border-white/10 hover:border-cyan-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-1.5 cursor-pointer backdrop-blur-md flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <Code className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="relative z-10 pt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                setCurrentTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white/5 border border-white/20 hover:border-cyan-500/50 rounded-2xl font-bold text-white hover:bg-white/10 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View All Services ({services.length})</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase">Featured Work</h2>
              <h3 className="text-3xl sm:text-5xl font-black tracking-tight">
                RECENT CREATIVE PROJECTS
              </h3>
            </div>
            <button
              onClick={() => {
                setCurrentTab('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-white text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all flex items-center gap-2 cursor-pointer self-start md:self-auto"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPortfolio.map((project) => (
              <div
                key={project.id}
                className="group relative bg-zinc-900 border border-white/10 hover:border-cyan-500/50 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300">
                    {project.category}
                  </span>
                </div>
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/50 via-purple-500/50 to-pink-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-black/90 rounded-[22px] overflow-hidden relative flex flex-col items-center justify-center p-8 group">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-600/20 pointer-events-none" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-700 mb-6">
                  <img
                    src="/assets/aistudio/image_cffe0852.png"
                    alt="Anish Digital Studio 3D Emblem"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay" />
                </div>
                <div className="text-center z-10 space-y-1">
                  <h4 className="font-bold text-xl text-white tracking-wide">{settings.founder || "Anish Kumar Singh"}</h4>
                  <p className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Student, Web Developer & Creative Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase">About The Creator</h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight">
              TURNING PASSION INTO DIGITAL REALITY
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              "I am a young creative technology enthusiast interested in website development, video editing, graphic design, programming and AI-powered digital solutions. I enjoy transforming ideas into useful digital projects while continuously improving my skills."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Full-Stack Web Development</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Cinematic Video Editing</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Graphic & Logo Design</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-white">AI & Python Automation</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => {
                  setCurrentTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Bio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black">
        <div className="max-w-6xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
          <div className="bg-zinc-950 rounded-[22px] p-10 sm:p-16 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-600/10 pointer-events-none" />
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white relative z-10">
              READY TO START YOUR NEXT PROJECT?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg relative z-10">
              Let's collaborate to bring your vision to life. Get in touch with {settings.founder || "Anish Kumar Singh"} today for professional digital solutions.
            </p>
            <div className="pt-4 relative z-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setCurrentTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-white shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all cursor-pointer"
              >
                Get In Touch Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
