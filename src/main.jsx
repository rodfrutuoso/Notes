import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import theme from './styles/theme'
import GlobalStyle from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
