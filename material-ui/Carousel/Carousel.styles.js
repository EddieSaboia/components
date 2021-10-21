import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles((theme) => ({
  carousel: {
    position: 'relative ',
    width: '100%',
    backgroundColor: (props) => props.backgroundColor,
    padding: '0rem 0'
  },
  container: {
    width: '100%',
    overflow: 'hidden'
  },
  tray: {
    display: 'flex',
    margin: '2rem 0'
  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.1%',
    paddingLeft: '10px',
    width: '400px',
    '@media (max-width: 1240px)': {
      width: '100%'
    },
  },
  buttonsContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0%',
    left: '0%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainerInner: {
    width: '108%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1240px)': {
      width: '110%'
    },
    '@media (max-width: 700px)': {
      width: '120%'
    },
    '@media (min-width: 1900px)': {
      width: '105%'
    }
  },
  button: {
    width: '3rem',
    height: '10rem',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: theme.colors.textMedium,
    color: theme.colors.textMedium,
    padding: '0',
    transition: 'all 150ms ease-in-out',

    '&:disabled': {
      opacity: '.3',
      cursor: 'unset'
    },

    '&:not(:disabled):hover': {
      backgroundColor: theme.colors.blueCompany,
      color: theme.colors.white
    },
    '@media (max-width: 600px)': {
      width: '2.5rem',
      height: '8rem'
    }
  },

  showAllBtn: {
    float: 'right'
  },
  dotIndicator: {
    width: '1rem',
    height: '1rem',
    margin: '0 0.5rem',
    borderRadius: '30px',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.background.bg45}`
  },
  dotIndicatorsContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  active: {
    backgroundColor: theme.colors.blueEducation
  }
}));

export default createStyles;
