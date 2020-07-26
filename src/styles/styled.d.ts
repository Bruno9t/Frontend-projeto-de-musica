import 'styled-components'

declare module 'styled-components' {
  export interface ThemeShape {
    name: string

    colors: {
      primary: string
      secondary: string

      text: string
      'background-hover': string
      filter: string
    }

    menu: {
      primary: string
      secondary: string
      alter: string
    }
  }
  export interface DefaultTheme extends ThemeShape {
    changeTheme(): void
  }
}
