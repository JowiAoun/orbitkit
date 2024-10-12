import { type Meta, type StoryObj } from '@storybook/react'

import { Stack, StackCell } from '.'

const preferences = []

const meta: Meta<typeof Stack> = {
  component: Stack,
  render: (args) => (
    <Stack {...args}>
      <StackCell>Item 1</StackCell>
      <StackCell>Item 2</StackCell>
      <StackCell>Item 3</StackCell>
    </Stack>
  ),
}

export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {}
