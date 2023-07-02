// import classnames from 'classnames';
import { Div } from './styles';
import SearchBar from '../../molecules/SearchBar/index';
import Sorter from '../../atoms/Sorter/index';
import TaskList from '../../molecules/TaskList/TaskList';
import FinishedTaskList from '../../molecules/FinishedTaskList';
import Icons from '../../atoms/Icons/index';

export default function PageToBe() {
  // TODO: get selected animal from global
  const animal = 'I want to have a cat!';
  return (
    <Div>
      <div className='w-1/3'>
        <Icons selectedAnimal={animal} />
        <FinishedTaskList loading={false} />
      </div>
      <div className='w-2/3 flex flex-col'>
        <div className='flex md:flex-row flex-col'>
          <SearchBar />
          <Sorter />
        </div>
        <hr className='border-3 border-neutral-300 m-10 ' />
        <div>
          <TaskList loading={false} />
        </div>
      </div>
    </Div>
  );
}
