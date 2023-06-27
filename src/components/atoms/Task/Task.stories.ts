import type { Meta, StoryObj } from '@storybook/react';
import Task, { TypeOfTask } from './Task';

// Storybook にコンポーネントを認識させるには、以下の内容を含む default export を記述します:
// component -- コンポーネント自体
// title -- Storybook のサイドバーにあるコンポーネントを参照する方法
// ストーリーの全体設定
const meta: Meta<typeof Task> = {
  title: 'Task',
  component: Task,
};

export default meta;
type Story = StoryObj<typeof Task>;

const Def: TypeOfTask = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
};

// テスト用の状態ごとにストーリーを生成する関数をエクスポート
export const Default: Story = {
  args: {
    task: Def,
  },
};

export const Pinned: Story = {
  args: {
    task: { ...Def, state: 'TASK_PINNED' },
  },
};

export const Archived: Story = {
  args: {
    task: { ...Def, state: 'TASK_ARCHIVED' },
  },
};
