import { FC, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './app/App'
import { StoreProvider } from './app/providers/store-provider'
import { GlobalStyle } from './app/styles/global/Global.styled'
import { darkTheme, lightTheme, ThemeT } from './app/styles/theme/Theme'

export const Root: FC = () => {
  const [theme, setTheme] = useState<ThemeT>(lightTheme)
  const toggleTheme = () => setTheme(prev => (prev === lightTheme ? darkTheme : lightTheme))
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App toggleTheme={toggleTheme} />
      </ThemeProvider>
    </StoreProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Root />)
