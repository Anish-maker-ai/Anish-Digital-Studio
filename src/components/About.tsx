import React from 'react';
import { Sparkles, Code, Video, Palette, Cpu, Terminal, CheckCircle2, Award, Heart } from 'lucide-react';

interface AboutProps {
  settings: any;
  setCurrentTab: (tab: string) => void;
}

export const About: React.FC<AboutProps> = ({ settings, setCurrentTab }) => {
  return (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">About Me</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            MEET THE <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">CREATOR</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Passionate about building digital experiences, coding, and creative solutions.
          </p>
        </div>

        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
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
                  <h3 className="font-bold text-xl text-white tracking-wide">{settings.businessName || "ANISH DIGITAL STUDIO"}</h3>
                  <p className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Founder: {settings.founder || "Anish Kumar Singh"}</p>
                  <p className="text-xs text-gray-400 pt-1">Student, Web Developer & Creative Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                "Transforming Ideas Into Useful Digital Projects"
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I am a young creative technology enthusiast interested in website development, video editing, graphic design, programming and AI-powered digital solutions. I enjoy transforming ideas into useful digital projects while continuously improving my skills.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Through <span className="text-cyan-400 font-semibold">{settings.businessName || "Anish Digital Studio"}</span>, I aim to provide high-quality digital services for small businesses, creators, startups, and individuals who want to establish a strong online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Web Development</h4>
                  <p className="text-xs text-gray-400 pt-1">React, TypeScript, Tailwind, and full-stack solutions.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Video Editing</h4>
                  <p className="text-xs text-gray-400 pt-1">Cinematic cuts, reels, shorts, and creator vlogs.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Graphic & Logo Design</h4>
                  <p className="text-xs text-gray-400 pt-1">Thumbnails, social graphics, and 3D brand badges.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">AI & Python Tech</h4>
                  <p className="text-xs text-gray-400 pt-1">Smart scripts, automation tools, and AI workflows.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setCurrentTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all cursor-pointer"
              >
                Let's Collaborate
              </button>
              <button
                onClick={() => {
                  setCurrentTab('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white/5 border border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                View Portfolio
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
