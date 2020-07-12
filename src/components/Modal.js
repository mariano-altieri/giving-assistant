import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

import Headings from './Headings';
import CouponCode from './CouponCode';
import Subscribe from './Subscribe';
import Button from './Button';

const Modal = ({ onClose }) => {
  return (
    <>
      <div className={styles.modal}>
        {/* Close btn */}
        <Button className={styles.closeBtn} variant="default" onClick={onClose}>
          X
        </Button>
        {/* Left Col */}
        <div className={styles.column}>
          <div className={styles.columnInner}>
            <img src="/logo.png" alt="Laura's Pizzas and Pasta" className={styles.logo} />
            <Headings size="2" className={`h2 ${styles.mainTitle}`}>
              Monday Delivery Orders
            </Headings>
            <div className={styles.promoAmount}>
              10% <span>off</span>
            </div>
            <p className={styles.description}>
              Coupon must be mentioned at time of placing order. Limit 1 coupon per order/customer.
            </p>
            <CouponCode />
          </div>
        </div>
        {/* Rigth Col */}
        <div className={`${styles.column} ${styles.redColumn}`}>
          <div className={styles.columnInner}>
            <img
              src="//cdn2.iconfinder.com/data/icons/font-awesome/1792/envelope-512.png"
              alt="Newsletter"
              className={styles.icon}
            />
            <Headings size="3" className={`h3 ${styles.secondaryTitle}`}>
              Subscribe Now!
            </Headings>
            <p className={styles.benefits}>
              Please enter your email to never miss our weekly promos!
            </p>
            <Subscribe />
          </div>
        </div>
      </div>

      <div
        className={styles.modalBackdrop}
        onClick={onClose}
        tabIndex="0"
        role="button"
        aria-label="Modal Backdrop"
        aria-hidden="true"
      />
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
