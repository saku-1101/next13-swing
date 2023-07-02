
import type { Meta, StoryObj } from '@storybook/react';

import PageToBe from '.';

const meta: Meta<typeof PageToBe> = {
  title: 'PageToBe',
  component: PageToBe,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof PageToBe>;

export const DefaultPageToBe: Story = {
  args: {
  },
};
  