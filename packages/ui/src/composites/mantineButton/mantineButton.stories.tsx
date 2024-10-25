import { Button } from '@mantine/core'
import { type Meta, type StoryObj } from '@storybook/react'
import { IconChevronRight, IconLoader2, IconMail } from '@tabler/icons-react'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'MantineButton',
    variant: 'filled',
  },
  argTypes: {
    variant: {
      options: [
        'filled',
        'light',
        'outline',
        'transparent',
        'white',
        'subtle',
        'default',
        'gradient',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'dark',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
      ],
      control: { type: 'select' },
    },
    radius: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'light',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
}

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Button',
  },
}

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Button',
  },
}

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    gradient: { from: 'blue', to: 'cyan', deg: 90 },
    children: 'Button',
  },
}

export const WithIcon: Story = {
  args: {
    leftSection: <IconMail size={14} />,
    children: 'Login with Email',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'outline',
    p: 'xs',
    children: <IconChevronRight size={14} />,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Processing',
  },
}

export const CustomLoader: Story = {
  args: {
    loading: true,
    loaderProps: {
      children: <IconLoader2 size={14} className='animate-spin' />,
    },
    children: 'Processing',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Can't click me",
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
}
