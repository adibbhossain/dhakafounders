'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutDashboard, TrendingUp, Users, Building, Plus, Settings, Eye, CheckCircle2, UserCheck, MessageSquare, ArrowUpRight, Ban, Check, Sparkles } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

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
    message: 'Hey Adib, I saw BazarIQ\'s logistics metrics in the directory. We are actively looking at B2B retail tech. Let\'s schedule a call.',
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

interface CompanyProfile {
  company_name: string;
  website_url: string;
  category: string;
  description: string;
  founder_name: string;
  founder_email: string;
  linkedin_url: string;
  hq_location: string;
  team_size: string;
  funding_stage: string;
}

interface DashboardClientProps {
  profile: CompanyProfile | null;
  initialRequests: ConnectionRequest[];
  initialConnectionsCount: number;
}

export default function DashboardClient({
  profile,
  initialRequests,
  initialConnectionsCount,
}: DashboardClientProps) {
  const [requests, setRequests] = useState<ConnectionRequest[]>(initialRequests);
  const [connectionsCount, setConnectionsCount] = useState(initialConnectionsCount);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [openModal, setOpenModal] = useState<'milestone' | 'pitchVideo' | 'recruitment' | 'fundingTag' | null>(null);

  // Persistent States
  const [milestones, setMilestones] = useState<{ title: string; desc: string; date: string; current: boolean }[]>([]);
  const [pitchVideo, setPitchVideo] = useState<string>('');
  const [jobs, setJobs] = useState<{ role: string; type: string; desc: string }[]>([]);
  const [isActivelyRaising, setIsActivelyRaising] = useState<boolean>(false);

  // Form states
  const [milestoneForm, setMilestoneForm] = useState({ title: '', desc: '', date: '' });
  const [pitchVideoForm, setPitchVideoForm] = useState('');
  const [recruitmentForm, setRecruitmentForm] = useState({ role: '', type: 'Full-time', desc: '' });
  const [fundingTagForm, setFundingTagForm] = useState(false);

  // Sync state with LocalStorage on mount
  useEffect(() => {
    // Milestones
    const savedMilestones = localStorage.getItem('dhakafounders_milestones');
    if (savedMilestones) {
      setMilestones(JSON.parse(savedMilestones));
    } else {
      const defaultMilestones = [
        { title: 'Series A closed with ৳45.0M from Anchor VC', desc: 'Accelerating logistics networks and extending tech features.', date: 'June 2026', current: true },
        { title: 'Scaled platform to 5,000+ wholesale grocers', desc: 'Expanding coverage across Uttara, Dhanmondi, and Gulshan hubs.', date: 'April 2026', current: false },
        { title: 'Pre-Seed round closed at ৳5.0M', desc: 'Led by local angels and Bangladesh Founders syndicate.', date: 'December 2025', current: false },
      ];
      setMilestones(defaultMilestones);
      localStorage.setItem('dhakafounders_milestones', JSON.stringify(defaultMilestones));
    }

    // Pitch Video
    const savedVideo = localStorage.getItem('dhakafounders_pitch_video');
    if (savedVideo) {
      setPitchVideo(savedVideo);
      setPitchVideoForm(savedVideo);
    }

    // Jobs
    const savedJobs = localStorage.getItem('dhakafounders_jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }

    // Funding Tag
    const savedFundingTag = localStorage.getItem('dhakafounders_funding_tag');
    if (savedFundingTag) {
      setIsActivelyRaising(savedFundingTag === 'true');
      setFundingTagForm(savedFundingTag === 'true');
    }
  }, []);

  const handleAccept = async (id: string, name: string) => {
    const supabase = createClient();
    try {
      const { error } = await supabase
        .from('connection_request')
        .update({ status: 'accepted' })
        .eq('id', id);

      if (error) {
        console.error('Error accepting connection request:', error.message);
        alert('Failed to accept connection: ' + error.message);
        return;
      }

      setRequests(requests.filter((r) => r.id !== id));
      setConnectionsCount(connectionsCount + 1);
      setToastMessage(`Connection request accepted from ${name}!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Unexpected error accepting connection:', err);
      alert('Failed to accept connection request due to an unexpected error.');
    }
  };

  const handleDecline = async (id: string, name: string) => {
    const supabase = createClient();
    try {
      const { error } = await supabase
        .from('connection_request')
        .update({ status: 'declined' })
        .eq('id', id);

      if (error) {
        console.error('Error declining connection request:', error.message);
        alert('Failed to decline connection: ' + error.message);
        return;
      }

      setRequests(requests.filter((r) => r.id !== id));
      setToastMessage(`Connection request declined from ${name}.`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Unexpected error declining connection:', err);
      alert('Failed to decline connection request due to an unexpected error.');
    }
  };

  // Dynamic Profile Data (or fallback to defaults if not created yet)
  const displayFounderName = profile?.founder_name || 'Founder';
  const displayCompanyName = profile?.company_name || 'Your Company';
  const displayCategory = profile?.category || 'Category not set';
  const displayDescription = profile?.description || 'Please update your company description...';
  
  const displayHQ = profile?.hq_location || 'Not specified';
  const displayTeamSize = profile?.team_size || 'Not specified';
  const displayFundingStage = profile?.funding_stage || 'Not specified';
  const displayWebsite = profile?.website_url || '';
  const displayInitials = displayCompanyName.substring(0, 2).toUpperCase();

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
              {profile && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Verified Startup
                </span>
              )}
            </div>
            <h1 className="font-jakarta text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-dark">
              Welcome Back, {displayFounderName}
            </h1>
            <p className="font-sans text-brand-muted text-sm">
              Managing startup profile for <strong className="text-brand-dark">{displayCompanyName}</strong> ({displayCategory})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/profile"
              className="inline-flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-98"
            >
              Update Company Profile
            </Link>
             <button
               onClick={() => setOpenModal('milestone')}
               className="inline-flex items-center gap-1.5 border border-brand-border bg-white hover:bg-slate-50 text-brand-dark text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-98 cursor-pointer"
             >
               <Plus className="h-4 w-4 text-brand-primary" />
               Add Milestone
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
                {displayCompanyName} Milestone Feed
              </h2>
              <div className="relative border-l border-brand-border/60 pl-6 space-y-6">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle indicators */}
                    <div className={`absolute -left-[30px] top-1.5 h-4 w-4 rounded-full border-2 bg-white ${idx === 0 ? 'border-brand-primary' : 'border-brand-border'
                      } flex items-center justify-center`}>
                      {idx === 0 && <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />}
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
                    {displayInitials}
                  </div>
                  <div>
                    <h4 className="font-jakarta font-bold text-base text-brand-dark">{displayCompanyName}</h4>
                    <span className="text-xs text-brand-muted">{displayCategory}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-brand-muted leading-relaxed">
                  {displayDescription}
                </p>

                <div className="border-t border-brand-border/40 pt-4 space-y-3.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">HQ Location</span>
                    <span className="text-brand-dark font-medium">{displayHQ}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Team Size</span>
                    <span className="text-brand-dark font-medium">{displayTeamSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-muted">Funding Stage</span>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-secondary font-bold">{displayFundingStage}</span>
                      {isActivelyRaising && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 text-[9px] font-bold animate-pulse">
                          Raising
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Official Site</span>
                    {displayWebsite ? (
                      <a href={displayWebsite} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                        {displayWebsite.replace(/^https?:\/\/(www\.)?/, '')} <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-brand-muted italic">Not set</span>
                    )}
                  </div>
                  {pitchVideo && (
                    <div className="flex justify-between border-t border-brand-border/20 pt-3">
                      <span className="text-brand-muted">Pitch Video</span>
                      <a href={pitchVideo} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                        Watch Pitch <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                  {jobs.length > 0 && (
                    <div className="border-t border-brand-border/40 pt-3.5 space-y-2">
                      <span className="text-brand-muted text-[10px] font-bold uppercase tracking-wider block">Recruitment Needs</span>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                        {jobs.map((job, idx) => (
                          <div key={idx} className="bg-slate-50 border border-brand-border/40 rounded-lg p-2 text-[10px]">
                            <div className="flex justify-between items-start font-bold text-brand-dark">
                              <span>{job.role}</span>
                              <span className="px-1 py-0.2 rounded bg-brand-primary/10 text-brand-primary text-[8px] uppercase">{job.type}</span>
                            </div>
                            <p className="text-brand-muted text-[9px] mt-0.5 line-clamp-2 leading-relaxed">{job.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-brand-border/40 pt-4">
                  <Link
                    href="/dashboard/profile"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm active:scale-98 text-center"
                  >
                    Update Company Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-white border border-brand-border/60 rounded-2xl shadow-sm p-6 space-y-3.5">
              <h3 className="font-jakarta text-sm font-bold text-brand-dark uppercase tracking-wider border-b border-brand-border/40 pb-2 mb-2">
                Quick Actions
              </h3>
              
              <Link
                href="/dashboard/profile"
                className="w-full text-left p-3.5 rounded-xl border border-brand-border/60 hover:border-brand-primary/50 hover:bg-slate-50/50 transition-all flex flex-col gap-0.5 group"
              >
                <span className="font-jakarta text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                  Edit Profile Information
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-brand-muted leading-relaxed">
                  Update details, tags, and logo gradient
                </span>
              </Link>

              <button
                onClick={() => setOpenModal('pitchVideo')}
                className="w-full text-left p-3.5 rounded-xl border border-brand-border/60 hover:border-brand-primary/50 hover:bg-slate-50/50 transition-all flex flex-col gap-0.5 group cursor-pointer"
              >
                <span className="font-jakarta text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                  Update Pitch Video
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-brand-muted leading-relaxed">
                  Upload or link 2-min founder deck video
                </span>
              </button>

              <button
                onClick={() => setOpenModal('recruitment')}
                className="w-full text-left p-3.5 rounded-xl border border-brand-border/60 hover:border-brand-primary/50 hover:bg-slate-50/50 transition-all flex flex-col gap-0.5 group cursor-pointer"
              >
                <span className="font-jakarta text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                  Post Recruitment Needs
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-brand-muted leading-relaxed">
                  List openings for engineers & growth leads
                </span>
              </button>

              <button
                onClick={() => setOpenModal('fundingTag')}
                className="w-full text-left p-3.5 rounded-xl border border-brand-border/60 hover:border-brand-primary/50 hover:bg-slate-50/50 transition-all flex flex-col gap-0.5 group cursor-pointer"
              >
                <span className="font-jakarta text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                  Request Funding Tag
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-brand-muted leading-relaxed">
                  Toggle investor-matching flag visibility
                </span>
              </button>
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

      {/* Milestone Modal */}
      {openModal === 'milestone' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-brand-border/60 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative animate-slide-up">
            <h3 className="font-jakarta text-lg font-bold text-brand-dark mb-4">Add Company Milestone</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (!milestoneForm.title || !milestoneForm.date) return;
              const newMilestone = {
                title: milestoneForm.title,
                desc: milestoneForm.desc,
                date: milestoneForm.date,
                current: true
              };
              const updated = [newMilestone, ...milestones];
              setMilestones(updated);
              localStorage.setItem('dhakafounders_milestones', JSON.stringify(updated));
              setMilestoneForm({ title: '', desc: '', date: '' });
              setOpenModal(null);
              setToastMessage('New milestone added successfully!');
              setShowToast(true);
              setTimeout(() => setShowToast(false), 3000);
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase mb-1">Month & Year</label>
                <input
                  type="text"
                  placeholder="e.g. July 2026"
                  value={milestoneForm.date}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, date: e.target.value })}
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-2 px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase mb-1">Milestone Title</label>
                <input
                  type="text"
                  placeholder="e.g. Closed Seed Funding or Launched MVP"
                  value={milestoneForm.title}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, title: e.target.value })}
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-2 px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase mb-1">Description (Optional)</label>
                <textarea
                  placeholder="Brief context or key metrics..."
                  value={milestoneForm.desc}
                  onChange={(e) => setMilestoneForm({ ...milestoneForm, desc: e.target.value })}
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-2 px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary h-20"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(null)}
                  className="px-4 py-2 border border-brand-border rounded-xl text-xs font-bold text-brand-muted hover:text-brand-dark hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
                >
                  Add Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pitch Video Modal */}
      {openModal === 'pitchVideo' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-brand-border/60 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative animate-slide-up">
            <h3 className="font-jakarta text-lg font-bold text-brand-dark mb-4">Update Pitch Video URL</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              setPitchVideo(pitchVideoForm);
              localStorage.setItem('dhakafounders_pitch_video', pitchVideoForm);
              setOpenModal(null);
              setToastMessage('Pitch video link updated!');
              setShowToast(true);
              setTimeout(() => setShowToast(false), 3000);
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase mb-1">Video Link (YouTube/Loom/Vimeo)</label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={pitchVideoForm}
                  onChange={(e) => setPitchVideoForm(e.target.value)}
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-2 px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  required
                />
              </div>
              <p className="text-[11px] text-brand-muted leading-relaxed font-sans">
                Adding a pitch video link will render a "Watch Pitch" button directly on your startup profile card in the directory and dashboard.
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(null)}
                  className="px-4 py-2 border border-brand-border rounded-xl text-xs font-bold text-brand-muted hover:text-brand-dark hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
                >
                  Save Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Recruitment Modal */}
      {openModal === 'recruitment' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-brand-border/60 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative animate-slide-up">
            <h3 className="font-jakarta text-lg font-bold text-brand-dark mb-4">Post Recruitment Needs</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (!recruitmentForm.role) return;
              const newJob = {
                role: recruitmentForm.role,
                type: recruitmentForm.type,
                desc: recruitmentForm.desc
              };
              const updated = [newJob, ...jobs];
              setJobs(updated);
              localStorage.setItem('dhakafounders_jobs', JSON.stringify(updated));
              setRecruitmentForm({ role: '', type: 'Full-time', desc: '' });
              setOpenModal(null);
              setToastMessage('Recruitment post published!');
              setShowToast(true);
              setTimeout(() => setShowToast(false), 3000);
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase mb-1">Job Role Title</label>
                <input
                  type="text"
                  placeholder="e.g. Lead React Developer"
                  value={recruitmentForm.role}
                  onChange={(e) => setRecruitmentForm({ ...recruitmentForm, role: e.target.value })}
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-2 px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase mb-1">Employment Type</label>
                <select
                  value={recruitmentForm.type}
                  onChange={(e) => setRecruitmentForm({ ...recruitmentForm, type: e.target.value })}
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-2 px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase mb-1">Description / Requirements</label>
                <textarea
                  placeholder="Briefly state tech stack, experience requirements, or salary context..."
                  value={recruitmentForm.desc}
                  onChange={(e) => setRecruitmentForm({ ...recruitmentForm, desc: e.target.value })}
                  className="w-full bg-slate-50 border border-brand-border rounded-xl py-2 px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary h-20"
                  required
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(null)}
                  className="px-4 py-2 border border-brand-border rounded-xl text-xs font-bold text-brand-muted hover:text-brand-dark hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
                >
                  Publish Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Funding Tag Modal */}
      {openModal === 'fundingTag' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-brand-border/60 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative animate-slide-up">
            <h3 className="font-jakarta text-lg font-bold text-brand-dark mb-4">Request Funding Match Tag</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              setIsActivelyRaising(fundingTagForm);
              localStorage.setItem('dhakafounders_funding_tag', String(fundingTagForm));
              setOpenModal(null);
              setToastMessage(fundingTagForm ? 'Actively Raising tag enabled!' : 'Actively Raising tag disabled.');
              setShowToast(true);
              setTimeout(() => setShowToast(false), 3000);
            }} className="space-y-4">
              <div className="flex items-center gap-3 bg-slate-50 border border-brand-border/60 p-4 rounded-2xl">
                <input
                  type="checkbox"
                  id="raising_tag"
                  checked={fundingTagForm}
                  onChange={(e) => setFundingTagForm(e.target.checked)}
                  className="h-4.5 w-4.5 rounded border-brand-border text-brand-primary focus:ring-brand-primary"
                />
                <label htmlFor="raising_tag" className="font-sans text-sm font-semibold text-brand-dark cursor-pointer select-none">
                  Show "Actively Raising" badge
                </label>
              </div>
              <p className="text-[11px] text-brand-muted leading-relaxed font-sans">
                When enabled, a pulsing "Raising" badge will appear next to your funding stage, signaling to prospective angel investors and VCs that your startup is actively fundraising.
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(null)}
                  className="px-4 py-2 border border-brand-border rounded-xl text-xs font-bold text-brand-muted hover:text-brand-dark hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
