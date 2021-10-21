import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: (props) => (props.gutterBottom ? '2rem' : 0)
  },
  rootInput: {
    margin: 0,
    backgroundColor: (props) =>
      props.disabled ? theme.colors.background.bg10 : theme.colors.white,
    borderRadius: '0px',
    borderColor: theme.colors.background.bg45,
    borderWidth: '1px',
    borderStyle: 'solid',
    // padding: '.65rem 1rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    border: (props) =>
      `1px solid ${
        props.error
          ? theme.colors.alerts.error
          : props.disabled
          ? theme.colors.background.bg10
          : theme.colors.background.bg45
      }`,
    '& ::placeholder': {
      color: 'black'
    },
    fontSize: '1.6rem',
    boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)'
  },
  input: {
    backgroundColor: 'transparent',
    flex: 1,
    fontSize: '1.6rem',
    padding: '1rem 1rem',
    border: 'none',
    '&::placeholder': {
      color: theme.colors.text.secondary
    },
    height: '100%',
    width: '100%',
    boxSizing: 'border-box'
  },
  iconButton: {
    margin: '0rem .5rem',
    padding: '.5rem .5rem'
  },
  label: {
    color: (props) =>
      props.error ? theme.colors.alerts.error : theme.colors.text.primary,
    marginBottom: '0.5rem',
    fontSize: '1.4rem',
    width: '100%'
  },
  helperTextError: {
    margin: '1rem 0 2rem 0rem'
  },
  helperText: {
    margin: '1rem 0 0rem 1rem',
    fontSize: '1.1rem',
    color: theme.colors.text.primary
  }
}));

export default createStyles;
