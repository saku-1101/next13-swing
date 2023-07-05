'use client';
import PageToBe from '@/components/templates/PageToBe';
import { Session } from '@supabase/supabase-js';

// @ts-ignore
export default function HomePage({ session }: { session: Session | null }) {
  return <PageToBe session={session} />;
}
