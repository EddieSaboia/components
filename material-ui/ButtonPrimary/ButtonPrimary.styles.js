import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles(theme => ({
  button: {
    boxShadow: 'none',
    backgroundColor: props =>
      props.variant === 'outlined' ? 'none' : theme.colors.blueCompany,
    borderRadius: '3',
    color: props =>
      props.variant === 'outlined'
        ? theme.colors.blueCompany
        : theme.colors.white,
    borderColor: props =>
      props.variant === 'outlined'
        ? theme.colors.blueCompany
        : theme.colors.white,
    fontSize: '1.6rem',
    lineHeight: '1.8rem',
    transition: 'all 150ms ease-in-out',
    padding: props => props.size === 'small' 
        ? '.1rem 2rem' 
        : '1rem 2rem',
    width: props => props.width,
    textTransform: props => (props.lowercase ? 'none' : 'uppercase'),
    '&:hover': {
      boxShadow: 'none',
      color: theme.colors.white,
      backgroundColor: theme.colors.blueHover
    }
  },
  spinner: {
    color: theme.colors.white
  }
}));

export default createStyles;
