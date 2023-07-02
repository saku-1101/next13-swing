// import classnames from 'classnames';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux/slices/taskSlice';

export type CreateNewTaskProps = {
  name: string;
};

export default function CreateNewTask() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleAddTask = () => {
    // dbに登録
    // グローバルにも登録
    dispatch(addTask({ id: '', title: title, state: 'TASK_INBOX' }));
  };
  return (
    <div className={`list-item`}>
      <label htmlFor='title' className='title'>
        <input
          type='text'
          value={title}
          name='title'
          placeholder='Input title'
          className={`title`}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <Button label='Add' onClick={handleAddTask} />
    </div>
  );
}
