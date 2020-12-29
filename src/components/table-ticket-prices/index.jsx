import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import styles from './styles.scss';

const TableTicketPrices = ({ data }) => {

  return <div className={styles.wrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thead}>ID</th>
          <th className={styles.thead}>PRICE</th>
          <th className={styles.thead}>TYPE</th>
          <th className={styles.thead}>DESCRIPTION</th>
          {/* <th className={styles.thead}></th> */}
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            <tr key={shortId.generate()}>
              <td className={styles.td}>{item.ticketPriceId}</td>
              <td className={styles.td}>{`${item.basePrice} TL`}</td>
              <td className={styles.td}>{item.ticketType.ticketTypeName}</td>
              <td className={styles.td}>{item.ticketType.description}</td>
              {/* <td className={styles.td}><a href={""}>DETAIL</a></td> */}
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>;
};

TableTicketPrices.propTypes = {
  data: PropTypes.array.isRequired
};

export default TableTicketPrices;
