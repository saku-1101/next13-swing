// import classnames from 'classnames';
import { Div } from './styles';
import SearchBar from '../../molecules/SearchBar/index';
import TaskList from '../../molecules/TaskList/TaskList';
import FinishedTaskList from '../../molecules/FinishedTaskList';
import Icons from '../../atoms/Icons/index';
import { useAppSelector } from '@/redux/hooks/hooks';
import { petSelectors, userSelectors, taskSelectors } from '@/redux/slices';
import { Header } from '@/components/molecules/Header/Header';
import CreateNewTask from '@/components/atoms/CreateNewTask';
import { useProfile } from '@/hooks/user/useProfile';
import { useTasks } from '@/hooks/tasks/useTasks';
import { Session } from '@supabase/supabase-js';
import { User } from '@/redux/slices/userSlice';

export default function PageToBe({ session }: { session: Session | null }) {
  // get globals to pass to each components
  const pet = useAppSelector(petSelectors.selectPet);
  const gUser: User = useAppSelector(userSelectors.selectUser);
  const tasksToShow = useAppSelector(taskSelectors.selectTasksToShow);
  const archivedTasks = useAppSelector(taskSelectors.selectArchivedTasks);

  // get user in the current session
  const user = session?.user;

  // get userdata from db and register it to global
  const isLoadingProfile = useProfile(user!);

  // get tasks from db and register it to global
  const isLoadingTasks = useTasks(user!);

  return (
    <>
      <Header loading={isLoadingProfile} user={gUser} />
      <div className='flex md:flex-row flex-col px-10'>
        <div className='md:w-1/3 md:mr-20 md:flex-auto md:order-1 order-2'>
          {/* rsc */}
          <Icons selectedAnimal={pet} />
          {/* rsc */}
          <FinishedTaskList loading={isLoadingTasks} tasks={archivedTasks} />
        </div>

        <div className='md:w-2/3 my-0 mx-0 md:flex-auto md:order-2 order-1'>
          <SearchBar />
          <hr className='border-3 border-neutral-300 m-10 ' />
          {/* rsc */}
          <div>
            <TaskList loading={isLoadingTasks} tasks={tasksToShow} />
            <CreateNewTask />
          </div>
        </div>
      </div>
    </>
  );
}
