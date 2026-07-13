'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

interface StartupEvent {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity?: string;
  isUpcoming: boolean;
}

const mockEvents: StartupEvent[] = [
  {
    id: '1',
    title: 'Dhaka Founders Mixer #1',
    type: 'Networking / Meetup',
    date: 'July 28, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'Lakeshore Hotel, Banani, Dhaka',
    description: 'An informal gathering of tech founders, indie builders, and startup investors in Dhaka. Share what you are building, get feedback, and find potential co-founders.',
    capacity: '80 seats',
    isUpcoming: true,
  },
  {
    id: '2',
    title: 'SaaS Builders Hackathon',
    type: 'Hackathon / Build Session',
    date: 'August 15, 2026',
    time: '9:00 AM - 9:00 PM',
    location: 'Gulshan 2 (Co-working Space), Dhaka',
    description: 'A 12-hour sprint focused on building MVP versions of SaaS products. Mentorship available on-site, with pitch evaluations and prizes for top projects.',
    capacity: '40 developers',
    isUpcoming: true,
  },
  {
    id: '3',
    title: 'Ecosystem Roundtable: Scaling to Series A',
    type: 'Panel / Q&A',
    date: 'June 10, 2026',
    time: '4:00 PM - 6:00 PM',
    location: 'Online via Zoom',
    description: 'Panel discussion featuring prominent Bangladeshi VC representatives and scale-up founders discussing metrics required for Series A inside Bangladesh.',
    isUpcoming: false,
  },
  {
    id: '4',
    title: 'Clerk + Supabase Integration Workshop',
    type: 'Technical Workshop',
    date: 'May 24, 2026',
    time: '7:00 PM - 9:00 PM',
    location: 'EMK Center, Gulshan, Dhaka',
    description: 'Hands-on technical workshop detailing authorization configuration, row-level security (RLS), and database trigger sync workflows.',
    isUpcoming: false,
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredEvents = mockEvents.filter((event) =>
    activeTab === 'upcoming' ? event.isUpcoming : !event.isUpcoming
  );

  const handleRegister = (id: string, title: string) => {
    if (registeredIds.includes(id)) return;
    setRegisteredIds([...registeredIds, id]);
    setToastMessage(`Success! Registered interest for ${title}`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="relative min-h-screen bg-brand-light bg-grid-pattern py-16 px-4 sm:px-6 lg:px-8">
      {/* Radial ambient glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-brand-dark text-white border border-brand-primary/20 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in font-sans text-sm">
          <Sparkles className="h-5 w-5 text-brand-primary animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative max-w-5xl mx-auto space-y-12 animate-fade-in z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-wider font-sans">
            Community Events
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">
            Connect & <span className="gradient-text">Collaborate</span>
          </h1>
          <p className="text-brand-muted text-lg font-sans">
            Join meetups, panels, workshops, and networking events designed to strengthen connections within Bangladesh's startup landscape.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center">
          <div className="bg-white/70 backdrop-blur-md p-1.5 rounded-2xl border border-brand-border/40 inline-flex">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'upcoming'
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10'
                  : 'text-brand-muted hover:text-brand-dark hover:bg-brand-light'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'past'
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10'
                  : 'text-brand-muted hover:text-brand-dark hover:bg-brand-light'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events list */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="glassmorphism-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full bg-white/70 border border-brand-border/40"
              >
                <div className="space-y-4">
                  {/* Type Badge & Capacity */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wide px-2.5 py-1 rounded-lg bg-brand-primary/10">
                      {event.type}
                    </span>
                    {event.capacity && (
                      <span className="text-xs text-brand-muted font-sans font-medium bg-brand-light px-2 py-1 rounded-md">
                        {event.capacity}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-brand-dark leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed font-sans">
                      {event.description}
                    </p>
                  </div>

                  {/* Date, Time, Location */}
                  <div className="pt-4 space-y-2.5 border-t border-brand-border/30 text-xs font-sans text-brand-dark/85 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-brand-primary shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* RSVP / Action Button (Only for upcoming events) */}
                {event.isUpcoming && (
                  <div className="pt-6 mt-6 border-t border-brand-border/30">
                    <button
                      onClick={() => handleRegister(event.id, event.title)}
                      disabled={registeredIds.includes(event.id)}
                      className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                        registeredIds.includes(event.id)
                          ? 'bg-emerald-500 text-white shadow-emerald-500/10 cursor-default'
                          : 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/10 hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                    >
                      {registeredIds.includes(event.id) ? (
                        'Registered Interest ✓'
                      ) : (
                        <>
                          Register Interest
                          <ArrowUpRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/50 border border-brand-border/30 rounded-3xl">
            <p className="text-brand-muted font-sans text-base">No events in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
