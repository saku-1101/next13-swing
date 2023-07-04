'use client';
import { Provider } from 'react-redux';
import './globals.css';
import './index.css';
import { Inter } from 'next/font/google';
import { store } from '@/redux/rootStore';
import Login from './login/pages';
import Home from './home/page';
import { useSession } from '@/hooks/auth/useSession';

const inter = Inter({ subsets: ['latin'] });

console.log(store.getState());

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const session = useSession();
  return (
    <html lang='en'>
      <Provider store={store}>
        <body className={inter.className}>{session ? <Home session={session} /> : <Login />}</body>
      </Provider>
    </html>
  );
}
