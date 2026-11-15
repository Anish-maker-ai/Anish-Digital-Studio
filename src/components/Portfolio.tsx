import React, { useState } from 'react';
import { Sparkles, ExternalLink, Plus, Trash2, Edit3, Filter } from 'lucide-react';

interface PortfolioProps {
  portfolio: any[];
  isAdminLoggedIn: boolean;
  onAddProject: (project: any) => void;
  onUpdateProject: (id: string, project: any) => void;
  onDeleteProject: (id: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  portfolio,
  isAdminLoggedIn,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);

  const [formState, setFormState] = useState({
    title: '',
    category: 'Websites',
    description: '',
    image: '',
    tags: '',
    featured: false,
    demoUrl: '#'
  });

  const categories = ['All', 'Websites', 'Video Editing', 'Graphic Design', 'Motion Graphics', 'Presentations', 'Python Projects'];

  const filteredPortfolio = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter(p => p.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagArray = formState.tags.split(',').map(t => t.trim()).filter(Boolean);
    const payload = {
      ...formState,
      tags: tagArray.length > 0 ? tagArray : ['React'],
      image: formState.image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'
    };

    if (editingProject) {
      onUpdateProject(editingProject.id, payload);
      setEditingProject(null);
    } else {
      onAddProject(payload);
    }

    setFormState({
      title: '',
      category: 'Websites',
      description: '',
      image: '',
      tags: '',
      featured: false,
      demoUrl: '#'
    });
    setShowAddModal(false);
  };

  const startEdit = (proj: any) => {
    setEditingProject(proj);
    setFormState({
      title: proj.title,
      category: proj.category,
      description: proj.description,
      image: proj.image,
      tags: Array.isArray(proj.tags) ? proj.tags.join(', ') : proj.tags,
      featured: proj.featured,
      demoUrl: proj.demoUrl || '#'
    });
    setShowAddModal(true);
  };

  return (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-purple-600/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Portfolio Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
              FEATURED <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">WORKS</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Explore demonstration projects showcasing expertise in web dev, video editing, design, and programming.
            </p>
          </div>

          {isAdminLoggedIn && (
            <button
              onClick={() => {
                setEditingProject(null);
                setFormState({
                  title: '',
                  category: 'Websites',
                  description: '',
                  image: '',
                  tags: '',
                  featured: false,
                  demoUrl: '#'
                });
                setShowAddModal(true);
              }}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 cursor-pointer self-start md:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>
          )}
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-zinc-900 border border-white/10 text-gray-300 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((project) => (
            <div
              key={project.id}
              className="group relative bg-zinc-900 border border-white/10 hover:border-cyan-500/50 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300">
                  {project.category}
                </span>

                {isAdminLoggedIn && (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => startEdit(project)}
                      className="p-2 bg-black/80 hover:bg-cyan-600 border border-cyan-500/40 rounded-xl text-cyan-300 hover:text-white transition-colors cursor-pointer"
                      title="Edit Project"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDeleteProject(project.id)}
                      className="p-2 bg-black/80 hover:bg-red-600 border border-red-500/40 rounded-xl text-red-300 hover:text-white transition-colors cursor-pointer"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(project.tags) && project.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-2"
                    >
                      <span>Live Demonstration</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add / Edit Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-zinc-950 border border-cyan-500/30 rounded-3xl p-8 max-w-xl w-full space-y-6 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white">
                  {editingProject ? 'Edit Portfolio Project' : 'Add New Portfolio Project'}
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Project Title</label>
                  <input
                    type="text"
                    required
                    value={formState.title}
                    onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none"
                    placeholder="e.g. Quantum E-Commerce Web App"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 uppercase">Category</label>
                    <select
                      value={formState.category}
                      onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none"
                    >
                      {categories.filter(c => c !== 'All').map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 uppercase">Image URL (Unsplash or Direct)</label>
                    <input
                      type="text"
                      value={formState.image}
                      onChange={(e) => setFormState({ ...formState, image: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Description</label>
                  <textarea
                    required
                    rows={3}
                    value={formState.description}
                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none resize-none"
                    placeholder="Short description of the project..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 uppercase">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={formState.tags}
                    onChange={(e) => setFormState({ ...formState, tags: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-cyan-500 text-white text-sm outline-none"
                    placeholder="React, Tailwind, Three.js"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formState.featured}
                    onChange={(e) => setFormState({ ...formState, featured: e.target.checked })}
                    className="w-4 h-4 rounded bg-black border-white/20 text-cyan-500 focus:ring-cyan-500"
                  />
                  <label htmlFor="featured" className="text-sm text-gray-300 font-medium">Feature on Homepage</label>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  >
                    {editingProject ? 'Save Changes' : 'Create Project'}
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
