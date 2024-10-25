import { type Meta, type StoryObj } from '@storybook/react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '.'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,

  render: (args) => (
    <SidebarProvider {...args}>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <main>
            <SidebarTrigger />
            Cool!
          </main>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  ),
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Single: Story = {}
