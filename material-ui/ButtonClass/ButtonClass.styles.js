import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles(theme => ({
  button: {
    boxShadow: 'none',
    backgroundColor: theme.colors.white,
    borderRadius: '3',
    color: theme.colors.text.primary,
    fontSize: '13px',
    transition: 'all 150ms ease-in-out',
    padding: '.7rem 1.1rem',
    boxSizing: 'border-box',
    border: `1px solid ${theme.colors.text.primary}`,
    textTransform: 'none',
    width: props => props.width,
    margin: '0 .5rem',
    marginBottom: '1rem',    

    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.colors.white,
      border: `2px solid ${theme.colors.blueCompany}`,
      padding: 'calc(.7rem - 1px) calc(1.1rem - 1px)',
      color: theme.colors.blueCompany,
    }
  },
  selected: {
    boxShadow: 'none',
      backgroundColor: theme.colors.white,
      border: `2px solid ${theme.colors.blueCompany}`,
      padding: 'calc(.7rem - 1px) calc(1.1rem - 1px)',
      color: theme.colors.blueCompany,
  },
  spinner: {
    color: theme.colors.white
  }
}));

export default createStyles;
