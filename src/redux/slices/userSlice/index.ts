import { TypeOfTask } from '@/redux/types';
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

export const userSelectors = {
  selectUser: (state: RootState) => state.user,
};

export const UserReducer = UserSlice.reducer;
