import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Edit3 } from 'lucide-react';

interface PricingProps {
  packages: any[];
  isAdminLoggedIn: boolean;
  onUpdatePackage: (id: string, pkg: any) => void;
  setCurrentTab: (tab: string) => void;
  onSelectServiceForContact: (serviceName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  packages,
  isAdminLoggedIn,
  onUpdatePackage,
  setCurrentTab,
  onSelectServiceForContact,
}) => {
  const [editingPkg, setEditingPkg] = useState<any>(null);
  const [formState, setFormState] = useState({
    name: '',
    subtitle: '',
    featuresStr: '',
    popular: false
  });

  const startEdit = (pkg: any) => {
    setEditingPkg(pkg);
    setFormState({
      name: pkg.name,
      subtitle: pkg.subtitle,
      featuresStr: Array.isArray(pkg.features) ? pkg.features.join('\n') : '',
      popular: pkg.popular
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const features = formState.featuresStr.split('\n').map(f => f.trim()).filter(Boolean);
    onUpdatePackage(editingPkg.id, {
      name: formState.name,
      subtitle: formState.subtitle,
      features,
      popular: formState.popular
    });
    setEditingPkg(null);
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
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Flexible Investment</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            SERVICE <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">PACKAGES</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Tailored creative & digital solutions. Request a custom quote for your specific project requirements.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 backdrop-blur-md ${
                pkg.popular
                  ? 'bg-zinc-900/90 border-2 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] lg:-translate-y-4'
                  : 'bg-zinc-900/50 border border-white/10 hover:border-cyan-500/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  Most Popular Choice
                </div>
              )}

              {isAdminLoggedIn && (
                <button
                  onClick={() => startEdit(pkg)}
                  className="absolute top-4 right-4 p-2 bg-black/80 border border-cyan-500/40 rounded-xl text-cyan-300 hover:text-white transition-colors cursor-pointer z-20"
                  title="Edit Package"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-wider text-white">{pkg.name}</h3>
                  <p className="text-sm text-gray-400 pt-2 leading-relaxed">{pkg.subtitle}</p>
                </div>

                <div className="py-4 border-y border-white/10">
                  <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider block">Pricing Model</span>
                  <span className="text-2xl font-black text-white">Request a Quote</span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Package Inclusions:</span>
                  <ul className="space-y-3">
                    {Array.isArray(pkg.features) && pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    onSelectServiceForContact(`${pkg.name} Package`);
                    setCurrentTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105'
                      : 'bg-white/5 hover:bg-white/10 border border-white/20 text-white hover:border-cyan-500/50'
                  }`}
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingPkg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-zinc-950 border border-cyan-500/30 rounded-3xl p-8 max-w-xl w-full space-y-6 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white">Edit Package: {editingPkg.name}</h3>
                <button onClick={() => setEditingPkg(null)} className="text-gray-400 hover:text-white">✕</button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Package Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Subtitle Description</label>
                  <input
                    type="text"
                    required
                    value={formState.subtitle}
                    onChange={(e) => setFormState({ ...formState, subtitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Features (one per line)</label>
                  <textarea
                    rows={5}
                    required
                    value={formState.featuresStr}
                    onChange={(e) => setFormState({ ...formState, featuresStr: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="pop"
                    checked={formState.popular}
                    onChange={(e) => setFormState({ ...formState, popular: e.target.checked })}
                    className="w-4 h-4 rounded bg-black border-white/20 text-cyan-500 focus:ring-cyan-500"
                  />
                  <label htmlFor="pop" className="text-sm text-gray-300 font-medium">Highlight as Most Popular</label>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingPkg(null)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
