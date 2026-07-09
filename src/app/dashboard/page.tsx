'use client';

import React, { useState } from 'react';
import { LayoutDashboard, TrendingUp, Users, Building, Plus, Settings, Eye, CheckCircle2, UserCheck, MessageSquare, ArrowUpRight, Ban, Check, Sparkles } from 'lucide-react';

interface ConnectionRequest {
  id: string;
  name: string;
  firm: string;
  role: string;
  avatarLetter: string;
  avatarBg: string;
  message: string;
  time: string;
}

const initialRequests: ConnectionRequest[] = [
  {
    id: '1',
    name: 'Lutfur Rahman',
    firm: 'Rahman Capital',
    role: 'Managing Partner',
    avatarLetter: 'LR',
    avatarBg: 'bg-blue-600',
    message: 'Hey Adil, I saw BazarIQ\'s logistics metrics in the directory. We are actively looking at B2B retail tech. Let\'s schedule a call.',
    time: '2 hours ago',
  },
  {
    id: '2',
    name: 'Samira Chowdhury',
    firm: 'Anchor Venture Partners',
    role: 'Investment Associate',
    avatarLetter: 'SC',
    avatarBg: 'bg-emerald-600',
    message: 'Intrigued by your demand forecasting model. Can you share your current data deck or set up a brief chat?',
    time: '1 day ago',
  },
  {
    id: '3',
    name: 'Imran Haq',
    firm: 'Bangladesh Angel Network',
    role: 'Syndicate Lead',
    avatarLetter: 'IH',
    avatarBg: 'bg-purple-600',
    message: 'Matching you with three local angels focused on logistics and wholesale optimization. Let me know when you are open.',
    time: '3 days ago',
  },
];

export default function Dashboard() {
  const [requests, setRequests] = useState<ConnectionRequest[]>(initialRequests);
  const [connectionsCount, setConnectionsCount] = useState(14);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleAccept = (id: string, name: string) => {
    setRequests(requests.filter((r) => r.id !== id));
    setConnectionsCount(connectionsCount + 1);
    setToastMessage(`Connection request accepted from ${name}!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleDecline = (id: string, name: string) => {
    setRequests(requests.filter((r) => r.id !== id));
    setToastMessage(`Connection request declined from ${name}.`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-brand-light relative">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white border border-brand-border/60 p-6 sm:p-8 rounded-2xl shadow-sm">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary flex items-center gap-1">
                <UserCheck className="h-3 w-3" /> Founder Profile
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Verified Startup
              </span>
            </div>
            <h1 className="font-jakarta text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-dark">
              Welcome Back, Adil Khan
            </h1>
            <p className="font-sans text-brand-muted text-sm">
              Managing startup profile for <strong className="text-brand-dark">BazarIQ</strong> (B2B E-commerce)
            </p>
          </div>

          <div className="flex gap-3">
            <button className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-98">
              <Plus className="h-4 w-4" />
              Add Milestone
            </button>
            <button className="p-2.5 rounded-xl border border-brand-border/80 hover:bg-slate-50 text-brand-muted hover:text-brand-dark transition-all">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Profile Views', value: '1,248', change: '+14% MoM', icon: Eye, color: 'text-blue-500 bg-blue-500/5' },
            { label: 'Ecosystem Connections', value: connectionsCount, change: '+3 growth', icon: Users, color: 'text-emerald-500 bg-emerald-500/5' },
            { label: 'Search Appearances', value: '435', change: '+8% MoM', icon: TrendingUp, color: 'text-purple-500 bg-purple-500/5' },
            { label: 'Match Rating', value: '98%', change: 'Excellent', icon: Building, color: 'text-orange-500 bg-orange-500/5' },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white border border-brand-border/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className={`p-2.5 rounded-xl ${metric.color}`}>
                  <metric.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-brand-muted">
                  {metric.change}
                </span>
              </div>
              <div className="mt-4">
                <span className="block text-brand-muted text-xs font-semibold uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="block font-jakarta text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard Panel (Investor Connection Requests) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Connection Requests Container */}
            <div className="bg-white border border-brand-border/60 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-brand-border/40 flex justify-between items-center bg-slate-50/50">
                <h2 className="font-jakarta text-lg font-bold text-brand-dark flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-brand-primary" />
                  Investor Connection Requests
                </h2>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary">
                  {requests.length} Pending
                </span>
              </div>

              {requests.length > 0 ? (
                <div className="divide-y divide-brand-border/40">
                  {requests.map((req) => (
                    <div key={req.id} className="p-5 hover:bg-slate-50/50 transition-colors space-y-3.5">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-xl ${req.avatarBg} text-white font-bold flex items-center justify-center text-sm`}>
                            {req.avatarLetter}
                          </div>
                          <div>
                            <h3 className="font-jakarta font-bold text-sm text-brand-dark flex items-center gap-1.5">
                              {req.name}
                              <span className="text-xs font-medium text-brand-muted">({req.role})</span>
                            </h3>
                            <p className="font-sans text-xs text-brand-primary font-semibold mt-0.5">
                              {req.firm}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] text-brand-muted font-medium">{req.time}</span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed pl-13 italic bg-slate-50 p-3 rounded-xl border border-brand-border/20">
                        "{req.message}"
                      </p>

                      <div className="flex justify-end gap-2 pl-13">
                        <button
                          onClick={() => handleDecline(req.id, req.name)}
                          className="inline-flex items-center gap-1 border border-brand-border text-xs font-semibold px-3 py-2 rounded-xl text-brand-muted hover:text-brand-dark hover:bg-slate-50 transition-all"
                        >
                          <Ban className="h-3.5 w-3.5" />
                          Decline
                        </button>
                        <button
                          onClick={() => handleAccept(req.id, req.name)}
                          className="inline-flex items-center gap-1 bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition-all"
                        >
                          <Check className="h-3.5 w-3.5" />
                          Accept Connection
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="font-sans text-brand-muted text-sm">
                    No pending connection requests. Your startup profile is visible to other verified investors.
                  </p>
                </div>
              )}
            </div>

            {/* Milestones Log */}
            <div className="bg-white border border-brand-border/60 rounded-2xl shadow-sm p-6 space-y-4">
              <h2 className="font-jakarta text-lg font-bold text-brand-dark">
                BazarIQ Milestone Feed
              </h2>
              <div className="relative border-l border-brand-border/60 pl-6 space-y-6">
                {[
                  { title: 'Series A closed with ৳45.0M from Anchor VC', desc: 'Accelerating logistics networks and extending tech features.', date: 'June 2026', current: true },
                  { title: 'Scaled platform to 5,000+ wholesale grocers', desc: 'Expanding coverage across Uttara, Dhanmondi, and Gulshan hubs.', date: 'April 2026', current: false },
                  { title: 'Pre-Seed round closed at ৳5.0M', desc: 'Led by local angels and Bangladesh Founders syndicate.', date: 'December 2025', current: false },
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle indicators */}
                    <div className={`absolute -left-[30px] top-1.5 h-4 w-4 rounded-full border-2 bg-white ${
                      item.current ? 'border-brand-primary' : 'border-brand-border'
                    } flex items-center justify-center`}>
                      {item.current && <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />}
                    </div>
                    <span className="block text-[10px] text-brand-muted font-bold uppercase">{item.date}</span>
                    <h4 className="font-jakarta text-sm font-bold text-brand-dark mt-0.5">{item.title}</h4>
                    <p className="font-sans text-xs text-brand-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Panel (Profile & Quick Actions) */}
          <div className="space-y-6">
            
            {/* Startup Profile Summary Card */}
            <div className="bg-white border border-brand-border/60 rounded-2xl shadow-sm p-6">
              <h3 className="font-jakarta text-sm font-bold text-brand-dark uppercase tracking-wider mb-4 border-b border-brand-border/40 pb-2">
                Startup Profile
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold flex items-center justify-center text-lg">
                    BA
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-base text-brand-dark">BazarIQ</h4>
                    <span className="text-xs text-brand-muted">B2B E-commerce</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-brand-muted leading-relaxed">
                  Optimizing wholesale grocery supply chains using demand forecasting models.
                </p>

                <div className="border-t border-brand-border/40 pt-4 space-y-3.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">HQ Location</span>
                    <span className="text-brand-dark font-medium">Tejgaon, Dhaka</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Team Size</span>
                    <span className="text-brand-dark font-medium">45 Members</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Funding Stage</span>
                    <span className="text-brand-secondary font-bold">Series A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Official Site</span>
                    <a href="https://bazariq.com" target="_blank" rel="noopener" className="text-brand-primary hover:underline inline-flex items-center gap-0.5">
                      bazariq.com <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-white border border-brand-border/60 rounded-2xl shadow-sm p-6 space-y-3.5">
              <h3 className="font-jakarta text-sm font-bold text-brand-dark uppercase tracking-wider border-b border-brand-border/40 pb-2 mb-2">
                Quick Actions
              </h3>
              {[
                { title: 'Edit Profile Information', desc: 'Update details, tags, and logo gradient' },
                { title: 'Update Pitch Video', desc: 'Upload or link 2-min founder deck video' },
                { title: 'Post Recruitment Needs', desc: 'List openings for engineers & growth leads' },
                { title: 'Request Funding Tag', desc: 'Toggle investor-matching flag visibility' },
              ].map((action, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-3.5 rounded-xl border border-brand-border/60 hover:border-brand-primary/50 hover:bg-slate-50/50 transition-all flex flex-col gap-0.5 group"
                >
                  <span className="font-jakarta text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {action.title}
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs text-brand-muted leading-relaxed">
                    {action.desc}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Floating Success Notification Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-dark text-white border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-slide-up max-w-sm">
          <div className="h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-jakarta font-bold text-sm">Dashboard Action Success</h4>
            <p className="font-sans text-xs text-slate-400 mt-0.5">{toastMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
