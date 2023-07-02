import type { Meta, StoryObj } from '@storybook/react';

import Home from '.';
import { Header } from '@/components/molecules/Header/Header';

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Header user={{ name: 'Jane Doe' }} />
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const DefaultHome: Story = {
  args: {},
};
