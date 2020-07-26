import React from "react"
import { ThemeProvider } from "styled-components"

import useLocalStorageState from "./hooks/useLocalStorageState"

import Home from "./pages/Home"
import GlobalStyle from "./styles/globals"

import themes from "./styles/themes"

const App = () => {
  const [theme, setTheme] = useLocalStorageState<string>("theme", "dark")

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const themeConfig = {
    ...themes[theme],
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
