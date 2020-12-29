import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import styles from './styles.scss';

const TableSpeakers = ({ data }) => {

  return <div className={styles.wrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thead}>ID</th>
          <th className={styles.thead}>NAME SURNAME</th>
          <th className={styles.thead}>TITLE</th>
          <th className={styles.thead}>COMPANY</th>
          <th className={styles.thead}></th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            <tr key={shortId.generate()}>
              <td className={styles.td}>{item.speakerId}</td>
              <td className={styles.td}>{`${item.firstName} ${item.lastName}`}</td>
              <td className={styles.td}>{item.title}</td>
              <td className={styles.td}>{item.company}</td>
              <td className={styles.td}><a href={`/speakers/edit/${item.speakerId}`}>EDIT</a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>;
};

TableSpeakers.propTypes = {
  data: PropTypes.array.isRequired
};

export default TableSpeakers;
