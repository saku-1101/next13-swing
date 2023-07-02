import { TypeOfTask } from '@/components/atoms/Task/Task';
import { $CombinedState, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/rootStore';

export interface TypeOfTaskBoxData {
  tasks: Array<TypeOfTask>;
  status: string;
  error: null;
}

const defaultTasks: Array<TypeOfTask> = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export const TaskBoxData: TypeOfTaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

const TasksSlice = createSlice({
  name: 'task',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action: PayloadAction<{ id: string; newTaskState: string }>) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
    deleteAllTasks: (state) => {
      state.tasks = [];
    },
    updateInitialState: (state, action: PayloadAction<TypeOfTaskBoxData>) => {
      state = action.payload;
    },
  },
});

// setter : Sliceではこのようなsetterで自動的にactionを作成してくれる
export const { updateTaskState, deleteAllTasks } = TasksSlice.actions;

export const selectTask = (state: RootState, id: string) => state.task.tasks.find((task: TypeOfTask) => task.id === id);
export const selectOrderdInBoxTasks = (state: RootState) =>
  [
    ...state.task.tasks.filter((task) => task.state === 'TASK_PINNED'),
    ...state.task.tasks.filter((task) => task.state !== 'TASK_PINNED'),
  ].filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
export const selectArchivedTasks = (state: RootState) => [
  ...state.task.tasks.filter((t) => t.state === 'TASK_ARCHIVED'),
];
export const selectTaskBoxData = (state: RootState) => state.task;

export const TaskReducer = TasksSlice.reducer;
