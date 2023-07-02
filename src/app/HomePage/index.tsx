// import classnames from 'classnames';
import PageToBe from '@/components/templates/PageToBe';
import { Div } from './styles';

export type HomeProps = {
  name: string;
};

export default function Home({ name }: HomeProps) {
  return <PageToBe />;
}
