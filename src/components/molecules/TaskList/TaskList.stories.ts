import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';
import { Default as taskStoryData } from '@/components/atoms/Task/Task.stories';
import { TypeOfTask } from '@/components/atoms/Task/Task';
import { TypeOfTaskBoxData } from '@/redux/slices/taskSlice/task';

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

const defaultTasks: Array<TypeOfTask> = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

// storybookでグローバル状態のテストをしたい時
// 1: mockでstoreのstateを作成する．（この場合のstateはtaskbox）
const MockedState: TypeOfTaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

export const Default: Story = {
  args: {
    loading: false,
    tasks: MockedState.tasks,
  },
};

export const TasksWithPinned: Story = {
  args: {
    loading: false,
    tasks: [
      ...MockedState.tasks.slice(0, 3),
      ...MockedState.tasks.slice(3, 7).map((el, index) => {
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
