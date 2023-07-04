import FinishedTask from '@/components/atoms/FinishedTask';
import { TypeOfTask } from '@/components/atoms/Task/Task';
import { ReactNode } from 'react';

interface Props {
  loading: boolean;
  tasks: Array<TypeOfTask>;
}
// { loading, tasks, events }: Props
export default function TaskList({ loading, tasks }: Props) {
  // TODO: get archived tasks from global

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
            <div className='title-message'>You have no completed tasks</div>
            <div className='subtitle-message'>Keep going 🔥</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <p>Tasks You&apos;ve Done:</p>
      <div className='list-items'>
        {tasks.map((task, index) => {
          return <FinishedTask key={index} task={task} />;
        })}
      </div>
    </>
  );
}
