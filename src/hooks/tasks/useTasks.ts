import { useState, useCallback, useEffect } from 'react';
import { supabase } from '../../../supabase';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { User } from '@supabase/auth-helpers-nextjs';
import { initTasks } from '@/redux/slices';

export const useTasks = (user: User) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const getTasks = useCallback(async () => {
    try {
      console.log(user?.id);

      let { data, error, status } = await supabase
        .from('tasks')
        .select(`id, title, state, user_id`)
        .eq('user_id', user?.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log('task is dispatched');
        dispatch(initTasks(data));
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [user, dispatch]);

  useEffect(() => {
    getTasks();
  }, [user, getTasks]);

  return loading;
};
