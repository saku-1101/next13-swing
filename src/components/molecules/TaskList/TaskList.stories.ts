import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';
import { Default as taskStoryData } from '@/components/atoms/Task/Task.stories';
import { TypeOfTask } from '@/components/atoms/Task/Task';

const meta: Meta<typeof TaskList> = {
  title: 'Example/TaskList',
  component: TaskList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof TaskList>;

const tasks: Array<TypeOfTask> = [
  { ...taskStoryData.args?.task, id: '1', title: 'Task1' },
  { ...taskStoryData.args?.task, id: '2', title: 'Task2' },
  { ...taskStoryData.args?.task, id: '3', title: 'Task3' },
  { ...taskStoryData.args?.task, id: '4', title: 'Task4' },
  { ...taskStoryData.args?.task, id: '5', title: 'Task5' },
  { ...taskStoryData.args?.task, id: '6', title: 'Task6' },
  { ...taskStoryData.args?.task, id: '7', title: 'Task7' },
];

export const Default: Story = {
  args: {
    loading: false,
    tasks: tasks,
  },
};

export const TasksWithPinned: Story = {
  args: {
    loading: false,
    tasks: [
      ...tasks.slice(0, 3),
      ...tasks.slice(3, 7).map((el, index) => {
        return { ...el, state: 'TASK_PINNED' };
      }),
    ],
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
  },
};
