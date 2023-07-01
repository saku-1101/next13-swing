import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '.';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof LoginForm> = {
  title: 'Example/LoginForm',
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 🌼 Simulate interactions with the component
    await userEvent.type(canvas.getByPlaceholderText('Enter your username'), 'Sakura A');

    await userEvent.type(canvas.getByPlaceholderText('Enter your password'), 'sakuranopassword');

    await userEvent.hover(canvas.getByRole('button'));
    await userEvent.unhover(canvas.getByRole('button'));
    await userEvent.click(canvas.getByRole('button'));

    // 📝 assert if DOM structure is correct
    await expect(canvas.getByText('🎉Looks good!')).toBeInTheDocument();
  },
};
