# Dhaka Founders

This repository represents an educational project developed as an assignment for the **Full-Stack Web Apps with Vibe Coding** course by **Datavvy Academy**.

*   **Live Deployment**: [dhakafounders0.netlify.app](https://dhakafounders0.netlify.app/)
*   **Original Production Platform**: [dhakafounders.com](https://dhakafounders.com/)

Dhaka Founders is a collaborative directory connecting startup founders, developers, and investors across Bangladesh's tech ecosystem. The platform enables startups to showcase their metrics, list active job openings, post milestones, share pitch videos, and request direct connections.

## Features

- **Startup Directory**: Search, filter, and discover active tech companies in Bangladesh.
- **Founder Dashboard**: Manage company profiles, post active recruitment needs, share pitch deck videos, toggle actively raising status, and list milestones.
- **Connection Management**: Send connection requests to other startups or investors, with live dashboard accept/decline actions.
- **Ecosystem Content**: Explore curated startup guides, blogs, and community mixers/meetups.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Database**: Supabase
- **Authentication**: Clerk Auth
- **Styling**: Tailwind CSS v4 & custom glassmorphism utilities
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- A Clerk Account (for authentication)
- A Supabase Project (for database storage)

### Environment Setup

Create a `.env.local` file in the root directory and configure the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### Database Schema Setup

Execute the following queries inside your Supabase project's SQL Editor to set up the database tables:

#### 1. Company Profile Table
```sql
DROP TABLE IF EXISTS public.company_profile CASCADE;

CREATE TABLE public.company_profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_auth_key TEXT UNIQUE NOT NULL,
  company_name TEXT NOT NULL,
  website_url TEXT,
  category TEXT,
  description TEXT,
  founder_name TEXT NOT NULL,
  founder_email TEXT,
  linkedin_url TEXT,
  hq_location TEXT,
  team_size TEXT,
  funding_stage TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.company_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" 
  ON public.company_profile 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public insert access" 
  ON public.company_profile 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public update access" 
  ON public.company_profile 
  FOR UPDATE 
  USING (true)
  WITH CHECK (true);
```

#### 2. Connection Requests Table
```sql
create table public.connection_request (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  sender_profile_id uuid references public.company_profile(id) on delete cascade not null,
  receiver_profile_id uuid references public.company_profile(id) on delete cascade not null,
  message text,
  status text default 'pending' check (status in ('pending', 'accepted', 'declined')) not null,
  
  constraint unique_active_connection unique (sender_profile_id, receiver_profile_id)
);

alter table public.connection_request disable row level security;
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adibbhossain/dhakafounders.git
   cd dhakafounders
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/adibbhossain/dhakafounders/blob/main/LICENSE) file for details.
