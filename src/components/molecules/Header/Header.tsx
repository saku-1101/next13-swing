import React from 'react';

import { Button } from '../../atoms/Button/Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export const Header = ({ user, onLogout }: HeaderProps) => (
  <header>
    <div className='storybook-header'>
      <div>
        📒
        <h1>Tasky</h1>
      </div>
      <div>
        <>
          <span className='welcome'>
            Welcome, <b>{user.name}</b>!
          </span>
          <Button size='small' onClick={onLogout} label='Log out' />
        </>
      </div>
    </div>
  </header>
);
