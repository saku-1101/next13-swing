'use client';
import { Provider } from 'react-redux';
import './globals.css';
import './index.css';
import { Inter } from 'next/font/google';
import { store } from '@/redux/rootStore';
import { useState, useEffect } from 'react';
import Login from './login/pages';
import { supabase } from '../../supabase';
import { Session } from '@supabase/supabase-js';
import Home from './home/page';

const inter = Inter({ subsets: ['latin'] });

console.log(store.getState());

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    // async () => {
    //   const { data } = await supabase.auth.getSession();
    //   setSession(data.session);
    // };
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setSession(session);
    });
    // return () => {
    //   authListener.unsubscribe();
    // };
  }, []);

  return (
    <html lang='en'>
      <Provider store={store}>
        <body className={inter.className}>{session ? <Home /> : <Login />}</body>
      </Provider>
    </html>
  );
}
