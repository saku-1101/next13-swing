import { updateTaskState } from '@/redux/slices';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { supabase } from '../../../../supabase';

export type TypeOfTask = { id: string; title: string | null; state: string | null; user_id: string | null };

interface Props {
  task: TypeOfTask;
}

export default function Task({ task: { id, title, state } }: Props) {
  const dispatch = useAppDispatch();

  const pinTask = async (id: string) => {
    // We're dispatching the Pinned event back to our store
    if (state !== 'TASK_PINNED') {
      await supabase.from('tasks').update({ state: 'TASK_PINNED' }).eq('id', id).select();
      dispatch(updateTaskState({ id: id, newTaskState: 'TASK_PINNED' }));
    } else {
      const { data, error } = await supabase.from('tasks').update({ state: 'TASK_INBOX' }).eq('id', id).select();
      dispatch(updateTaskState({ id: id, newTaskState: 'TASK_INBOX' }));
    }
  };
  const archiveTask = async (id: string) => {
    // We're dispatching the Archive event back to our store
    await supabase.from('tasks').update({ state: 'TASK_ARCHIVED' }).eq('id', id).select();
    dispatch(updateTaskState({ id: id, newTaskState: 'TASK_ARCHIVED' }));
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
        <span className='checkbox-custom' onClick={() => archiveTask(id)} />
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

      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={() => pinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}
