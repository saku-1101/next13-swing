import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';
import { TypeOfTask } from '@/components/atoms/Task/Task';
import { TypeOfTaskBoxData } from '@/redux/slices/taskSlice/task';
import { Provider } from 'react-redux';
import { Default as DefValOfTaskStories } from '@/components/atoms/Task/Task.stories';
import { PayloadAction, configureStore, createSlice, createStore } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { store } from '@/redux/rootStore';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof TaskList> = {
  title: 'Example/TaskList',
  component: TaskList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  excludeStories: /.*MockedState$/,
  // storybookでグローバル状態のテストをしたい時
  // storyをProviderで包む
};

export default meta;

type Story = StoryObj<typeof TaskList>;

// 🥹WANTED TODO: storyごとにstoreのinitialStateを変更して異なるユースケースでのUIを確認したい
// 🥹WANTED TODO: モックのstoreを作成し，propsとしてそれぞれのユースケースのinitialStateを渡すことで実現しようとした
// 🥹ISSUE: ts with redux-toolではaction dispatchがstoreに密接に紐づいたhooksによって行われている
// 🥹TRY: 別のstoreを作成した
// 🥹→それがhooksに紐づけられないのでモックstoreが役に立たない．．．
// 🥹TRY: 別のstateを登録しようとした
// 🥹→storyの状態分(default, pinned, empty)だけstateを作成してreducerを紐付けてstoreに登録せねばならず
// 🥹→これからコンポーネント・ユースケースが増えていった場合は現実的ではないし
// 🥹→実際にコンポーネントで使用しているのはユースケースのstateではなくて本物のstateなので，
// 🥹→コンポーネントの内容をテストのために書き換えねばならず，よくない
const MockStore: React.FC<{ initialState: TypeOfTaskBoxData; children: ReactNode }> = (props) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: 'taskbox',
          initialState: props.initialState,
          reducers: {
            updateTaskState: (
              state: TypeOfTaskBoxData,
              action: PayloadAction<{ id: string; newTaskState: string }>,
            ) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task: TypeOfTask) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
            deleteAllTasks: (state) => {
              state.tasks = [];
            },
          },
        }).reducer,
      },
    })}
  >
    {props.children}
  </Provider>
);

const defaultTasks: Array<TypeOfTask> = [
  { ...DefValOfTaskStories.args?.task, id: '1', title: 'Task 1' },
  { ...DefValOfTaskStories.args?.task, id: '2', title: 'Task 2' },
  { ...DefValOfTaskStories.args?.task, id: '3', title: 'Task 3' },
  { ...DefValOfTaskStories.args?.task, id: '4', title: 'Task 4' },
  { ...DefValOfTaskStories.args?.task, id: '5', title: 'Task 5' },
  { ...DefValOfTaskStories.args?.task, id: '6', title: 'Task 6' },
];

// 1: mockでstoreのstateを作成する．（この場合のstateはtaskbox）
const MockedState: TypeOfTaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

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
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Empty: Story = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};
