// コンポーネントのテンプレート
export const createComponentTemplate = (name: string): string => `// import classnames from 'classnames';
  import React from 'react';
  
  import { Div } from './styles';
  
  export type ${name}Props = {
    name: string;
  };
  
  export const ${name}: React.FC<${name}Props> = ({ name }: ${name}Props) => (
    <Div>
      <p>Enjoy {name} component life!!</p>
    </Div>
  );
  `;

// storybookのテンプレート
export const createStorybookTemplate = (
  path: string,
  name: string,
): string => `import { storiesOf } from '@storybook/react';
  import React from 'react';
  
  import { ${name} } from '.';
  
  storiesOf('${path}/${name}', module).add('default', () => <${name} name="name" />);
  `;

// styled-componentのテンプレート
export const createStyleTemplate = (): string => `import styled from 'styled-components';
  
  // import { ThemeProps } from 'styles/Theme';
  
  export const Div = styled.div\`\`;
  `;
