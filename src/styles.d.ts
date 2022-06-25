import 'styled-components'
import { OptionId } from './config/option'

declare module 'styled-components' {
  export interface DefaultTheme {
    img: {
      option: {
        [OptionId.PAPER]: { width: string; height: string; rotate: string }
        [OptionId.ROCK]: { width: string; height: string; rotate: string }
        [OptionId.SCISSORS]: { width: string; height: string; rotate: string }
      }
    }
    borderRadius: {
      circle: string
      medium: string
      large: string
    }
    color: {
      background: {
        enable: string
        disable: string
      }
      grey: string
      darkGrey: string
      white: string
      purpleBlue: string
      darkBlue: string
      black: string
      button: {
        playAgain: {
          hover: string
          normal: string
        }
        option: {
          hover: string
          inner: {
            shadow: string
            primary: string
          }
          outer: {
            [OptionId.ROCK]: { shadow: string; primary: string }
            [OptionId.SCISSORS]: { shadow: string; primary: string }
            [OptionId.PAPER]: { shadow: string; primary: string }
          }
        }
      }
    }
  }
}
