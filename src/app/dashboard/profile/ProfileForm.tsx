'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { ArrowLeft, Building, User, Globe, Mail, FileText, Tag, Sparkles, CheckCircle2, AlertCircle, MapPin, Users, TrendingUp } from 'lucide-react';
import { saveProfile } from './actions';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ProfileFormProps {
  initialData: {
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
  } | null;
}

export default function ProfileForm({ initialData }: ProfileFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    company_name: initialData?.company_name || '',
    website_url: initialData?.website_url || '',
    category: initialData?.category || '',
    description: initialData?.description || '',
    founder_name: initialData?.founder_name || '',
    founder_email: initialData?.founder_email || '',
    linkedin_url: initialData?.linkedin_url || '',
    hq_location: initialData?.hq_location || '',
    team_size: initialData?.team_size || '',
    funding_stage: initialData?.funding_stage || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.company_name.trim() || !formData.founder_name.trim()) {
      setStatus({ type: 'error', message: 'Company Name and Founder Name are required.' });
      return;
    }

    startTransition(async () => {
      try {
        const response = await saveProfile(formData);
        if (response.success) {
          setStatus({ type: 'success', message: 'Profile saved successfully!' });
        } else {
          setStatus({
            type: 'error',
            message: response.error || 'Failed to save profile. Please check your Supabase Row-Level Security policies.',
          });
        }
      } catch (err: any) {
        setStatus({ type: 'error', message: err.message || 'An unexpected error occurred.' });
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Founder Profile Manager
        </div>
        <h1 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          {initialData ? 'Update Company Profile' : 'Setup Company Profile'}
        </h1>
        <p className="font-sans text-brand-muted text-sm sm:text-base">
          Provide your startup details to showcase your brand to other members and verified investors in Dhaka.
        </p>
      </div>


      {/* Status Banner */}
      {status && (
        <div
          className={`mb-8 p-4 rounded-2xl border flex items-center gap-3 animate-fade-in ${
            status.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          {status.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
          )}
          <span className="text-xs sm:text-sm font-medium">{status.message}</span>
        </div>
      )}

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white border border-brand-border/60 rounded-3xl shadow-sm p-6 sm:p-10 space-y-10">
          
          {/* Section 1: Company Details */}
          <div className="space-y-6">
            <div className="border-b border-brand-border/40 pb-4 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-jakarta text-lg font-extrabold text-brand-dark">Company Details</h2>
                <p className="font-sans text-brand-muted text-xs">Essential information about your startup</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Company Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. BazarIQ"
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 px-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans"
                  />
                </div>
              </div>

              {/* Website URL */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Website URL
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-brand-muted/50 pointer-events-none">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans"
                  />
                </div>
              </div>

              {/* HQ Location */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  HQ Location
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-brand-muted/50 pointer-events-none">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="hq_location"
                    value={formData.hq_location}
                    onChange={handleChange}
                    placeholder="e.g. Tejgaon, Dhaka"
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans"
                  />
                </div>
              </div>

              {/* Team Size */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Team Size
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-brand-muted/50 pointer-events-none">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="team_size"
                    value={formData.team_size}
                    onChange={handleChange}
                    placeholder="e.g. 45 Members"
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans"
                  />
                </div>
              </div>

              {/* Funding Stage */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Funding Stage
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-brand-muted/50 pointer-events-none">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <select
                    name="funding_stage"
                    value={formData.funding_stage}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all font-sans appearance-none"
                  >
                    <option value="">Select Funding Stage</option>
                    <option value="Bootstrapped">Bootstrapped</option>
                    <option value="Pre-Seed">Pre-Seed</option>
                    <option value="Seed">Seed</option>
                    <option value="Series A">Series A</option>
                    <option value="Series B+">Series B+</option>
                    <option value="Grant">Grant</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 text-brand-muted/60 pointer-events-none font-sans">
                    ▼
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Category / Industry
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-brand-muted/50 pointer-events-none">
                    <Tag className="w-4 h-4" />
                  </div>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all font-sans appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="SaaS / ERP">SaaS / ERP</option>
                    <option value="HealthTech / AI">HealthTech / AI</option>
                    <option value="B2B E-commerce">B2B E-commerce</option>
                    <option value="FinTech">FinTech</option>
                    <option value="EdTech">EdTech</option>
                    <option value="Logistics / Supply Chain">Logistics / Supply Chain</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 text-brand-muted/60 pointer-events-none">
                    ▼
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Company Description
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-brand-muted/50 pointer-events-none">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe what your startup builds, who your customers are, and the problem you solve..."
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Founder Details */}
          <div className="space-y-6">
            <div className="border-b border-brand-border/40 pb-4 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-jakarta text-lg font-extrabold text-brand-dark">Founder Details</h2>
                <p className="font-sans text-brand-muted text-xs">Information about you as the creator</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Founder Name */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Founder Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="founder_name"
                  value={formData.founder_name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Adil Khan"
                  className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 px-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans"
                />
              </div>

              {/* Founder Email */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Founder Email
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-brand-muted/50 pointer-events-none">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="founder_email"
                    value={formData.founder_email}
                    onChange={handleChange}
                    placeholder="founder@example.com"
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans"
                  />
                </div>
              </div>

              {/* LinkedIn URL */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark font-sans">
                  Founder LinkedIn URL
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-brand-muted/50 pointer-events-none">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="url"
                    name="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-slate-50 border border-brand-border/80 focus:border-brand-primary focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-all placeholder:text-brand-muted/40 font-sans"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Submit Section */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover disabled:bg-brand-primary/50 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md shadow-brand-primary/10 hover:shadow-brand-primary/25 disabled:shadow-none hover:-translate-y-0.5 active:translate-y-0 disabled:transform-none cursor-pointer font-jakarta"
          >
            {isPending ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Saving Profile...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Save Profile
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
