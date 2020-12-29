import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import styles from './styles.scss';

const TableAttendees = ({ data }) => {

  return <div className={styles.wrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thead}>ID</th>
          <th className={styles.thead}>NAME SURNAME</th>
          <th className={styles.thead}>MAIL ADDRESS</th>
          <th className={styles.thead}>DEPARTMENT</th>
          <th className={styles.thead}></th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            <tr key={shortId.generate()}>
              <td className={styles.td}>{item.employeeId}</td>
              <td className={styles.td}>{`${item.fistName} ${item.lastName}`}</td>
              <td className={styles.td}><a href={`mailto:${item.mailAddress}`}>{item.mailAddress}</a></td>
              <td className={styles.td}>{item.department}</td>
              <td className={styles.td}><a href={`/employees/edit/${item.employeeId}`}>EDIT</a></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>;
};

TableAttendees.propTypes = {
  data: PropTypes.array.isRequired
};

export default TableAttendees;
