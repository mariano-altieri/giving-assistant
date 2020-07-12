import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.module.scss';

const Button = ({ type, variant, onClick, className, children, disabled }) => {
  const btnClass = cx(styles.button, styles[variant], className);

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={btnClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  variant: 'primary',
  onClick: () => {},
  disabled: false,
};

export default Button;
