import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from '.';

const meta: Meta<typeof SearchBar> = {
  title: 'SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const DefaultSearchBar: Story = {
  args: {},
};
