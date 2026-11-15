import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { AdminDashboard } from './components/AdminDashboard';
import { Shield, Lock, X } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [settings, setSettings] = useState<any>({});
  const [services, setServices] = useState<any[]>([]);
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');

  const [selectedServiceForContact, setSelectedServiceForContact] = useState('');

  // Fetch initial data from backend API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [resSettings, resServices, resPortfolio, resPackages, resInquiries] = await Promise.all([
        fetch('/api/settings').then(r => r.json()),
        fetch('/api/services').then(r => r.json()),
        fetch('/api/portfolio').then(r => r.json()),
        fetch('/api/packages').then(r => r.json()),
        fetch('/api/inquiries').then(r => r.json()),
      ]);

      setSettings(resSettings);
      setServices(resServices);
      setPortfolio(resPortfolio);
      setPackages(resPackages);
      setInquiries(resInquiries);
    } catch (e) {
      console.error('Failed to fetch data', e);
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminPassword })
      });
      const data = await res.json();
      if (data.success) {
        setIsAdminLoggedIn(true);
        setShowAdminLoginModal(false);
        setAdminPassword('');
        setCurrentTab('admin');
      } else {
        setAdminLoginError(data.error || 'Invalid password (default: anish@2026)');
      }
    } catch (e) {
      setAdminLoginError('Login failed. Try again.');
    }
  };

  // API Mutators
  const handleUpdateSettings = async (newSettings: any) => {
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSettings)
    });
    const data = await res.json();
    if (data.success) setSettings(data.settings);
  };

  const handleUpdateService = async (id: string, service: any) => {
    const res = await fetch(`/api/services/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service)
    });
    const data = await res.json();
    if (data.success) {
      fetchData();
    }
  };

  const handleAddProject = async (project: any) => {
    const res = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    const data = await res.json();
    if (data.success) {
      fetchData();
    }
  };

  const handleUpdateProject = async (id: string, project: any) => {
    const res = await fetch(`/api/portfolio/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    const data = await res.json();
    if (data.success) {
      fetchData();
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    const res = await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      fetchData();
    }
  };

  const handleUpdatePackage = async (id: string, pkg: any) => {
    const res = await fetch(`/api/packages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pkg)
    });
    const data = await res.json();
    if (data.success) {
      fetchData();
    }
  };

  const handleUpdateInquiryStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/inquiries/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    const data = await res.json();
    if (data.success) {
      fetchData();
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!confirm('Delete this inquiry?')) return;
    const res = await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      fetchData();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        settings={settings}
        onOpenAdminLogin={() => setShowAdminLoginModal(true)}
        isAdminLoggedIn={isAdminLoggedIn}
        onLogoutAdmin={() => {
          setIsAdminLoggedIn(false);
          setCurrentTab('home');
        }}
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <Home
            setCurrentTab={setCurrentTab}
            services={services}
            portfolio={portfolio}
            settings={settings}
          />
        )}
        {currentTab === 'about' && (
          <About settings={settings} setCurrentTab={setCurrentTab} />
        )}
        {currentTab === 'services' && (
          <Services
            services={services}
            setCurrentTab={setCurrentTab}
            onSelectServiceForContact={(s) => setSelectedServiceForContact(s)}
          />
        )}
        {currentTab === 'portfolio' && (
          <Portfolio
            portfolio={portfolio}
            isAdminLoggedIn={isAdminLoggedIn}
            onAddProject={handleAddProject}
            onUpdateProject={handleUpdateProject}
            onDeleteProject={handleDeleteProject}
          />
        )}
        {currentTab === 'pricing' && (
          <Pricing
            packages={packages}
            isAdminLoggedIn={isAdminLoggedIn}
            onUpdatePackage={handleUpdatePackage}
            setCurrentTab={setCurrentTab}
            onSelectServiceForContact={(s) => setSelectedServiceForContact(s)}
          />
        )}
        {currentTab === 'contact' && (
          <Contact
            settings={settings}
            services={services}
            selectedService={selectedServiceForContact}
          />
        )}
        {currentTab === 'privacy' && (
          <PrivacyPolicy settings={settings} />
        )}
        {currentTab === 'terms' && (
          <TermsConditions settings={settings} />
        )}
        {currentTab === 'admin' && (
          isAdminLoggedIn ? (
            <AdminDashboard
              settings={settings}
              onUpdateSettings={handleUpdateSettings}
              services={services}
              onUpdateService={handleUpdateService}
              portfolio={portfolio}
              onAddProject={handleAddProject}
              onUpdateProject={handleUpdateProject}
              onDeleteProject={handleDeleteProject}
              packages={packages}
              onUpdatePackage={handleUpdatePackage}
              inquiries={inquiries}
              onUpdateInquiryStatus={handleUpdateInquiryStatus}
              onDeleteInquiry={handleDeleteInquiry}
              onLogout={() => {
                setIsAdminLoggedIn(false);
                setCurrentTab('home');
              }}
            />
          ) : (
            <div className="min-h-[70vh] flex items-center justify-center px-4">
              <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 max-w-md w-full text-center space-y-6">
                <Shield className="w-12 h-12 text-cyan-400 mx-auto" />
                <h3 className="text-xl font-bold">Admin Authentication Required</h3>
                <p className="text-sm text-gray-400">Please log in to access the administrator dashboard.</p>
                <button
                  onClick={() => setShowAdminLoginModal(true)}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white shadow-lg cursor-pointer"
                >
                  Open Login Portal
                </button>
              </div>
            </div>
          )
        )}
      </main>

      <Footer setCurrentTab={setCurrentTab} settings={settings} />

      {/* Admin Login Modal */}
      {showAdminLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-zinc-950 border border-cyan-500/40 rounded-3xl p-8 max-w-md w-full space-y-6 shadow-[0_0_50px_rgba(6,182,212,0.4)] relative">
            <button
              onClick={() => setShowAdminLoginModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Admin Portal Login</h3>
                <p className="text-xs text-gray-400">Enter administrator password</p>
              </div>
            </div>

            {adminLoginError && (
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs">
                {adminLoginError}
              </div>
            )}

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300 uppercase">Password</label>
                <input
                  type="password"
                  required
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none"
                  placeholder="Enter admin password..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all cursor-pointer"
              >
                Authenticate & Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
