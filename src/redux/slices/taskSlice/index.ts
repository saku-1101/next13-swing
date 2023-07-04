import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '@/redux/rootStore';
import { supabase } from '../../../../supabase';

export type TypeOfTask = { id: string; title: string | null; state: string | null; user_id: string | null };

export interface TypeOfTaskBoxData {
  tasks: Array<TypeOfTask>;
  status: string;
  error: null;
  query: RegExp;
}

const defaultTasks: Array<TypeOfTask> = [];

export const TaskBoxData: TypeOfTaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
  query: '' as any as RegExp,
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
    addTask: (state, action: PayloadAction<TypeOfTask>) => {
      console.log(action.payload);
      state.tasks.push(action.payload);
    },
    deleteAllTasks: (state) => {
      state.tasks = [];
    },
    initTasks: (state, action: PayloadAction<Array<TypeOfTask>>) => {
      state.tasks = action.payload;
    },
    regexQuery: (state, action: PayloadAction<string>) => {
      state.query = new RegExp(action.payload, 'g');
    },
  },
});

// reducer with async
export const addTaskToDb = (title: string, user_id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      // add to db
      const { data, error } = await supabase
        .from('tasks')
        .insert([{ title: title, state: 'TASK_INBOX', user_id: user_id }])
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);
      if (error) throw error;
      const obj: TypeOfTask = { id: data[0].id, title: data[0].title!, state: data[0].state!, user_id: user_id };

      // add to global
      dispatch(addTask(obj));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

// setter : Sliceではこのようなsetterで自動的にactionを作成してくれる
export const { updateTaskState, deleteAllTasks, addTask, initTasks, regexQuery } = TasksSlice.actions;

export const taskSelectors = {
  selectArchivedTasks: (state: RootState) => [...state.task.tasks.filter((t) => t.state === 'TASK_ARCHIVED')],
  selectTasksToShow: (state: RootState): Array<TypeOfTask> =>
    [
      ...state.task.tasks.filter((task) => task.state === 'TASK_PINNED'),
      ...state.task.tasks.filter((task) => task.state !== 'TASK_PINNED'),
    ].filter((t) => (t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED') && t.title!.match(state.task.query)),
};

export const TaskReducer = TasksSlice.reducer;
