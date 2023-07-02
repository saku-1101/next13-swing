// コンポーネントのテンプレート
export const createComponentTemplate = (name: string): string => `// import classnames from 'classnames';
import { Div } from './styles';

export type ${name}Props = {
  name: string;
};

export default function ${name}({ name }: ${name}Props){
  return (
    <Div>
      <p>Enjoy {name} component life!!</p>
    </Div>
  )
};
  `;

// storybookのテンプレート
export const createStorybookTemplate = (path: string, name: string): string => `
import type { Meta, StoryObj } from '@storybook/react';

import ${name} from '.';

const meta: Meta<typeof ${name}> = {
  title: '${name}',
  component: ${name},
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default${name}: Story = {
  args: {
  },
};
  `;

// styled-componentのテンプレート
export const createStyleTemplate = (): string => `
import styled from 'styled-components';

// import { ThemeProps } from 'styles/Theme';

export const Div = styled.div\`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
\`;
// export const StyledComponent = styled.<tagName>\`write your css\`;
  `;
