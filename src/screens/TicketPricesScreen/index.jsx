import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import TableTicketPrices from 'components/table-ticket-prices';

import styles from "./styles.scss";

const TicketPricesScreen = ({ title, pageResponse }) => {

  return (
    <>
      <SideMenu />
      <MainContent>
        <div className={styles.headingWrap}>
          {
            title && (
              <h1 className={styles.title}>{title}</h1>
            )
          }

        </div>
        {
          pageResponse && (
            <TableTicketPrices data={pageResponse} />
          )
        }
      </MainContent>
    </>
  )
};

export default TicketPricesScreen;
