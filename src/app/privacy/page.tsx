import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
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
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-brand-muted text-sm font-sans">
            Last Updated: July 13, 2026. Learn how we handle, store, and protect your data at Dhaka Founders.
          </p>
        </div>

        {/* Introduction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 border border-brand-border/40 rounded-2xl p-6 flex flex-col items-center text-center space-y-2">
            <Lock className="h-6 w-6 text-brand-primary" />
            <h3 className="font-bold text-brand-dark text-sm">Secure Auth</h3>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              We leverage Clerk auth for enterprise-grade profile protection and security.
            </p>
          </div>
          <div className="bg-white/80 border border-brand-border/40 rounded-2xl p-6 flex flex-col items-center text-center space-y-2">
            <Eye className="h-6 w-6 text-brand-primary" />
            <h3 className="font-bold text-brand-dark text-sm">Transparency</h3>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Only startup details you explicitly choose to publish will be displayed.
            </p>
          </div>
          <div className="bg-white/80 border border-brand-border/40 rounded-2xl p-6 flex flex-col items-center text-center space-y-2">
            <Shield className="h-6 w-6 text-brand-primary" />
            <h3 className="font-bold text-brand-dark text-sm">Data Control</h3>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Delete or update your profile from your dashboard at any time.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="glassmorphism-card rounded-3xl p-8 sm:p-12 space-y-8 bg-white/70 border border-brand-border/40">
          
          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              1. Information We Collect
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              We collect information in two main categories to run the Dhaka Founders directory:
            </p>
            <ul className="list-disc pl-5 text-brand-muted text-sm space-y-1.5">
              <li>
                <strong>Account Credentials:</strong> Handled by Clerk (name, email, unique authentication keys).
              </li>
              <li>
                <strong>Startup Profile Info:</strong> Company name, category, stage, website URL, description, location, team size, funding information, and contact founder email.
              </li>
            </ul>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              2. How We Use Your Information
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Your startup data is processed to generate and rank directory listings for other visitors to browse. Contact details (such as founder email and LinkedIn links) are made available to verified community members looking to establish connections. We do not sell your personal or startup metrics to third-party brokers.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              3. Data Retention and Deletion
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              You retain full ownership of the details you upload. You can update, replace, or delete your directory card from the Dashboard workspace at any point. When you select 'Delete Profile', your data is wiped permanently from our active database within 24 hours.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              4. Cookies & Local Storage
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              We use secure session cookies managed by Clerk and Supabase to remember your login session across page requests. No tracking beacons or advertising cookies are embedded.
            </p>
          </section>

          <section className="space-y-3 font-sans">
            <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 font-jakarta">
              <FileText className="h-5 w-5 text-brand-primary" />
              5. Contact Us
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              If you have security questions or want to request manual account termination, please contact the administrator via email or reach out on X at <a href="https://x.com/adibbhai" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">@adibbhai</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
