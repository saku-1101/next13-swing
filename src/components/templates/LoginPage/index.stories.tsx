
import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from '.';

const meta: Meta<typeof LoginPage> = {
  title: 'LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const DefaultLoginPage: Story = {
  args: {
  },
};
  