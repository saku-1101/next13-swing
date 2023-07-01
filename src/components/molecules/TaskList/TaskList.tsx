import Task, { TypeOfTask } from '@/components/atoms/Task/Task';
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
  // We're retrieving our state from the store
  const tasks = useAppSelector(selectOrderdInBoxTasks);

  const dispatch = useAppDispatch();

  const pinTask = (value: string) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
  };
  const archiveTask = (value: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
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
            <div className='title-message'>You have no tasks</div>
            <div className='subtitle-message'>Sit back and relax</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='list-items'>
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              task={task}
              onPinTask={(task) => pinTask(task)}
              onArchiveTask={(task) => archiveTask(task)}
            />
          );
        })}
      </div>
    </>
  );
}
