'use client';

import React from 'react';
import Link from 'next/link';
import { Rocket, Heart, Mail } from 'lucide-react';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand Vision */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-brand-primary/20 p-2 rounded-xl text-brand-primary">
                <Rocket className="h-5 w-5 fill-brand-primary/20" />
              </div>
              <span className="font-jakarta text-xl font-bold tracking-tight text-white">
                Dhaka<span className="text-brand-secondary font-extrabold">Founders</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm font-sans leading-relaxed">
              Empowering Bangladesh’s tech future. We build the infrastructure to connect, build, and scale local SaaS startups, uniting founders, builders, and investors in a vibrant community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="Twitter">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-jakarta font-semibold text-sm tracking-wider uppercase text-slate-300 mb-4">Ecosystem</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/directory" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Startup Directory
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Founder Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Access Funding
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Growth Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-4">
            <h3 className="font-jakarta font-semibold text-sm tracking-wider uppercase text-slate-300">Join the Newsletter</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Get weekly updates on funding rounds, launch events, and startup insights. Support each other's growth.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mt-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pl-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  required
                />
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
              </div>
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold px-4 py-2.5 rounded-xl active:scale-98 transition-all whitespace-nowrap shadow-md shadow-brand-primary/10"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-sans">
            &copy; {new Date().getFullYear()} Dhaka Founders. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1 font-sans">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> for the Bangladesh Startup Ecosystem.
          </p>
        </div>

      </div>
    </footer>
  );
}
