import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import ProfileForm from './ProfileForm';

export default async function ProfilePage() {
  const { userId } = await auth();

  // If user is not authenticated by Clerk, redirect to sign-in
  if (!userId) {
    redirect('/sign-in');
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Retrieve the existing profile for this Clerk user if it exists
  const { data: profile } = await supabase
    .from('company_profile')
    .select('company_name, website_url, category, description, founder_name, founder_email, linkedin_url, hq_location, team_size, funding_stage')
    .eq('clerk_auth_key', userId)
    .maybeSingle();

  // Map null values to empty strings to keep form inputs uncontrolled-to-controlled clean
  const initialData = profile
    ? {
        company_name: profile.company_name || '',
        website_url: profile.website_url || '',
        category: profile.category || '',
        description: profile.description || '',
        founder_name: profile.founder_name || '',
        founder_email: profile.founder_email || '',
        linkedin_url: profile.linkedin_url || '',
        hq_location: profile.hq_location || '',
        team_size: profile.team_size || '',
        funding_stage: profile.funding_stage || '',
      }
    : null;

  return (
    <div className="min-h-screen bg-brand-light relative">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
      
      <div className="relative">
        <ProfileForm initialData={initialData} />
      </div>
    </div>
  );
}
