
import type { Meta, StoryObj } from '@storybook/react';

import CreateNewTask from '.';

const meta: Meta<typeof CreateNewTask> = {
  title: 'CreateNewTask',
  component: CreateNewTask,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof CreateNewTask>;

export const DefaultCreateNewTask: Story = {
  args: {
  },
};
  