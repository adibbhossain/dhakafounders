import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Zap, Users, TrendingUp, CheckCircle, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  // Sample featured startups for the landing page mockup
  const featuredStartups = [
    {
      name: 'ShebaFlow',
      category: 'SaaS / ERP',
      pitch: 'Next-gen logistics and service automation for SME businesses in Dhaka.',
      stage: 'Seed',
      funding: '৳8.5M',
      growth: '+42% MoM',
      badgeColor: 'bg-blue-500/10 text-blue-600',
    },
    {
      name: 'MedDacca',
      category: 'HealthTech / AI',
      pitch: 'AI-driven patient diagnostics and electronic health record directory.',
      stage: 'Pre-Seed',
      funding: 'Bootstrapped',
      growth: '+28% MoM',
      badgeColor: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      name: 'BazarIQ',
      category: 'B2B E-commerce',
      pitch: 'Optimizing wholesale grocery supply chain using real-time demand forecasting.',
      stage: 'Series A',
      funding: '৳45.0M',
      growth: '+65% MoM',
      badgeColor: 'bg-purple-500/10 text-purple-600',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-brand-light min-h-screen">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-50 z-0">
        <div className="radial-glow w-full h-full" />
      </div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-secondary/5 blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 bg-grid-pattern w-full pb-20">
        
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          {/* Animated Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold mb-6 animate-fade-in shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-primary fill-brand-primary/20" />
            <span>Discover the Ecosystem</span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark max-w-4xl mx-auto leading-[1.1] mb-6 animate-slide-up">
            Empowering Bangladesh’s Tech Future:{' '}
            <span className="text-gradient">Connect, Build, and Scale</span>
          </h1>

          {/* Subheadline (combining visual tone and secondary catchphrase) */}
          <p className="font-sans text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up [animation-delay:100ms]">
            The launchpad for builders to <span className="text-brand-dark font-medium">grow your startup in the open</span>. Where founders, builders, and investors unite to fund dreams and support each other's growth.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up [animation-delay:200ms]">
            <Link
              href="/directory"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 active:scale-98 transition-all"
            >
              Explore Directory
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-brand-border/80 text-brand-dark text-base font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 shadow-sm active:scale-98 transition-all"
            >
              Join as Founder
            </Link>
          </div>
        </section>

        {/* ECOSYSTEM STATS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="glassmorphism rounded-2xl border border-brand-border/60 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 shadow-sm divide-y md:divide-y-0 md:divide-x divide-brand-border/40">
            {[
              { label: 'Startups Registered', value: '500+' },
              { label: 'Active Builders', value: '1,200+' },
              { label: 'Verified Investors', value: '120+' },
              { label: 'Funding Facilitated', value: '৳250M+' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-4 first:pt-0 md:first:pt-4 md:pl-0">
                <span className="font-jakarta text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-xs sm:text-sm text-brand-muted font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* LIVE MOCK DIRECTORY PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-jakarta text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Startups Launching in the Open
            </h2>
            <p className="font-sans text-base text-brand-muted mt-3">
              Explore real-time data from high-growth SaaS, FinTech, and AI platforms building right here in Dhaka.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredStartups.map((startup, idx) => (
              <div key={idx} className="glassmorphism-card rounded-2xl p-6 relative flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${startup.badgeColor}`}>
                      {startup.category}
                    </span>
                    <span className="text-xs font-semibold text-brand-muted flex items-center gap-1">
                      <TrendingUp className="h-3.5 w-3.5 text-brand-secondary" />
                      {startup.growth}
                    </span>
                  </div>
                  <h3 className="font-jakarta font-bold text-xl text-brand-dark mb-2 flex items-center justify-between">
                    {startup.name}
                    <span className="h-2 w-2 rounded-full bg-brand-secondary animate-pulse-slow" title="Active" />
                  </h3>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
                    {startup.pitch}
                  </p>
                </div>

                <div className="border-t border-brand-border/40 pt-4 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-brand-muted block font-medium">STAGE</span>
                    <span className="text-brand-dark font-bold mt-0.5 block">{startup.stage}</span>
                  </div>
                  <div>
                    <span className="text-brand-muted block font-medium">FUNDING</span>
                    <span className="text-brand-dark font-bold mt-0.5 block">{startup.funding}</span>
                  </div>
                  <Link
                    href="/directory"
                    className="inline-flex items-center justify-center p-2 rounded-lg bg-brand-primary/5 text-brand-primary hover:bg-brand-primary hover:text-white transition-all group"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/directory"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover group"
            >
              View all directory startups
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* VALUE PROPOSITIONS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-brand-border/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="bg-brand-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-jakarta font-bold text-xl text-brand-dark">Vibrant Community</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                Connect with peer founders, tech builders, and operations specialists. Share logs, launch products, and build in public together.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center text-brand-secondary shadow-sm">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-jakarta font-bold text-xl text-brand-dark">Access Funding</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                Direct matching with verified local angel networks and regional venture capital funds focusing on emerging SaaS opportunities in South Asia.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600 shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-jakarta font-bold text-xl text-brand-dark">Verified Data</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                Skip the noise. Our profiles carry verification metrics on growth, active headcount, and corporate registry, ensuring investor-ready visibility.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            {/* CTA Graphics */}
            <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-primary/15 blur-[80px] pointer-events-none" />
            <div className="absolute left-1/3 top-0 w-40 h-40 rounded-full bg-brand-secondary/15 blur-[60px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="font-jakarta text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to Accelerate Your Startup?
              </h2>
              <p className="font-sans text-slate-300 leading-relaxed">
                Register your startup profile today to make it visible to local/global investors, find technical partners, and support each other's scaling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/dashboard?register=true"
                  className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-secondary-hover text-brand-dark text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-98"
                >
                  Create Founder Profile
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
                <Link
                  href="/directory"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all active:scale-98"
                >
                  View Startups
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

