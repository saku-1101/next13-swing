// import classnames from 'classnames';
import { Div } from './styles';
import SearchBar from '../../molecules/SearchBar/index';
import Sorter from '../../atoms/Sorter/index';
import TaskList from '../../molecules/TaskList/TaskList';
import FinishedTaskList from '../../molecules/FinishedTaskList';
import Icons from '../../atoms/Icons/index';
import { useAppSelector } from '@/redux/hooks/hooks';
import { selectPet } from '@/redux/slices/petSlice';
import { selectUser } from '@/redux/slices/userSlice';
import { Header } from '@/components/molecules/Header/Header';
import { selectTasksToShow } from '@/redux/slices/taskSlice';
import CreateNewTask from '@/components/atoms/CreateNewTask';
import { useProfile } from '@/hooks/user/useProfile';
import { useTasks } from '@/hooks/tasks/useTasks';
import { supabase } from '../../../../supabase';
import { Session } from '@supabase/supabase-js';
import { User } from '@/redux/slices/userSlice';

export default function PageToBe({ session }: { session: Session | null }) {
  // TODO: get selected animal from global
  const { pet } = useAppSelector(selectPet);
  const gUser: User = useAppSelector(selectUser);

  const user = session?.user;

  // get userdata from db and register it to global
  const isLoadingProfile = useProfile(user!);

  // get tasks from db and register it to global
  const isLoadingTasks = useTasks(user!);

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  const tasksToShow = useAppSelector(selectTasksToShow);

  return (
    <>
      {isLoadingProfile ? 'loading' : <Header user={gUser} onLogout={handleLogout} />}
      <Div>
        <div className='w-1/3 mr-20'>
          {/* rsc */}
          <Icons selectedAnimal={pet} />
          {/* rsc */}
          {isLoadingTasks ? 'loading...' : <FinishedTaskList loading={false} />}
        </div>
        <div className='w-2/3 flex flex-col'>
          <div className='flex md:flex-row flex-col'>
            <SearchBar />
            <Sorter />
          </div>
          <hr className='border-3 border-neutral-300 m-10 ' />
          {/* rsc */}
          <div>{isLoadingTasks ? 'loading...' : <TaskList loading={false} tasks={tasksToShow} />}</div>
          <CreateNewTask />
        </div>
      </Div>
    </>
  );
}
