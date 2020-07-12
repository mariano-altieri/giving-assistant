import React, { useReducer } from 'react';
import cx from 'classnames';

import Button from './Button';
import { subscribe } from '../api/subscribe';
import { validateEmail } from '../utils/validation';
import ACTIONS from '../constants/actions';

import styles from './Form.module.scss';
import btnStyles from './Button.module.scss';

const TEXTS = {
  retriesError: 'You have alreay tried 3 times. Please try again later.',
  subscriptionError: 'Subscription failed. Please try again with a different email.',
  invalidEmail: 'Please enter a valid email.',
  subscribed: 'Congratulations! You are now Subscribed.',
};

const initialState = {
  errors: '',
  submitting: false,
  email: '',
  success: false,
  retries: 3,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.changeEmail:
      return { ...state, email: action.data, errors: false };

    case ACTIONS.noRetries:
      return { ...state, errors: TEXTS.retriesError, email: '' };

    case ACTIONS.submitting:
      return { ...state, submitting: true };

    case ACTIONS.APIresponse: {
      const { success } = action.data;
      const { email, retries } = state;

      return {
        ...state,
        submitting: false,
        email: success ? email : '',
        errors: success ? '' : TEXTS.subscriptionError,
        success,
        retries: success ? retries : retries - 1,
      };
    }

    case ACTIONS.invalidEmail:
      return { ...state, errors: TEXTS.invalidEmail };

    default:
      return state;
  }
};

const Subscribe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { errors, submitting, email, retries, success } = state;

  const containerCSS = cx(styles.formContainer, styles.subscribeContainer, {
    [styles.hasErrors]: errors !== '',
  });
  const btnCSS = cx(styles.subscribeBtn, btnStyles.noAnimation);

  const handleChange = (e) => dispatch({ type: ACTIONS.changeEmail, data: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (retries === 0) {
      dispatch({ type: ACTIONS.noRetries });
    } else if (validateEmail(email)) {
      dispatch({ type: ACTIONS.submitting });

      const response = await subscribe();

      dispatch({ type: ACTIONS.APIresponse, data: response });
    } else {
      dispatch({ type: ACTIONS.invalidEmail });
    }
  };

  return (
    <div className={containerCSS}>
      {errors && <div className={styles.errorContainer}>{errors}</div>}
      {success ? (
        <div className={styles.successContainer}>{TEXTS.subscribed}</div>
      ) : (
        <form className={styles.subscribeForm} onSubmit={handleSubmit} autoComplete="off">
          <input
            // Opting for a manual email validation
            type="text"
            name="email"
            aria-label="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={email}
            disabled={submitting}
          />
          <Button type="submit" className={btnCSS} variant="secondary" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Subscribe;
