
import type { Meta, StoryObj } from '@storybook/react';

import FinishedTaskList from '.';

const meta: Meta<typeof FinishedTaskList> = {
  title: 'FinishedTaskList',
  component: FinishedTaskList,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof FinishedTaskList>;

export const DefaultFinishedTaskList: Story = {
  args: {
  },
};
  