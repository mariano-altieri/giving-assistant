import cx from 'classnames';

/* eslint-disable no-console */
export const copyToClipboard = async (text) => {
  let response = null;

  if (navigator) {
    response = await navigator.clipboard.writeText(text);
  }

  return response;
};

export const formatClassNames = (className, styles) => {
  const classes = className.split(' ');
  const cxConfig = {};

  classes.forEach((c) => {
    if (styles.c) {
      cxConfig[styles[c]] = true;
    } else {
      cxConfig[c] = true;
    }
  });

  // if (classes.length > 1) {
  //   classes.forEach((c) => {
  //     if (style.c) {
  //       cxConfig[style[c]] = true;
  //     } else {
  //       cxConfig[c] = true;
  //     }
  //   });
  // } else if (style[className]) {
  //   cxConfig[style[className]] = true;
  // } else {
  //   cxConfig[className] = true;
  // }

  return cx(cxConfig);
};
