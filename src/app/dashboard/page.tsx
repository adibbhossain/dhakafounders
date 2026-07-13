import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import DashboardClient from './DashboardClient';

export default async function DashboardPage() {
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
    .select('id, company_name, website_url, category, description, founder_name, founder_email, linkedin_url, hq_location, team_size, funding_stage')
    .eq('clerk_auth_key', userId)
    .maybeSingle();

  let initialRequests: any[] = [];
  let acceptedConnectionsCount = 14;

  if (profile) {
    // 1. Fetch pending connection requests
    const { data: dbRequests } = await supabase
      .from('connection_request')
      .select('*')
      .eq('receiver_profile_id', profile.id)
      .eq('status', 'pending');

    if (dbRequests && dbRequests.length > 0) {
      const senderIds = dbRequests.map((r: any) => r.sender_profile_id);
      const { data: senders } = await supabase
        .from('company_profile')
        .select('id, company_name, category, founder_name, description')
        .in('id', senderIds);

      if (senders) {
        initialRequests = dbRequests.map((r: any) => {
          const sender = senders.find((s: any) => s.id === r.sender_profile_id);
          return {
            id: r.id,
            name: sender?.founder_name || 'Founder',
            firm: sender?.company_name || 'Unknown Startup',
            role: sender?.category || 'Startup',
            avatarLetter: (sender?.company_name || 'UN').substring(0, 2).toUpperCase(),
            avatarBg: 'bg-brand-primary',
            message: r.message || `Hey, let's connect and explore synergy!`,
            time: new Date(r.created_at).toLocaleDateString(),
          };
        });
      }
    }

    // 2. Fetch count of accepted connections
    const { count } = await supabase
      .from('connection_request')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'accepted')
      .or(`sender_profile_id.eq.${profile.id},receiver_profile_id.eq.${profile.id}`);

    acceptedConnectionsCount = (count || 0) + 14;
  }

  return (
    <DashboardClient
      profile={profile}
      initialRequests={initialRequests}
      initialConnectionsCount={acceptedConnectionsCount}
    />
  );
}
