import React, { useState } from 'react';
import { Sparkles, Mail, Phone, MapPin, Instagram, Github, Linkedin, Youtube, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  settings: any;
  services: any[];
  selectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ settings, services, selectedService }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: selectedService || 'Website Development',
    description: '',
    budget: '$500 - $1,000'
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    if (!formState.name || !formState.email || !formState.description) {
      setErrorMsg('Please fill in all required fields.');
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormState({
          name: '',
          email: '',
          service: 'Website Development',
          description: '',
          budget: '$500 - $1,000'
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setSubmitting(false);
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
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            LET'S BUILD <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SOMETHING EPIC</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Ready to start your project or request a quote? Send a message and let's get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-8 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold text-white">{settings.businessName || "Anish Digital Studio"}</h3>
                <p className="text-sm text-cyan-400 font-medium pt-1">Founder: {settings.founder || "Anish Kumar Singh"}</p>
                <p className="text-sm text-gray-400 pt-3 leading-relaxed">
                  {settings.tagline || "Turning Ideas Into Digital Experiences."} Reach out via direct email, WhatsApp, or the form.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email Us</span>
                    <a href={`mailto:${settings.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                      {settings.email || "contact@anishdigitalstudio.com"}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">WhatsApp Direct</span>
                    <a href={`https://wa.me/${(settings.whatsapp || "").replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-green-400 transition-colors">
                      {settings.whatsapp || "+91 98765 43210"}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {settings.location || "New Delhi, India"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Social Profiles</span>
                <div className="flex items-center gap-3">
                  <a href={settings.instagram || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href={settings.github || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/90 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 pointer-events-none" />

              {success ? (
                <div className="text-center py-16 space-y-6 relative z-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-gray-300 max-w-md mx-auto text-base leading-relaxed">
                    Your project inquiry has been saved and routed directly to <span className="text-cyan-400 font-semibold">anishkumarsingh2026@gmail.com</span>. Anish Kumar Singh will respond promptly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href={`mailto:anishkumarsingh2026@gmail.com?subject=New Project Inquiry&body=Hello Anish,%0D%0A%0D%0AI would like to inquire about your services.`}
                      className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all text-center"
                    >
                      Open Email Client
                    </a>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-8 py-3.5 bg-white/5 border border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white">Project Inquiry Form</h3>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none transition-colors"
                        placeholder="Rahul Sharma"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none transition-colors"
                        placeholder="rahul@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Service Required *</label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Custom Project">Custom Project / Package</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase">Estimated Budget (Optional)</label>
                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none transition-colors"
                      >
                        <option value="Under $200">Under $200</option>
                        <option value="$200 - $500">$200 - $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000+">$1,000+</option>
                        <option value="Flexible">Flexible / Quote Required</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase">Project Description *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.description}
                      onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none transition-colors resize-none"
                      placeholder="Describe your project goals, deliverables, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl font-bold text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? 'Sending Inquiry...' : 'Submit Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
