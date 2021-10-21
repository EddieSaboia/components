import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';

import createStyles from './ButtonClass.styles';

const ButtonClass = (props) => {
  const classes = createStyles(props);

  const { isLoading, buttonText, children, selected, ...rest } = props;
  const content = buttonText || children;

  return (
    <Button
      className={`${classes.button} ${selected && classes.selected}`}
      variant='contained'
      {...rest}
    >
      {isLoading ? (
        <CircularProgress size={25} className={classes.spinner} />
      ) : (
        content
      )}
    </Button>
  );
};

ButtonClass.propTypes = {
  isLoading: PropTypes.bool,
  buttonText: PropTypes.string,
  children: PropTypes.string,
  link: PropTypes.string,
  lowercase: PropTypes.bool
};

export default ButtonClass;
