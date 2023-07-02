import type { Meta, StoryObj } from '@storybook/react';

import Sorter from '.';

const meta: Meta<typeof Sorter> = {
  title: 'Sorter',
  component: Sorter,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sorter>;

export const DefaultSorter: Story = {
  args: {},
};
