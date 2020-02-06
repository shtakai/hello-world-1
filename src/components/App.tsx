import React, { FC, ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { CommandPaletteProvider } from './commandPalette'
import { Alert } from './commandPalette/commands/Alert'

export const App: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <GlobalStyle />
    <CommandPaletteProvider
      commands={[
        {
          name: 'alert',
          component: <Alert />,
        },
      ]}
    >
      {children}
    </CommandPaletteProvider>
  </>
)

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
  }
  body {
    word-wrap: break-word;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, 'メイリオ', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  input, button, textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
`
