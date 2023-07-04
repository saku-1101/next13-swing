import React from 'react';

import { Button } from '../../atoms/Button/Button';
import './header.css';
import { User } from '@/redux/types';
import { supabase } from '../../../../supabase';

interface HeaderProps {
  user: User;
}

export const Header = ({ user }: HeaderProps) => {
  const handleLogout = () => {
    supabase.auth.signOut();
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
            <span className='welcome'>
              Welcome, <b>{user.username}</b>!
            </span>
            <Button size='small' onClick={handleLogout} label='Log out' />
          </>
        </div>
      </div>
    </header>
  );
};
