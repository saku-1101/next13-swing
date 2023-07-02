import type { Meta, StoryObj } from '@storybook/react';

import Icons from '.';

const meta: Meta<typeof Icons> = {
  title: 'Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const DefaultIcons: Story = {
  args: {
    selectedAnimal: 'I want to have cats',
  },
};
