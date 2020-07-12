import React, { useState } from 'react';
import cx from 'classnames';

import styles from './Form.module.scss';
import btnStyles from './Button.module.scss';

import Button from './Button';
import { copyToClipboard } from '../utils/misc';

const CouponCode = () => {
  const defaultLabel = 'Copy Code';
  const [coupon] = useState('ABC123');
  const [label, setLabel] = useState(defaultLabel);
  const containerCSS = cx(styles.formContainer, styles.couponContainer);
  const btnCSS = cx(styles.copyCodeBtn, btnStyles.noAnimation);

  const handleClick = (couponCode) => {
    const req = copyToClipboard(couponCode);

    req &&
      req.then(() => {
        setLabel('Copied!!');
        setTimeout(() => setLabel(defaultLabel), 1500);
      });
  };

  return (
    <div className={containerCSS}>
      <input type="text" disabled value={coupon} />
      <Button className={btnCSS} onClick={handleClick.bind(this, coupon)}>
        {label}
      </Button>
    </div>
  );
};

export default CouponCode;
