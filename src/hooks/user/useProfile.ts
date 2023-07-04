import { useState, useCallback, useEffect, SetStateAction } from 'react';
import { supabase } from '../../../supabase';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { updateUserState } from '@/redux/slices';
import { User } from '@supabase/auth-helpers-nextjs';

export const useProfile = (user: User) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const getProfile = useCallback(async () => {
    try {
      console.log(user?.id);

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`id, username, email`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log('user is dispatched');
        dispatch(updateUserState({ id: data.id!, username: data.username!, email: data.email! }));
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [user, dispatch]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  return loading;
};
