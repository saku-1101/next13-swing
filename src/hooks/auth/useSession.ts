import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase';
import { Session } from '@supabase/supabase-js';

export const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const fetchSessionWhenItsRendered = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    fetchSessionWhenItsRendered();

    // set a new session when SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED, USER_UPDATED, PASSWORD_RECOVERY happened
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  return session;
};
