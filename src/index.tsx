import { FC, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { GlobalStyle } from './styles/Global.styled'
import { darkTheme, lightTheme, ThemeT } from './styles/Theme'

export const Root: FC = () => {
  const [theme, setTheme] = useState<ThemeT>(lightTheme)
  const toggleTheme = () => setTheme(prev => (prev === lightTheme ? darkTheme : lightTheme))
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Root />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
