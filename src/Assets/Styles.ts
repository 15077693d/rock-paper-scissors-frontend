import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { OptionId } from '../config/option'

export const GlobalStyle = createGlobalStyle`
        body{
          margin:0 ;
        padding:0
        }
`
export const defaultTheme: DefaultTheme = {
  img: {
    option: {
      [OptionId.ROCK]: {
        width: '38%',
        height: '41%',
        rotate: '10',
      },
      [OptionId.SCISSORS]: {
        width: '40%',
        height: '53%',
        rotate: '-45',
      },
      [OptionId.PAPER]: {
        width: '40%',
        height: '47%',
        rotate: '4',
      },
    },
  },
  borderRadius: {
    circle: '50%',
    medium: '8px',
    large: '15px',
  },
  color: {
    background: {
      enable: 'radial-gradient(circle, rgba(31,55,87,1) 0%, rgba(19,21,55,1) 100%);',
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
          [OptionId.ROCK]: {
            shadow: '#9D1634',
            primary: '#DB2E4D',
          },
          [OptionId.SCISSORS]: {
            shadow: '#C76C1B',
            primary: '#EB9F0E',
          },
          [OptionId.PAPER]: {
            shadow: '#2A45C2',
            primary: '#4664F4',
          },
        },
      },
    },
  },
}
