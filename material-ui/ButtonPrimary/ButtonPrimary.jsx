import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import createStyles from './ButtonPrimary.styles';

const ButtonPrimary = (props) => {
  const classes = createStyles(props);

  const {
    isLoading,
    buttonText,
    children,
    link,
    lowercase,
    className,
    asLink,
    ...rest
  } = props;
  const content = buttonText || children;

  return (
    <>
      {asLink ? (
        <Button
          component={Link}
          classes={{ root: `${classes.button} ${className}` }}
          variant='contained'
          to={link}
          {...rest}
        >
          {isLoading ? (
            <CircularProgress size={25} className={classes.spinner} />
          ) : (
            <span style={{ whiteSpace: 'nowrap' }}>{content}</span>
          )}
        </Button>
      ) : (
        <Button
          classes={{ root: `${classes.button} ${className}` }}
          variant='contained'
          href={link}
          {...rest}
        >
          {isLoading ? (
            <CircularProgress size={25} className={classes.spinner} />
          ) : (
            <span style={{ whiteSpace: 'nowrap' }}>{content}</span>
          )}
        </Button>
      )}
    </>
  );
};

ButtonPrimary.propTypes = {
  isLoading: PropTypes.bool,
  buttonText: PropTypes.string,
  children: PropTypes.string,
  link: PropTypes.string,
  lowercase: PropTypes.bool
};

export default ButtonPrimary;
