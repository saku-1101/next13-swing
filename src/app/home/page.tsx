'use client';
import PageToBe from '@/components/templates/PageToBe';
import { Session } from '@supabase/supabase-js';

export default function Home({ session }: { session: Session | null }) {
  return <PageToBe session={session} />;
}
