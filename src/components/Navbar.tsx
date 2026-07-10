'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';
import { SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs';

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/75 border-b border-brand-border/40 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-gradient-to-br from-brand-primary to-blue-500 p-2 rounded-xl text-white group-hover:scale-105 transition-all duration-300 shadow-md shadow-brand-primary/20">
                <Zap className="h-5 w-5 fill-white text-white" />
              </div>
              <span className="font-jakarta text-xl font-extrabold tracking-tight text-brand-dark flex items-center">
                Dhaka<span className="text-brand-primary ml-0.5 group-hover:text-brand-primary-hover transition-colors">Founders</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                    : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-dark/5 font-medium'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call to Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-brand-dark/70 hover:text-brand-dark transition-colors duration-200 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="inline-flex items-center gap-2 bg-brand-primary text-white text-sm font-semibold px-4.5 py-2 rounded-xl hover:bg-brand-primary-hover hover:scale-[1.02] shadow-md shadow-brand-primary/10 active:scale-[0.98] transition-all duration-200 cursor-pointer">
                  Join Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
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
        <div className="md:hidden bg-white/95 border-t border-brand-border/40 backdrop-blur-lg animate-slide-up">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-xl text-base transition-colors ${
                  isActive(link.href)
                    ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                    : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-dark/5 font-medium'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-brand-border/40 px-3 flex flex-col gap-3">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="w-full text-center py-2.5 rounded-xl text-base font-medium text-brand-dark/70 hover:text-brand-dark hover:bg-brand-dark/5 transition-all cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary text-white text-base font-semibold py-2.5 rounded-xl hover:bg-brand-primary-hover active:scale-[0.98] transition-all duration-200 cursor-pointer">
                    Join Now
                    <ArrowRight className="h-4.5 w-4.5" />
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <div className="flex justify-center py-1">
                  <UserButton />
                </div>
              </Show>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
