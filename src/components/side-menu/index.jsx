import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const SideMenu = () => {

  return <aside className={styles.wrapper}>
    <div className={styles.logo}>
      AHMET SEĞMEN
    </div>
    <ul className={styles.list}>
      <li><a href="/attendees">ATTENDEES</a></li>
      <li><a href="/employees">EMPLOYEES</a></li>
      <li><a href="/sessions">SESSIONS</a></li>
      <li><a href="/speakers">SPEAKERS</a></li>
      <li><a href="/ticket-prices">TICKET PRICES</a></li>
    </ul>
  </aside>;
};

SideMenu.propTypes = {};

export default SideMenu;
