'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Rocket, Menu, X, ArrowRight, Layers } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Directory', href: '/directory' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism border-b border-brand-border/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-brand-primary/10 p-2 rounded-xl text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-5 w-5 fill-brand-primary/10" />
              </div>
              <span className="font-jakarta text-xl font-bold tracking-tight text-brand-dark flex items-center gap-1.5">
                Dhaka<span className="text-gradient font-extrabold">Founders</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors duration-200 relative py-2 ${
                  isActive(link.href)
                    ? 'text-brand-primary'
                    : 'text-brand-muted hover:text-brand-dark'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Call to Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/directory?submit=true"
              className="inline-flex items-center gap-2 bg-brand-primary text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-brand-primary-hover shadow-md hover:shadow-lg hover:shadow-brand-primary/10 active:scale-98 transition-all duration-200"
            >
              Submit Startup
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-brand-muted hover:text-brand-dark hover:bg-black/5 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glassmorphism border-t border-brand-border/40 animate-slide-up">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-brand-primary/5 text-brand-primary font-semibold'
                    : 'text-brand-muted hover:text-brand-dark hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-brand-border/40 px-3 flex flex-col gap-3">
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-base font-medium text-brand-muted hover:text-brand-dark hover:bg-black/5 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/directory?submit=true"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary text-white text-base font-semibold py-2.5 rounded-xl hover:bg-brand-primary-hover active:scale-98 transition-all duration-200"
              >
                Submit Startup
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
