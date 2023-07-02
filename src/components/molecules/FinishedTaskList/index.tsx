import FinishedTask, { TypeOfTask } from '@/components/atoms/FinishedTask';
import { ReactNode } from 'react';
import { updateTaskState } from '@/redux/slices';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { selectOrderdInBoxTasks } from '@/redux/slices/taskSlice/task';

interface Props {
  loading: boolean;
  tasks?: Array<TypeOfTask>;
  events?: {
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
  };
}
// { loading, tasks, events }: Props
export default function TaskList({ loading }: Props) {
  // TODO: get archived tasks from global
  const tasks = useAppSelector(selectOrderdInBoxTasks);

  const dispatch = useAppDispatch();

  const onRecoverTask = (value: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_INBOX' }));
  };
  const loadingRow: ReactNode = (
    <>
      <div className='loading-item'>
        <span className='glow-checkbox' />
        <span className='glow-text'>
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </>
  );

  if (loading) {
    return (
      <>
        <div className='list-items' data-testid='loading' key={'loading'}>
          {loadingRow}
          {loadingRow}
          {loadingRow}
          {loadingRow}
          {loadingRow}
          {loadingRow}
        </div>
      </>
    );
  }

  if (tasks.length === 0) {
    return (
      <>
        <div className='list-items' key={'empty'} data-testid='empty'>
          <div className='wrapper-message'>
            <span className='icon-check' />
            <div className='title-message'>You have no completed tasks</div>
            <div className='subtitle-message'>Keep going 🔥</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='list-items'>
        {tasks.map((task, index) => {
          return <FinishedTask key={index} task={task} onRecoverTask={(task) => onRecoverTask(task)} />;
        })}
      </div>
    </>
  );
}
