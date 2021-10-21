import { FormHelperText, InputLabel } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import theme from 'App.theme.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';

import createStyles from './Input.styles';

export default function Input(props) {
  const classes = createStyles(props);

  const {
    endIcon,
    customClasses,
    placeholder,
    label,
    error,
    disabled,
    onChange,
    onBlur,
    value,
    helperText,
    endIconProps,
    select,
    selectOptions,
    name,
    id,
    ...rest
  } = props;

  const rootCustomClasses = customClasses && customClasses.root;
  const inputCustomClasses = customClasses && customClasses.input;
  const labelCustomClasses = customClasses && customClasses.label;

  return (
    <>
      <div className={classes.root + ' ' + rootCustomClasses}>
        {label && (
          <InputLabel
            className={classes.label + ' ' + labelCustomClasses}
            htmlFor='my-input'
          >
            {label}
          </InputLabel>
        )}

        {select ? (
          <Select
            id={id}
            className={classes.rootInput + ' ' + inputCustomClasses}
            options={selectOptions}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            styles={{
              control: (provided) => ({
                ...provided,
                border: 'none',
                width: '100%'
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: error
                  ? theme.colors.alerts.error
                  : disabled
                  ? theme.colors.background.bg10
                  : theme.colors.background.bg45
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                color: error
                  ? theme.colors.alerts.error
                  : disabled
                  ? theme.colors.background.bg10
                  : theme.colors.background.bg45
              })
            }}
            {...rest}
          />
        ) : (
          <Paper
            elevation={0}
            className={classes.rootInput + ' ' + inputCustomClasses}
          >
            <InputMask
              id={id}
              className={classes.input}
              disabled={props.disabled}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              name={name}
              {...rest}
            />
            {endIcon && (
              <IconButton
                onClick={endIcon.onClick}
                className={clsx(classes.iconButton, endIcon.className)}
                aria-label={placeholder}
                {...endIconProps}
              >
                {endIcon.icon}
              </IconButton>
            )}
          </Paper>
        )}
        {error && (
          <FormHelperText className={classes.helperTextError} error={true}>
            {error}
          </FormHelperText>
        )}
        {!error && helperText && (
          <FormHelperText className={classes.helperText}>
            {helperText}
          </FormHelperText>
        )}
      </div>
    </>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  endIconProps: PropTypes.object,
  endIcon: PropTypes.shape({
    icon: PropTypes.element,
    className: PropTypes.string
  })
};
