import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TaskReducer, PetReducer, UserReducer } from './slices';

const combinedReducer = combineReducers({
  task: TaskReducer,
  pet: PetReducer,
  user: UserReducer,
});
export const store = configureStore({
  reducer: combinedReducer,
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
