import type { Meta, StoryObj } from '@storybook/react';

import FinishedTask from '.';

const meta: Meta<typeof FinishedTask> = {
  title: 'FinishedTask',
  component: FinishedTask,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FinishedTask>;

export const DefaultFinishedTask: Story = {
  args: {
    task: {
      id: '1',
      title: 'Finished Task',
      state: 'TASK_ARCHIVED',
      user_id: '0',
    },
  },
};
