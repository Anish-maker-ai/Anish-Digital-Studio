import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface PrivacyPolicyProps {
  settings: any;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ settings }) => {
  return (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Legal Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">PRIVACY POLICY</h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed shadow-xl">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to <span className="text-cyan-400 font-semibold">{settings.businessName || "Anish Digital Studio"}</span>. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or submit project inquiries.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
            <p>
              When you submit a contact inquiry or request a quote, we may collect your name, email address, service preferences, and project details. We use this information solely to communicate with you regarding your project requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact us at: <a href={`mailto:${settings.email}`} className="text-cyan-400 font-semibold">{settings.email}</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
