import { TypeOfTask } from '@/components/atoms/Task/Task';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/rootStore';

export type User = {
  name: string;
  uuid: string;
  password: string;
};

const UserSlice = createSlice({
  name: 'user',
  initialState: { name: ' ', uuid: ' ', password: ' ' } as User,
  reducers: {
    updateUserState: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});

// setter : Sliceではこのようなsetterで自動的にactionを作成してくれる
export const { updateUserState } = UserSlice.actions;

// export const selectTask = (state: RootState, id: string) => state.task.tasks.find((task: TypeOfTask) => task.id === id);
// export const selectOrderdInBoxTasks = (state: RootState) =>
//   [
//     ...state.task.tasks.filter((task) => task.state === 'TASK_PINNED'),
//     ...state.task.tasks.filter((task) => task.state !== 'TASK_PINNED'),
//   ].filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
// export const selectTaskBoxData = (state: RootState) => state.task;

export const UserReducer = UserSlice.reducer;
