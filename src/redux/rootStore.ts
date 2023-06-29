import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TaskReducer } from './slices/index';

const combinedReducer = combineReducers({
  task: TaskReducer,
});
export const store = configureStore({
  reducer: combinedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
