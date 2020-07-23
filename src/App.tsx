import React, { useState, createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import Home from './pages/Home'
import GlobalStyle from './styles/globals'

// themes
import dark from './styles/themes/dark'
import light from './styles/themes/light'

const App = () => {
  const [theme, setTheme] = useState(dark)

  const changeTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark)
  }

  const themeConfig = {
    ...theme,
    changeTheme,
  }

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
