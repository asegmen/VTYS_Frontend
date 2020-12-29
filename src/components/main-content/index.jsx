import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const MainContent = ({ children }) => {

  return <div className={styles.wrapper}>
    {children}
  </div>;
};

MainContent.propTypes = {};

export default MainContent;
