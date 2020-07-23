import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string

    colors: {
      primary: string
      secondary: string

      text: string
      'background-hover': string
      filter: string
    }

    changeTheme(): void

    menu: {
      primary: string
      secondary: string
      alter: string
    }
  }
}
