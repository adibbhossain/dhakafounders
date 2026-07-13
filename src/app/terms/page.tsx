import React from 'react';
import { Scale, ShieldAlert, CheckCircle, FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-brand-light bg-grid-pattern py-16 px-4 sm:px-6 lg:px-8">
      {/* Radial ambient glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-12 animate-fade-in z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider font-sans">
            Legal Information
          </div>
          <h1 className="text-4xl font-extrabold text-brand-dark tracking-tight">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-brand-muted text-sm font-sans">
            Last Updated: July 13, 2026. Please read the community guidelines and platform terms for Dhaka Founders.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 border border-brand-border/40 rounded-2xl p-6 flex flex-col items-center text-center space-y-2">
            <Scale className="h-6 w-6 text-brand-primary" />
            <h3 className="font-bold text-brand-dark text-sm">Ecosystem Trust</h3>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              We require real founders to represent real companies with accurate info.
            </p>
          </div>
          <div className="bg-white/80 border border-brand-border/40 rounded-2xl p-6 flex flex-col items-center text-center space-y-2">
            <CheckCircle className="h-6 w-6 text-brand-primary" />
            <h3 className="font-bold text-brand-dark text-sm">Respectful Use</h3>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Platform features are for networking, collaboration, and investment queries.
            </p>
          </div>
          <div className="bg-white/80 border border-brand-border/40 rounded-2xl p-6 flex flex-col items-center text-center space-y-2">
            <ShieldAlert className="h-6 w-6 text-brand-primary" />
            <h3 className="font-bold text-brand-dark text-sm">Moderation</h3>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Profiles misrepresenting metrics or spamming members will be removed.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="glassmorphism-card rounded-3xl p-8 sm:p-12 space-y-8 bg-white/70 border border-brand-border/40">
          
          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              1. Acceptance of Terms
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              By accessing Dhaka Founders ("Platform", "we", "us"), registering an account via Clerk, or publishing a startup profile, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our Platform services.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              2. User Representation and Profile Accuracy
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              To list a startup profile on our directory, you must be a legally authorized founder, executive, or representative of the company. You agree that all metrics, location information, funding statuses, and pitch content submitted are truthful, accurate, and kept up-to-date.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              3. Prohibited Activities
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Users of the Platform are strictly prohibited from:
            </p>
            <ul className="list-disc pl-5 text-brand-muted text-sm space-y-1.5">
              <li>
                Listing fraudulent businesses, shell corporations, or non-existent projects.
              </li>
              <li>
                Scraping member profile directories or harvesting emails for marketing campaigns or spam.
              </li>
              <li>
                Uploading malicious scripts, materials that infringe third-party intellectual property, or offensive media content.
              </li>
            </ul>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              4. Platform Moderation and Termination
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              We reserve the right, but hold no obligation, to review and moderate directory profiles. Dhaka Founders admin reserve absolute discretion to hide, alter, or permanently terminate profiles that violate these guidelines or degrade community standards without prior notice.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              5. Disclaimer of Warranties
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Dhaka Founders is provided on an "as-is" and "as-available" basis. We make no guarantees regarding the validity of startup metrics, the success of fundraising queries, or the continuous availability of the site hosting. Use of any data gathered from the directory is entirely at your own risk.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
