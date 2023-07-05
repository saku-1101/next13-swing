import type { Meta, StoryObj } from '@storybook/react';

import Home from './page';
import { Header } from '@/components/molecules/Header/Header';

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Header loading={false} user={{ id: '0', username: 'Jane Doe', email: 'example@mail.com' }} />
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
