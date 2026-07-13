'use server';

import { auth } from '@clerk/nextjs/server';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function saveProfile(formData: {
  company_name: string;
  website_url: string;
  category: string;
  description: string;
  founder_name: string;
  founder_email: string;
  linkedin_url: string;
  hq_location: string;
  team_size: string;
  funding_stage: string;
}) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Check if a profile already exists for this clerk_auth_key
  const { data: existingProfile, error: fetchError } = await supabase
    .from('company_profile')
    .select('id')
    .eq('clerk_auth_key', userId)
    .maybeSingle();

  if (fetchError) {
    console.error('Error fetching existing profile:', fetchError);
    return { success: false, error: fetchError.message };
  }

  const profileData = {
    clerk_auth_key: userId,
    company_name: formData.company_name,
    website_url: formData.website_url || null,
    category: formData.category || null,
    description: formData.description || null,
    founder_name: formData.founder_name,
    founder_email: formData.founder_email || null,
    linkedin_url: formData.linkedin_url || null,
    hq_location: formData.hq_location || null,
    team_size: formData.team_size || null,
    funding_stage: formData.funding_stage || null,
  };

  let result;
  if (existingProfile) {
    // Update existing profile
    result = await supabase
      .from('company_profile')
      .update(profileData)
      .eq('clerk_auth_key', userId);
  } else {
    // Insert new profile
    result = await supabase
      .from('company_profile')
      .insert([profileData]);
  }

  if (result.error) {
    console.error('Error saving profile:', result.error);
    return { success: false, error: result.error.message };
  }

  revalidatePath('/dashboard');
  revalidatePath('/dashboard/profile');
  return { success: true };
}
