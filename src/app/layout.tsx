import { Provider } from 'react-redux';
import './globals.css';
import './index.css';
import { Inter } from 'next/font/google';
import { store } from '@/redux/rootStore';
import Login from './login/pages';
import Home from './home/page';
import { useSession } from '@/hooks/auth/useSession';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../supabase/types';
import SetProvider from '@/utils/SetProvider';
import { Session } from '@supabase/auth-helpers-nextjs';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  let session: Session | null = null;
  const data = await supabase.auth.getSession();
  session = data.data.session;
  supabase.auth.onAuthStateChange((event, sess) => {
    session = sess;
  });
  return (
    <SetProvider>
      <html lang='en'>
        <body className={inter.className}>{session ? <Home session={session} /> : <Login />}</body>
      </html>
    </SetProvider>
  );
}
