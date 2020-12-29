import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import styles from './styles.scss';

const TableSessions = ({ data }) => {

  return <div className={styles.wrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thead}>ID</th>
          <th className={styles.thead}>SESSION NAME</th>
          <th className={styles.thead}>TIME</th>
          <th className={styles.thead}>SPEAKERS</th>
          <th className={styles.thead}></th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            <tr key={shortId.generate()}>
              <td className={styles.td}>{item.sessionId}</td>
              <td className={styles.td}>{item.sessionName}</td>
              <td className={styles.td}>{`${item.sessionLength}min`}</td>
              <td className={styles.td}>{item.speakers.map((speaker) => (`${speaker.firstName} ${speaker.lastName},`))}</td>
              <td className={styles.td}><a href={`/sessions/detail/${item.sessionId}`}>DETAIL</a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>;
};

TableSessions.propTypes = {
  data: PropTypes.array.isRequired
};

export default TableSessions;
