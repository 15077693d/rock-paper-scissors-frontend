import {
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components'
import { OptionId } from '../config/option'

export const GlobalStyle = createGlobalStyle`
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
        body{
font-family: 'Barlow Semi Condensed', sans-serif;
          margin:0 ;
        padding:0
        }
`
export const mobileValue = 500
export const defaultTheme: DefaultTheme = {
  device: {
    mobile: `(max-width: ${mobileValue}px)`,
  },
  font: {
    button:
      '600 16px Barlow Semi Condensed, sans-serif;',
  },
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
      enable:
        'radial-gradient(circle, rgba(31,55,87,1) 0%, rgba(19,21,55,1) 100%);',
      disable: 'rgba(0,0,0,0.5)',
    },
    grey: '#848C9E',
    darkGrey: '#565468',
    white: '#F3F3F3',
    purpleBlue: '#2A45C2',
    darkBlue: '#3B4262',
    black: '#ffffff',
    red: '#DB2E4D',
    button: {
      option: {
        hover: 'rgba(255,255,255,0.05)',
        inner: {
          shadow: '#BABFD4',
          primary:
            'linear-gradient(#F3F3F3, #DADADA);',
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
