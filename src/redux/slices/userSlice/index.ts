import { TypeOfTask } from '@/components/atoms/Task/Task';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/rootStore';

export type User = {
  id: string;
  username: string;
  email: string;
};

const UserSlice = createSlice({
  name: 'user',
  initialState: { id: '0', username: 'Jane Doe', email: 'example@mail.com' },
  reducers: {
    updateUserState: (state, action: PayloadAction<User>) => (state = action.payload),
  },
});

// setter : Sliceではこのようなsetterで自動的にactionを作成してくれる
export const { updateUserState } = UserSlice.actions;

export const selectUser = (state: RootState) => state.user;
// export const selectOrderdInBoxTasks = (state: RootState) =>
//   [
//     ...state.task.tasks.filter((task) => task.state === 'TASK_PINNED'),
//     ...state.task.tasks.filter((task) => task.state !== 'TASK_PINNED'),
//   ].filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
// export const selectTaskBoxData = (state: RootState) => state.task;

export const UserReducer = UserSlice.reducer;
