import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface TermsConditionsProps {
  settings: any;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ settings }) => {
  return (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Legal Agreement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">TERMS & CONDITIONS</h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed shadow-xl">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing <span className="text-cyan-400 font-semibold">{settings.businessName || "Anish Digital Studio"}</span>, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Services & Quotations</h2>
            <p>
              All digital services, website developments, graphic designs, and video editing projects are subject to individual project agreements and custom quotations agreed upon by both parties prior to commencement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive rights to their finalized deliverables as specified in their project agreement. The studio retains the right to showcase completed non-confidential work in our portfolio.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
            <p>
              <span className="text-cyan-400 font-semibold">{settings.businessName}</span> shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
