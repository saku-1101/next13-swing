// import classnames from 'classnames';
import { Button } from '@/components/atoms/Button/Button';
import { Div, Bar } from './styles';

export default function SearchBar() {
  return (
    <Div>
      <Bar>
        <input type='text' placeholder='Search...' />
        <Button label='🔎' />
      </Bar>
    </Div>
  );
}
