// import classnames from 'classnames';
import { Button } from '@/components/atoms/Button/Button';
import { Div, Bar } from './styles';
import { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { regexQuery } from '@/redux/slices';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(regexQuery(query));
  };
  return (
    <Div>
      <Bar>
        <input type='text' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button label='🔎' onClick={handleSearch} />
      </Bar>
    </Div>
  );
}
