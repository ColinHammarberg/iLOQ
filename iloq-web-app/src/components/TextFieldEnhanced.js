/* eslint react/jsx-props-no-spreading: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _debounce from 'lodash/debounce';
import { TextField } from '@mui/material';

class TextFieldEnhanced extends PureComponent {
  constructor(props) {
    super(props);
    let type = props.type || 'text';
    if (type === 'email' || type === 'domain') {
      type = 'text';
    }
    this.state = {
      isLoading: false,
      type,
      value: props.defaultValue,
      error: null,
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.inputRef = React.createRef();
  }

  reset() {
    this.setState({ isLoading: true }, () => this.setState({ isLoading: false }));
  }

  onKeyDown(event) {
    if (this.props.onPressEnter && event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.props.onPressEnter();
    }
  }

  onChangeText(event) {
    event.persist();
    const value = event.target.value;
    this.setState({ value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.props.name, value);
      }
    });
  }

  render() {
    const { error, isLoading } = this.state;
    if (isLoading) {
      return null;
    }
    const {
      // not passing down these props
      // ref,
      validate,
      onChange,
      value,
      maxLength,
      minLength,
      onPressEnter,
      ...props
    } = this.props;

    if (onPressEnter !== null) {
      props.onKeyDown = this.onKeyDown;
    }
    delete props.focusOnError;
    return (
      <TextField
        inputRef={this.inputRef}
        error={!!error}
        helperText={error}
        {...props}
        onChange={this.onChangeText}
        autoComplete="off"
      />
    );
  }
}

TextFieldEnhanced.propTypes = {
  // ref: PropTypes.instanceOf(Object),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  validate: PropTypes.func,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  focusOnError: PropTypes.bool,
};

TextFieldEnhanced.defaultProps = {
  defaultValue: null,
  variant: 'outlined',
  size: 'small',
  fullWidth: true,
  required: false,
  validate: null,
  maxLength: null,
  minLength: null,
  onPressEnter: null,
  focusOnError: false,
};

export default TextFieldEnhanced;