'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Users, Globe, ExternalLink, ArrowRight, CheckCircle2, SlidersHorizontal, Sparkles } from 'lucide-react';

interface Startup {
  id: string;
  name: string;
  category: string;
  stage: string;
  funding: string;
  pitch: string;
  location: string;
  teamSize: number;
  founder: string;
  website: string;
  logoGradient: string;
}

const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'ShebaFlow',
    category: 'SaaS / ERP',
    stage: 'Seed',
    funding: '৳8.5M',
    pitch: 'Next-gen logistics and service automation for SME businesses in Dhaka.',
    location: 'Gulshan, Dhaka',
    teamSize: 18,
    founder: 'Tasnim Ahmed',
    website: 'https://shebaflow.io',
    logoGradient: 'from-blue-600 to-indigo-600',
  },
  {
    id: '2',
    name: 'MedDacca',
    category: 'HealthTech',
    stage: 'Pre-Seed',
    funding: 'Bootstrapped',
    pitch: 'AI-driven patient diagnostics and electronic health record directory for local clinics.',
    location: 'Dhanmondi, Dhaka',
    teamSize: 6,
    founder: 'Dr. Sabrina Chowdhury',
    website: 'https://meddacca.ai',
    logoGradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: '3',
    name: 'BazarIQ',
    category: 'E-commerce',
    stage: 'Series A',
    funding: '৳45.0M',
    pitch: 'Optimizing wholesale grocery supply chain using real-time demand forecasting and IoT.',
    location: 'Tejgaon, Dhaka',
    teamSize: 45,
    founder: 'Adil Khan',
    website: 'https://bazariq.com',
    logoGradient: 'from-purple-600 to-pink-600',
  },
  {
    id: '4',
    name: 'CholoShare',
    category: 'Mobility',
    stage: 'Seed',
    funding: '৳12.0M',
    pitch: 'Carpooling and micro-transit sharing platform specifically for corporate commuters in Dhaka.',
    location: 'Banani, Dhaka',
    teamSize: 12,
    founder: 'Fahim Rahman',
    website: 'https://choloshare.co',
    logoGradient: 'from-orange-500 to-red-500',
  },
  {
    id: '5',
    name: 'ShikkhaOn',
    category: 'EdTech',
    stage: 'Pre-Seed',
    funding: 'Bootstrapped',
    pitch: 'Interactive live-classroom SaaS for national curriculum schools and rural colleges.',
    location: 'Uttara, Dhaka',
    teamSize: 8,
    founder: 'Nusrat Jahan',
    website: 'https://shikkhaon.com',
    logoGradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: '6',
    name: 'HishabSaaS',
    category: 'FinTech',
    stage: 'Seed',
    funding: '৳6.0M',
    pitch: 'Zero-config bookkeeping and local tax filing automation software for merchants.',
    location: 'Motijheel, Dhaka',
    teamSize: 14,
    founder: 'Imtiaz Bashar',
    website: 'https://hishabsaas.io',
    logoGradient: 'from-rose-500 to-red-600',
  },
];

export default function Directory() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [connectedIds, setConnectedIds] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastName, setToastName] = useState('');

  const categories = ['All', 'SaaS / ERP', 'HealthTech', 'E-commerce', 'Mobility', 'EdTech', 'FinTech'];
  const stages = ['All', 'Bootstrapped', 'Pre-Seed', 'Seed', 'Series A'];

  const filteredStartups = useMemo(() => {
    return mockStartups.filter((startup) => {
      const matchesSearch =
        startup.name.toLowerCase().includes(search.toLowerCase()) ||
        startup.pitch.toLowerCase().includes(search.toLowerCase()) ||
        startup.founder.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || startup.category === selectedCategory;

      const matchesStage =
        selectedStage === 'All' ||
        startup.stage === selectedStage ||
        (selectedStage === 'Bootstrapped' && startup.funding === 'Bootstrapped');

      return matchesSearch && matchesCategory && matchesStage;
    });
  }, [search, selectedCategory, selectedStage]);

  const handleConnect = (id: string, name: string) => {
    if (connectedIds.includes(id)) return;
    setConnectedIds([...connectedIds, id]);
    setToastName(name);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-brand-light relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-semibold">
            <Sparkles className="h-3 w-3 fill-brand-secondary/10" />
            <span>Active Builders Ecosystem</span>
          </div>
          <h1 className="font-jakarta text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            Dhaka Startup Directory
          </h1>
          <p className="font-sans text-brand-muted text-base sm:text-lg leading-relaxed">
            Discover and connect with early-stage builders, developers, and founders shaping Bangladesh's tech tomorrow.
          </p>
        </div>

        {/* Search and Filters Section */}
        <div className="glassmorphism rounded-2xl border border-brand-border/60 p-6 mb-10 space-y-6 shadow-sm animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-brand-muted" />
              <input
                type="text"
                placeholder="Search startups, keywords, founders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-brand-border/80 rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
              />
            </div>
            
            {/* Mobile Filters Indicator */}
            <div className="flex items-center gap-2 text-brand-muted text-sm px-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="font-medium">Filter Search</span>
            </div>
          </div>

          <div className="space-y-4 border-t border-brand-border/40 pt-4">
            {/* Category Filter */}
            <div>
              <span className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
                Industry / Sector
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-brand-primary text-white shadow-sm'
                        : 'bg-white border border-brand-border hover:bg-slate-50 text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Filter */}
            <div>
              <span className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
                Funding Stage
              </span>
              <div className="flex flex-wrap gap-2">
                {stages.map((stg) => (
                  <button
                    key={stg}
                    onClick={() => setSelectedStage(stg)}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                      selectedStage === stg
                        ? 'bg-brand-secondary text-brand-dark font-bold shadow-sm'
                        : 'bg-white border border-brand-border hover:bg-slate-50 text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    {stg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Startups Grid */}
        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {filteredStartups.map((startup) => (
              <div key={startup.id} className="glassmorphism-card rounded-2xl p-6 flex flex-col justify-between h-[360px]">
                {/* Header */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    {/* Logo Mock */}
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${startup.logoGradient} flex items-center justify-center text-white font-jakarta font-bold text-lg shadow-sm`}>
                      {startup.name.slice(0, 2)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-brand-primary/5 text-brand-primary">
                      {startup.category}
                    </span>
                  </div>

                  <h3 className="font-jakarta text-xl font-bold text-brand-dark mb-1">
                    {startup.name}
                  </h3>
                  
                  {/* Founder Row */}
                  <span className="text-xs text-brand-muted font-medium block mb-3">
                    Founded by {startup.founder}
                  </span>

                  <p className="font-sans text-sm text-brand-muted leading-relaxed line-clamp-3">
                    {startup.pitch}
                  </p>
                </div>

                {/* Footer details */}
                <div className="mt-6 border-t border-brand-border/40 pt-4 space-y-4">
                  {/* Meta stats */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span className="flex items-center gap-1.5 text-brand-muted">
                      <MapPin className="h-3.5 w-3.5" />
                      {startup.location.split(',')[0]}
                    </span>
                    <span className="flex items-center gap-1.5 text-brand-muted">
                      <Users className="h-3.5 w-3.5" />
                      {startup.teamSize} members
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <a
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-muted hover:text-brand-dark inline-flex items-center gap-1 transition-colors"
                    >
                      Website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    
                    <button
                      onClick={() => handleConnect(startup.id, startup.name)}
                      disabled={connectedIds.includes(startup.id)}
                      className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                        connectedIds.includes(startup.id)
                          ? 'bg-emerald-500/10 text-emerald-600 cursor-default flex items-center gap-1.5'
                          : 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm hover:shadow-md active:scale-97'
                      }`}
                    >
                      {connectedIds.includes(startup.id) ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Requested
                        </>
                      ) : (
                        'Request Connection'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/40 border border-brand-border/60 rounded-2xl animate-fade-in">
            <p className="font-sans text-brand-muted text-base">
              No startups match your search filters. Try broadening your keywords.
            </p>
          </div>
        )}
      </div>

      {/* Floating Success Notification Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-dark text-white border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-slide-up max-w-sm">
          <div className="h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-jakarta font-bold text-sm">Connection Request Sent!</h4>
            <p className="font-sans text-xs text-slate-400 mt-0.5">
              Your profile details have been shared with {toastName}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
