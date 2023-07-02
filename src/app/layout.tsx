'use client';
import { Provider } from 'react-redux';
import './globals.css';
import './index.css';
import { Inter } from 'next/font/google';
import { store } from '@/redux/rootStore';
import { Header } from '../components/molecules/Header/Header';

const inter = Inter({ subsets: ['latin'] });

console.log(store.getState());

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang='en'>
        <Header user={{ name: 'Jane Doe' }} />
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
