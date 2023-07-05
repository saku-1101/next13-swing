import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../supabase/types';
import SetProvider from '@/utils/SetProvider';
import { Session } from '@supabase/auth-helpers-nextjs';
import HomePage from './home/page';
import { revalidatePath } from 'next/cache';
import Login from './login/pages';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  let session: Session | null = null;
  const data = await supabase.auth.getSession();
  session = data.data.session;

  return session ? <HomePage session={session} /> : <Login />;
}
