import type { Preview } from '@storybook/react'

import type {} from '@storybook/types'

import { useEffect } from 'react'

import type { ReactRenderer } from '@storybook/react'

import { MantineProvider, useMantineColorScheme } from '@mantine/core'
import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addons } from '@storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'

// Import Mantine styles
import '@mantine/core/styles.css'

import { theme as mantineTheme } from '../src/theme'
// Import your themes
import { theme } from './theme'

const channel = addons.getChannel()

const customViewports = {
  '720p': {
    name: '720p',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  '1080p': {
    name: '1080p',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  '2k': {
    name: '2K',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
  '4k': {
    name: '4K',
    styles: {
      width: '3840px',
      height: '2160px',
    },
  },
  '21/9': {
    name: '21/9',
    styles: {
      width: '2560px',
      height: '1080px',
    },
  },
}

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme()

  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light')

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
  }, [])

  return <>{children}</>
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    docs: {
      theme,
    },
  },
  decorators: [
    // Existing theme decorator
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
    // Mantine decorators
    (Story: any) => (
      <ColorSchemeWrapper>
        <Story />
      </ColorSchemeWrapper>
    ),
    (Story: any) => (
      <MantineProvider theme={mantineTheme}>
        <Story />
      </MantineProvider>
    ),
  ],
}

export default preview
