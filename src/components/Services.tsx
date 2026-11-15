import React from 'react';
import { Sparkles, Code, Video, Palette, Film, Cpu, Terminal, Presentation, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  services: any[];
  setCurrentTab: (tab: string) => void;
  onSelectServiceForContact: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, setCurrentTab, onSelectServiceForContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-7 h-7" />;
      case 'Video': return <Video className="w-7 h-7" />;
      case 'Palette': return <Palette className="w-7 h-7" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7" />;
      case 'Film': return <Film className="w-7 h-7" />;
      case 'Cpu': return <Cpu className="w-7 h-7" />;
      case 'Terminal': return <Terminal className="w-7 h-7" />;
      case 'Presentation': return <Presentation className="w-7 h-7" />;
      case 'Share2': return <Share2 className="w-7 h-7" />;
      default: return <Code className="w-7 h-7" />;
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-purple-600/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Expertise & Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            MY DIGITAL <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SERVICES</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Professional creative and technical solutions tailored for creators, startups, and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-zinc-900/80 border border-white/10 hover:border-cyan-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.sampleWork && (
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">Sample Work / Deliverables:</span>
                    <p className="text-xs text-gray-400 leading-normal">
                      {service.sampleWork}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-8 relative z-10">
                <button
                  onClick={() => {
                    onSelectServiceForContact(service.title);
                    setCurrentTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 border border-white/10 hover:border-transparent rounded-2xl font-bold text-sm text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
