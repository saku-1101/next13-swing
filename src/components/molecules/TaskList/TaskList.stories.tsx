import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof TaskList> = {
  title: 'Example/TaskList',
  component: TaskList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  excludeStories: /.*MockedState$/,
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    loading: false,
  },
};

export const TasksWithPinned: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas
      .getAllByRole('button')
      .slice(0, 3)
      .map(async (el) => {
        await userEvent.click(el);
      });
  },
  args: {
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
