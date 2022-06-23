import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
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
            red: { shadow: string; primary: string }
            yellow: { shadow: string; primary: string }
            blue: { shadow: string; primary: string }
          }
        }
      }
    }
  }
}
