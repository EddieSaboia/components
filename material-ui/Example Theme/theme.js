import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '',
      contrastText: ''
    },
    secondary: {
    },
    text: {
    }
  },
  spacing: 8,
  colors: {
    white: '',
    blue: '',
    // ...
  },
  typography: {
    htmlFontSize: 12,
    fontSize: 12,
    fontFamily: '', // set font exmp : arail, roboto ...
  }
});

export default theme;
