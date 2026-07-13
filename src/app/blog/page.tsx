'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Search, Filter } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building in Public: Why Dhaka\'s Startup Scene Needs Radical Transparency',
    category: 'Strategy',
    slug: 'building-in-public-dhaka',
    excerpt: 'Sharing metrics, milestones, and failures openly can accelerate ecosystem trust and attract early customers and international investors.',
    date: 'July 10, 2026',
    readTime: '6 min read',
    author: 'Adib Hossain',
    tags: ['Ecosystem', 'Strategy', 'Transparency'],
  },
  {
    id: '2',
    title: 'The Evolution of SaaS in Bangladesh: Local Nuances & Global Potential',
    category: 'Tech',
    slug: 'saas-evolution-bangladesh',
    excerpt: 'How local B2B startups are overcoming subscription billing challenges and proving the viability of enterprise software-as-a-service in Dhaka.',
    date: 'June 28, 2026',
    readTime: '8 min read',
    author: 'Adib Hossain',
    tags: ['SaaS', 'Tech', 'Enterprise'],
  },
  {
    id: '3',
    title: 'Navigating Seed Stage Funding: A Practical Guide for Bangladeshi Founders',
    category: 'Funding',
    slug: 'seed-funding-guide-dhaka',
    excerpt: 'A comprehensive checklist of what angel networks and early-stage VCs in Dhaka look for before issuing term sheets in 2026.',
    date: 'June 15, 2026',
    readTime: '10 min read',
    author: 'Adib Hossain',
    tags: ['Funding', 'VC', 'Angel Investing'],
  },
  {
    id: '4',
    title: 'Optimizing Cloud Costs for Early Stage Startups: Serverless vs. VM Hosting',
    category: 'Tech',
    slug: 'optimizing-cloud-costs',
    excerpt: 'Keep your runway long. We compare costs and architectural complexity of AWS/Vercel serverless setups against basic VPS solutions.',
    date: 'May 30, 2026',
    readTime: '5 min read',
    author: 'Tasnim Ahmed',
    tags: ['Cloud', 'DevOps', 'Cost Saving'],
  },
  {
    id: '5',
    title: 'Fintech Regulations in Bangladesh: Understanding MFS and PSP Guidelines',
    category: 'Funding',
    slug: 'fintech-regulations-bangladesh',
    excerpt: 'A breakdown of Bangladesh Bank\'s licensing requirements for digital wallets, merchant gateways, and payment service providers.',
    date: 'May 12, 2026',
    readTime: '7 min read',
    author: 'Imtiaz Bashar',
    tags: ['Fintech', 'Legal', 'Compliance'],
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Strategy', 'Tech', 'Funding'];

  const filteredPosts = mockPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-brand-light bg-grid-pattern py-16 px-4 sm:px-6 lg:px-8">
      {/* Radial Glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-12 animate-fade-in z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider font-sans">
            Insights & Guides
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Ecosystem <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-brand-muted text-lg font-sans">
            Deep dives into tech, scaling strategy, and fundraising for founders building the future of Bangladesh.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-brand-border/40">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
            <input
              type="text"
              placeholder="Search posts or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-brand-border bg-white focus:outline-none focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/10 transition-all font-sans"
            />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <Filter className="h-4 w-4 text-brand-muted mr-1 hidden sm:block" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10'
                    : 'bg-brand-light hover:bg-brand-border/30 text-brand-muted hover:text-brand-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="glassmorphism-card rounded-3xl overflow-hidden flex flex-col h-full bg-white/70 border border-brand-border/40"
              >
                <div className="p-6 sm:p-8 flex flex-col flex-1 space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wide px-2.5 py-1 rounded-lg bg-brand-primary/10">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-muted flex items-center gap-1 font-sans">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-brand-dark line-clamp-2 hover:text-brand-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-brand-muted text-sm line-clamp-3 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="pt-4 border-t border-brand-border/30 flex items-center justify-between text-xs text-brand-muted font-sans font-medium">
                    <span className="flex items-center gap-1.5 text-brand-dark/80">
                      <span className="w-5 h-5 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px]">
                        {post.author[0]}
                      </span>
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/50 border border-brand-border/30 rounded-3xl">
            <p className="text-brand-muted font-sans text-base">No articles found matching your query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
