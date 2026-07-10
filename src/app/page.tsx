'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { ArrowRight, ChevronDown, Users, TrendingUp, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms (all counters will take exactly 1.5s)
    const stepTime = 16;   // ms (~60fps)
    const steps = duration / stepTime;
    const increment = target / steps; // Float increment!

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const testSupabaseConnection = async () => {
      const supabase = createClient();
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Supabase connection verification failed:', error.message);
          setIsConnected(false);
        } else {
          console.log('Supabase connection verified successfully! Session:', data.session);
          setIsConnected(true);
        }
      } catch (err) {
        console.error('Unexpected error verifying Supabase connection:', err);
        setIsConnected(false);
      }
    };
    testSupabaseConnection();
  }, []);

  const headlines = [
    {
      text: (
        <>
          Discover the <span className="gradient-text">Builders</span> Shaping <span className="gradient-text">Bangladesh's</span> Tech Ecosystem.
        </>
      ),
    },
    {
      text: (
        <>
          The <span className="gradient-text">Launchpad</span> for Builders: Grow Your Startup <span className="gradient-text">in the Open</span>.
        </>
      ),
    },
    {
      text: (
        <>
          Discover the <span className="gradient-text">Ecosystem</span>: Where Founders, Builders, and Investors <span className="gradient-text">Unite</span>.
        </>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

      {/* HERO GRADIENT BLUEISH BACKGROUND */}
      <div className="absolute top-0 left-0 right-0 h-[92vh] bg-gradient-to-b from-[#2A81C7]/12 via-[#2A81C7]/3 to-transparent pointer-events-none z-0" />

      {/* BACKGROUND GRAPHICS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-primary/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-3xl" />
      </div>

      {/* Dot Pattern with 35% opacity overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-35 z-0" style={{ backgroundImage: 'radial-gradient(circle, #2A81C7 1.2px, transparent 1.2px)', backgroundSize: '40px 40px' }} />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center flex flex-col items-center justify-center min-h-[88vh]">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-brand-primary uppercase tracking-wider font-jakarta">
            Bangladesh's #1 Founder Directory
          </span>
        </div>

        {/* Dynamic Heading */}
        <div className="min-h-[14rem] sm:min-h-[10rem] md:min-h-[12rem] flex flex-col items-center justify-center w-full">
          <h1 key={currentIndex} className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-tight mb-6 max-w-4xl mx-auto tracking-tight animate-slide-up">
            {headlines[currentIndex].text}
          </h1>
        </div>

        {/* Copy */}
        <p className="font-sans text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          A vibrant community where founders, investors, and builders grow and fund their dreams together. Join Bangladesh's most supportive startup ecosystem.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <Link
            id="hero-explore-cta"
            href="/directory"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl font-semibold bg-brand-primary hover:bg-brand-primary-hover text-white shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 text-base transition-all duration-200"
          >
            Explore Directory
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            id="hero-join-cta"
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl font-semibold border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-transparent hover:-translate-y-0.5 active:translate-y-0 px-8 py-4 text-base transition-all duration-200"
          >
            Join as Founder
          </Link>
        </div>

        {/* Social Proof overlapping avatars */}
        <div className="flex items-center justify-center gap-3 animate-fade-in mb-8">
          <div className="flex -space-x-3">
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md bg-blue-600" style={{ zIndex: 5 }}>SK</div>
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md bg-emerald-600" style={{ zIndex: 4 }}>RH</div>
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md bg-purple-600" style={{ zIndex: 3 }}>AM</div>
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md bg-orange-600" style={{ zIndex: 2 }}>NI</div>
            <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md bg-pink-600" style={{ zIndex: 1 }}>FR</div>
          </div>
          <p className="text-sm text-brand-muted font-medium font-sans">
            <span className="font-bold text-brand-dark">500+ founders</span> already building in the open
          </p>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {headlines.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 bg-brand-primary ${currentIndex === idx ? 'w-6' : 'w-2 opacity-30 hover:opacity-60'
                }`}
              aria-label={`Headline ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-muted/50 animate-bounce pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-widest font-sans">Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-20 bg-white border-y border-brand-border/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-brand-primary uppercase tracking-widest mb-12 font-jakarta">
            Community at a Glance
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Active Founders', value: 500, suffix: '+' },
              { label: 'Startups Listed', value: 320, suffix: '+' },
              { label: 'Active Investors', value: 120, suffix: '+' },
              { label: 'Cities Represented', value: 8, suffix: '+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-white border border-brand-primary/10 shadow-md shadow-brand-primary/5 group-hover:shadow-brand-primary/15 group-hover:border-brand-primary/30 group-hover:-translate-y-1 transition-all duration-300 mx-auto mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold gradient-text leading-none font-jakarta">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-brand-dark/60 tracking-wider uppercase font-jakarta">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="py-24 bg-[#F8FAFC] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-3 font-jakarta">
              Why Dhaka Founders?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4 font-jakarta">
              Everything you need to <span className="gradient-text">scale your startup</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed font-sans">
              From funding support and founder resources to direct connections with investors — we give you the tools to build in the open.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border/60 shadow-sm group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-primary/10 group-hover:scale-105 transition-transform duration-300">
                <Users className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 font-jakarta">Build Your Network</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Connect with like-minded founders, mentors, and investors who are actively shaping the Bangladeshi startup landscape.
              </p>
              <div className="mt-6 h-0.5 w-12 bg-brand-primary rounded-full group-hover:w-24 transition-all duration-300" />
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border/60 shadow-sm group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 font-jakarta">Access Funding</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Get discovered by top local and regional investors. Showcase your startup and unlock growth capital.
              </p>
              <div className="mt-6 h-0.5 w-12 bg-brand-secondary rounded-full group-hover:w-24 transition-all duration-300" />
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-2xl p-8 border border-brand-border/60 shadow-sm group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-amber-500/10 group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 font-jakarta">Scale Faster</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Leverage founder resources, workshops, and community support to accelerate your startup's growth trajectory.
              </p>
              <div className="mt-6 h-0.5 w-12 bg-amber-500 rounded-full group-hover:w-24 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* DATABASE CONNECTION SUCCESS BAR */}
      <div className="flex justify-center py-4 bg-white border-y border-brand-border/40 relative z-10 font-sans text-xs font-semibold">
        {isConnected === null && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-blue-50 border-blue-200 text-blue-700 shadow-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span>Verifying Supabase connection...</span>
          </div>
        )}
        {isConnected === true && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Supabase connection successful</span>
          </div>
        )}
        {isConnected === false && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-rose-50 border-rose-200 text-rose-700 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Supabase connection failed</span>
          </div>
        )}
      </div>

      {/* FEATURED WATCHLIST */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-2 font-jakarta">
                Featured Startups
              </p>
              <h2 className="text-3xl font-extrabold text-brand-dark font-jakarta">
                Startups to Watch in 2026
              </h2>
            </div>
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover transition-colors font-jakarta"
            >
              View all startups
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredStartups.map((startup, idx) => (
              <div key={idx} className="glassmorphism-card rounded-2xl p-6 relative flex flex-col justify-between bg-white text-left">
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
                    href={`/directory?id=${idx + 1}`}
                    className="inline-flex items-center justify-center p-2 rounded-lg bg-brand-primary/5 text-brand-primary hover:bg-brand-primary hover:text-white transition-all group"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY CTA BANNER */}
      <section className="py-20 bg-brand-dark relative z-10">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-jakarta leading-tight">
            Support each other's growth. <span className="text-brand-primary">Together.</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed font-sans max-w-xl mx-auto">
            Join a vibrant community of founders who believe the best startups are built with the support of a strong local ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              id="bottom-explore-cta"
              href="/directory"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:scale-105 inline-flex items-center justify-center gap-2 font-jakarta"
            >
              Explore Directory
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              id="bottom-join-cta"
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 text-white font-semibold text-base transition-all duration-200 hover:bg-white/5 font-jakarta"
            >
              Join as Founder
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

