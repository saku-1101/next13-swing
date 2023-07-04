'use client';

import { TypeOfTask } from '../Task/Task';
import { updateTaskState } from '@/redux/slices';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { supabase } from '../../../../supabase';

interface Props {
  task: TypeOfTask;
}

export default function FinishedTask({ task: { id, title, state } }: Props) {
  const dispatch = useAppDispatch();

  const onRecoverTask = async (id: string) => {
    // We're dispatching the Archive event back to our store
    await supabase.from('tasks').update({ state: 'TASK_INBOX' }).eq('id', id).select();
    dispatch(updateTaskState({ id: id, newTaskState: 'TASK_INBOX' }));
  };
  return (
    <div className={`list-item ${state}`}>
      <label htmlFor='checked' aria-label={`archiveTask-${id}`} className='checkbox'>
        <input
          type='checkbox'
          disabled={true}
          name='checked'
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span className='checkbox-custom' onClick={() => onRecoverTask(id)} />
      </label>

      <label htmlFor='title' aria-label={title!} className='title'>
        <input
          type='text'
          value={title!}
          readOnly={true}
          name='title'
          placeholder='Input title'
          className='text-black'
        />
      </label>
    </div>
  );
}
