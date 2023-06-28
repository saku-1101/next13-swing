import Task, { TypeOfTask } from '@/components/atoms/Task/Task';
import { ReactNode } from 'react';

interface Props {
  loading: boolean;
  tasks: Array<TypeOfTask>;
  events: {
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
  };
}
export default function TaskList({ loading, tasks, events }: Props) {
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

  if (loading === true) {
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
            <div className='title-message'>You have no tasks</div>
            <div className='subtitle-message'>Sit back and relax</div>
          </div>
        </div>
      </>
    );
  }

  const orderedTasks: Array<TypeOfTask> = [
    ...tasks.filter((t) => {
      return t.state === 'TASK_PINNED';
    }),
    ...tasks.filter((t) => {
      return t.state !== 'TASK_PINNED';
    }),
  ];

  return (
    <>
      <div className='list-items'>
        {orderedTasks.map((task, index) => {
          return <Task key={index} task={task} {...events} />;
        })}
      </div>
    </>
  );
}
