import React from 'react';
import PropTypes from 'prop-types';

import styles from './Headings.module.scss';

import { formatClassNames } from '../utils/misc';

const Headings = ({ size, className, children }) => {
  const Tag = `h${size}`;

  return <Tag className={formatClassNames(className, styles)}>{children}</Tag>;
};

Headings.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]).isRequired,
};

Headings.defaultProps = {
  size: '1',
  className: 'h1',
};

export default Headings;
