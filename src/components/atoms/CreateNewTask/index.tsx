// import classnames from 'classnames';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { addTaskToDb } from '@/redux/slices/taskSlice';
import { selectUser } from '@/redux/slices/userSlice';

export default function CreateNewTask() {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleAddTask = () => {
    dispatch(addTaskToDb(title, user.id));
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
