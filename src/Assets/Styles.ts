import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  borderRadius: {
    circle: '50px',
    medium: '8px',
    large: '15px',
  },
  color: {
    background: {
      enable: '#1F3757',
      disable: 'rbga(0,0,0,0.5)',
    },
    grey: '#848C9E',
    darkGrey: '#565468v',
    white: '#F3F3F3',
    purpleBlue: '#2A45C2',
    darkBlue: '#3B4262',
    black: '#ffffff',
    button: {
      playAgain: {
        hover: '#DB2E4D',
        normal: '#3B4262',
      },
      option: {
        hover: 'rbga(255,255,255,0.05)',
        inner: {
          shadow: '#BABFD4',
          primary: 'linear-gradient(#F3F3F3, #DADADA);',
        },
        outer: {
          red: {
            shadow: '#9D1634',
            primary: '#DB2E4D',
          },
          yellow: {
            shadow: '#C76C1B',
            primary: '#EB9F0E',
          },
          blue: {
            shadow: '#2A45C2',
            primary: '#4664F4',
          },
        },
      },
    },
  },
}
