// my-theme.ts
import { DefaultTheme, IFontSize } from 'styled-components';
import { IH1 } from '../components/interfaces'

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};


const myH1: IH1 = {
  color: 'blue',
  fontSize: '100px'
}

export { myTheme, myH1 };