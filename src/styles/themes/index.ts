import { ThemeShape } from 'styled-components'
import light from './light'
import dark from './dark'

interface Shape {
  [key: string]: ThemeShape
}

export default {
  light,
  dark,
} as Shape
