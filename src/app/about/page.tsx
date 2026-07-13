import React from 'react';
import { Target, Users, Shield, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

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

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-brand-light bg-grid-pattern py-16 px-4 sm:px-6 lg:px-8">
      {/* Radial ambient glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-16 animate-fade-in z-10">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider font-sans">
            Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Catalyzing Bangladesh's <span className="gradient-text">Tech Ecosystem</span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl font-sans leading-relaxed">
            Dhaka Founders is a collaborative, open directory designed to bridge the gap between talented builders, active investors, and the wider startup community in Bangladesh.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Registered Startups', value: '150+' },
            { label: 'Active Founders', value: '200+' },
            { label: 'Total Investments', value: '৳50M+' },
            { label: 'Ecosystem Partners', value: '10+' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md border border-brand-border/40 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-extrabold text-brand-primary font-jakarta">{stat.value}</div>
              <div className="text-xs font-medium text-brand-muted mt-1 uppercase tracking-wider font-sans">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">Why Dhaka Founders Exists</h2>
            <p className="text-brand-muted mt-2 max-w-xl mx-auto text-sm font-sans">We believe the future of Bangladesh's economy lies in standard-setting technology and collaborative entrepreneurship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glassmorphism-card rounded-2xl p-8 space-y-4">
              <div className="p-3 bg-brand-primary/10 rounded-xl w-fit text-brand-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Build in Public</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Encouraging transparency and sharing updates openly allows builders to get early feedback, gain momentum, and inspire others to build.
              </p>
            </div>

            <div className="glassmorphism-card rounded-2xl p-8 space-y-4">
              <div className="p-3 bg-brand-primary/10 rounded-xl w-fit text-brand-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Ecosystem Synergy</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Connecting founders directly to peers, investors, and resources to remove frictional overhead and accelerate local startup growth.
              </p>
            </div>

            <div className="glassmorphism-card rounded-2xl p-8 space-y-4">
              <div className="p-3 bg-brand-primary/10 rounded-xl w-fit text-brand-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Premium Standard</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Creating high-quality databases and profiles that command trust from local and international stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* The Founder Section */}
        <div className="bg-[#1F2532] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,129,199,0.15),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest font-sans">Behind the Platform</span>
              <h2 className="text-3xl font-extrabold tracking-tight font-jakarta">Founder & Creator</h2>
              <p className="text-white/70 text-base leading-relaxed font-sans font-normal">
                Dhaka Founders was founded by <strong>Datavvy</strong>, a forward-looking company committed to designing data-driven solutions for the local ecosystem. The platform was built and engineered by <strong>Adib</strong>, a passionate product builder dedicated to supporting the technology renaissance in Bangladesh. Together, they aim to streamline resource discovery in Dhaka's expanding tech scene.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-4 font-sans">
                <a
                  href="https://x.com/adibbhai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center font-bold text-xs">X</span>
                  <span>X.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/adiibh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/adibbhossain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              {/* Premium Avatar Placeholder with Gradients */}
              <div className="w-40 h-44 rounded-3xl bg-gradient-to-tr from-brand-primary to-emerald-400 p-1 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-[#1F2532] rounded-[22px] flex flex-col items-center justify-center text-center p-4">
                  <div className="text-3xl font-bold text-white font-jakarta">DV</div>
                  <div className="text-xs text-white mt-1 font-sans font-semibold">Datavvy</div>
                  <div className="text-[10px] text-brand-primary font-semibold mt-0.5 font-sans">Founder Company</div>

                  <div className="mt-3 pt-2 border-t border-white/10 w-full text-center">
                    <div className="text-[10px] text-white/50 font-sans">Built by</div>
                    <div className="text-[11px] text-white font-semibold font-sans">Adib Hossain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Callout */}
        <div className="text-center pt-8 border-t border-brand-border/40">
          <h3 className="text-xl font-bold text-brand-dark font-jakarta">Ready to show Dhaka what you're building?</h3>
          <p className="text-brand-muted text-sm mt-1 mb-6 font-sans">Add your company profile to start networking with partners and clients.</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-brand-primary/20 hover:scale-105"
          >
            Go to Dashboard
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
