'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/rootStore';
import { ReactNode } from 'react';

export default function SetProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
