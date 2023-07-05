import React from 'react';

import { Button } from '../../atoms/Button/Button';
import './header.css';
import { User } from '@/redux/types';
import { supabase } from '../../../../supabase';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  loading: boolean;
  user: User;
}

export const Header = ({ loading, user }: HeaderProps) => {
  const router = useRouter();
  const handleLogout = () => {
    supabase.auth.signOut();
    router.refresh();
  };
  return (
    <header>
      <div className='storybook-header'>
        <div>
          📒
          <h1>Tasky</h1>
        </div>
        <div>
          <>
            {loading ? <span className='welcome'>
              Loading. Hold on...
            </span> : <span className='welcome'>
              Welcome, <b>{user.username}</b>!
            </span>}
            <Button size='small' onClick={handleLogout} label='Log out' />
          </>
        </div>
      </div>
    </header>
  );
};
