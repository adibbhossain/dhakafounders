'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, Heart, MapPin } from 'lucide-react';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
    <footer className="w-full bg-[#1F2532] text-white relative z-10 border-t border-[#2A81C7]/10">

      {/* Onboarding Footer CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 font-jakarta">
              Ready to grow with Bangladesh's best?
            </h3>
            <p className="text-white/60 text-sm font-sans">
              Join 500+ founders already building in the open.
            </p>
          </div>
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:scale-105 shrink-0"
          >
            <Zap className="h-4 w-4 fill-white/10" />
            Explore the Directory
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="bg-gradient-to-br from-brand-primary to-blue-500 p-2 rounded-lg text-white group-hover:scale-105 transition-transform duration-200">
                <Zap className="h-4 w-4 fill-white text-white" />
              </div>
              <span className="font-jakarta text-lg font-bold">
                Dhaka<span className="text-brand-primary">Founders</span>
              </span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6 font-sans">
              Dhaka Founders is the premier directory connecting founders, investors, and builders across Bangladesh's tech ecosystem.
            </p>
            <div className="flex items-center gap-1.5 text-white/40 text-xs mb-5 font-sans">
              <MapPin className="h-3.5 w-3.5" />
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3">
              <a href="https://x.com/adibbhai" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-primary flex items-center justify-center transition-all duration-200 hover:scale-115">
                <XIcon className="w-4 h-4 text-white/70 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/adiibh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-primary flex items-center justify-center transition-all duration-200 hover:scale-115">
                <LinkedinIcon className="w-4 h-4 text-white/70 hover:text-white" />
              </a>
              <a href="https://github.com/adibbhossain" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-primary flex items-center justify-center transition-all duration-200 hover:scale-115">
                <GithubIcon className="w-4 h-4 text-white/70 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-jakarta">Platform</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link href="/directory" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  Directory
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  For Investors
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-jakarta">Community</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link href="/about" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 4 */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-jakarta">Legal</h4>
            <ul className="space-y-3 font-sans">
              <li>
                <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-primary text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs font-sans">
          <p>&copy; {new Date().getFullYear()} Dhaka Founders. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for Bangladesh's startup community
          </p>
        </div>
      </div>

    </footer>
  );
}
