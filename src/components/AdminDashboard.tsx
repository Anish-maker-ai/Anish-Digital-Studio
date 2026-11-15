import React, { useState } from 'react';
import { Shield, Sparkles, FolderKanban, Wrench, Package, MessageSquare, Settings, LogOut, CheckCircle, Trash2, Plus, Edit3 } from 'lucide-react';

interface AdminDashboardProps {
  settings: any;
  onUpdateSettings: (newSettings: any) => void;
  services: any[];
  onUpdateService: (id: string, service: any) => void;
  portfolio: any[];
  onAddProject: (project: any) => void;
  onUpdateProject: (id: string, project: any) => void;
  onDeleteProject: (id: string) => void;
  packages: any[];
  onUpdatePackage: (id: string, pkg: any) => void;
  inquiries: any[];
  onUpdateInquiryStatus: (id: string, status: string) => void;
  onDeleteInquiry: (id: string) => void;
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  settings,
  onUpdateSettings,
  services,
  onUpdateService,
  portfolio,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  packages,
  onUpdatePackage,
  inquiries,
  onUpdateInquiryStatus,
  onDeleteInquiry,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'portfolio' | 'services' | 'packages' | 'settings'>('inquiries');

  // Settings form state
  const [settingsForm, setSettingsForm] = useState(settings);

  // Service edit state
  const [editingService, setEditingService] = useState<any>(null);

  // Portfolio add/edit state
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [portfolioForm, setPortfolioForm] = useState({
    title: '',
    category: 'Websites',
    description: '',
    image: '',
    tags: '',
    featured: false,
    demoUrl: '#'
  });

  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings(settingsForm);
    alert('Business settings updated successfully!');
  };

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagArray = portfolioForm.tags.split(',').map(t => t.trim()).filter(Boolean);
    const payload = {
      ...portfolioForm,
      tags: tagArray.length > 0 ? tagArray : ['React'],
      image: portfolioForm.image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'
    };

    if (editingProject) {
      onUpdateProject(editingProject.id, payload);
      setEditingProject(null);
    } else {
      onAddProject(payload);
    }
    setShowPortfolioModal(false);
    setPortfolioForm({
      title: '',
      category: 'Websites',
      description: '',
      image: '',
      tags: '',
      featured: false,
      demoUrl: '#'
    });
  };

  return (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-zinc-900/90 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.2)]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white">ADMIN DASHBOARD</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">Secure Access</span>
              </div>
              <p className="text-sm text-gray-400">Manage inquiries, portfolio projects, services, packages, and studio settings.</p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="px-6 py-3 bg-red-500/20 hover:bg-red-500/40 border border-red-500/40 rounded-xl text-red-300 font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Admin</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'inquiries'
                ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-900 text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Customer Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'portfolio'
                ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-900 text-gray-400 hover:text-white'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Portfolio Projects ({portfolio.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'services'
                ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-900 text-gray-400 hover:text-white'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Services ({services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('packages')}
            className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'packages'
                ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-900 text-gray-400 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Packages ({packages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-900 text-gray-400 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Studio Settings</span>
          </button>
        </div>

        {/* Tab 1: Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Client Inquiries & Quote Requests</h3>
            {inquiries.length === 0 ? (
              <div className="p-12 text-center bg-zinc-900/50 border border-white/10 rounded-3xl text-gray-400">
                No inquiries received yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{inq.name}</h4>
                        <a href={`mailto:${inq.email}`} className="text-sm text-cyan-400 hover:underline">{inq.email}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <select
                          value={inq.status}
                          onChange={(e) => onUpdateInquiryStatus(inq.id, e.target.value)}
                          className="px-3 py-1.5 rounded-xl bg-black border border-white/20 text-xs font-semibold text-cyan-300 outline-none"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                        <button
                          onClick={() => onDeleteInquiry(inq.id)}
                          className="p-2 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/40 transition-colors"
                          title="Delete Inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 block text-xs uppercase font-semibold">Service Requested:</span>
                        <span className="text-white font-medium">{inq.service}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-xs uppercase font-semibold">Budget Range:</span>
                        <span className="text-cyan-400 font-medium">{inq.budget}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-gray-500 block text-xs uppercase font-semibold">Project Description:</span>
                      <p className="text-gray-300 bg-black/50 p-4 rounded-xl mt-1 text-sm leading-relaxed border border-white/5">
                        {inq.description}
                      </p>
                    </div>

                    <div className="text-xs text-gray-500 pt-2">
                      Submitted on: {new Date(inq.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Portfolio */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Manage Portfolio Projects</h3>
              <button
                onClick={() => {
                  setEditingProject(null);
                  setPortfolioForm({
                    title: '',
                    category: 'Websites',
                    description: '',
                    image: '',
                    tags: '',
                    featured: false,
                    demoUrl: '#'
                  });
                  setShowPortfolioModal(true);
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-sm text-white flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((proj) => (
                <div key={proj.id} className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between">
                  <div className="relative aspect-video">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 text-cyan-300 text-xs font-semibold">
                      {proj.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white text-lg">{proj.title}</h4>
                      <p className="text-xs text-gray-400 pt-1 line-clamp-2">{proj.description}</p>
                    </div>
                    <div className="pt-4 flex items-center justify-end gap-2 border-t border-white/10">
                      <button
                        onClick={() => {
                          setEditingProject(proj);
                          setPortfolioForm({
                            title: proj.title,
                            category: proj.category,
                            description: proj.description,
                            image: proj.image,
                            tags: Array.isArray(proj.tags) ? proj.tags.join(', ') : proj.tags,
                            featured: proj.featured,
                            demoUrl: proj.demoUrl || '#'
                          });
                          setShowPortfolioModal(true);
                        }}
                        className="p-2 bg-white/5 hover:bg-cyan-600 rounded-xl text-cyan-300 hover:text-white transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDeleteProject(proj.id)}
                        className="p-2 bg-red-500/20 hover:bg-red-600 rounded-xl text-red-300 hover:text-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Services */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Manage Service Descriptions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((srv) => (
                <div key={srv.id} className="bg-zinc-900 border border-white/10 rounded-3xl p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-cyan-400">{srv.category}</span>
                    <h4 className="font-bold text-white text-lg">{srv.title}</h4>
                    <p className="text-xs text-gray-400 line-clamp-3">{srv.description}</p>
                  </div>
                  <button
                    onClick={() => setEditingService(srv)}
                    className="w-full py-2 bg-white/5 hover:bg-cyan-600 border border-white/10 rounded-xl text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    Edit Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Packages */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Manage Pricing Packages</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-zinc-900 border border-white/10 rounded-3xl p-6 space-y-4">
                  <h4 className="font-bold text-white text-xl">{pkg.name}</h4>
                  <p className="text-xs text-gray-400">{pkg.subtitle}</p>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {pkg.features.map((f: string, i: number) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      const newSubtitle = prompt('Enter new subtitle:', pkg.subtitle);
                      if (newSubtitle) {
                        onUpdatePackage(pkg.id, { ...pkg, subtitle: newSubtitle });
                      }
                    }}
                    className="w-full py-2 bg-white/5 hover:bg-cyan-600 rounded-xl text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    Quick Edit Subtitle
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Studio Settings */}
        {activeTab === 'settings' && (
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 max-w-3xl space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">Studio & Business Information</h3>
            <form onSubmit={handleSettingsSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Business Name</label>
                  <input
                    type="text"
                    value={settingsForm.businessName}
                    onChange={(e) => setSettingsForm({ ...settingsForm, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Founder Name</label>
                  <input
                    type="text"
                    value={settingsForm.founder}
                    onChange={(e) => setSettingsForm({ ...settingsForm, founder: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Email Address</label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">WhatsApp Number</label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300 uppercase">Main Tagline</label>
                <input
                  type="text"
                  value={settingsForm.tagline}
                  onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300 uppercase">Sub Tagline</label>
                <input
                  type="text"
                  value={settingsForm.subTagline}
                  onChange={(e) => setSettingsForm({ ...settingsForm, subTagline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Instagram URL</label>
                  <input
                    type="text"
                    value={settingsForm.instagram}
                    onChange={(e) => setSettingsForm({ ...settingsForm, instagram: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">GitHub URL</label>
                  <input
                    type="text"
                    value={settingsForm.github}
                    onChange={(e) => setSettingsForm({ ...settingsForm, github: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
              >
                Save Settings
              </button>
            </form>
          </div>
        )}

        {/* Portfolio Add/Edit Modal */}
        {showPortfolioModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-zinc-950 border border-cyan-500/30 rounded-3xl p-8 max-w-xl w-full space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white">
                  {editingProject ? 'Edit Project' : 'Add Project'}
                </h3>
                <button onClick={() => setShowPortfolioModal(false)} className="text-gray-400 hover:text-white">✕</button>
              </div>

              <form onSubmit={handlePortfolioSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Project Title</label>
                  <input
                    type="text"
                    required
                    value={portfolioForm.title}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 uppercase">Category</label>
                    <select
                      value={portfolioForm.category}
                      onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                    >
                      {['Websites', 'Video Editing', 'Graphic Design', 'Motion Graphics', 'Presentations', 'Python Projects'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 uppercase">Image URL</label>
                    <input
                      type="text"
                      value={portfolioForm.image}
                      onChange={(e) => setPortfolioForm({ ...portfolioForm, image: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Description</label>
                  <textarea
                    rows={3}
                    required
                    value={portfolioForm.description}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={portfolioForm.tags}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, tags: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowPortfolioModal(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Service Edit Modal */}
        {editingService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-zinc-950 border border-cyan-500/30 rounded-3xl p-8 max-w-xl w-full space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white">Edit Service: {editingService.title}</h3>
                <button onClick={() => setEditingService(null)} className="text-gray-400 hover:text-white">✕</button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onUpdateService(editingService.id, editingService);
                  setEditingService(null);
                }}
                className="space-y-4"
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Service Title</label>
                  <input
                    type="text"
                    required
                    value={editingService.title}
                    onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Description</label>
                  <textarea
                    rows={4}
                    required
                    value={editingService.description}
                    onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Sample Work</label>
                  <input
                    type="text"
                    value={editingService.sampleWork}
                    onChange={(e) => setEditingService({ ...editingService, sampleWork: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm outline-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingService(null)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold"
                  >
                    Save Service
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
