import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import FormAddNewTicketPrice from 'components/form-add-ticket-price';

import styles from "./styles.scss";

const TicketPricesAddScreen = ({ title }) => {
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
        <FormAddNewTicketPrice />
      </MainContent>
    </>
  )
};

export default TicketPricesAddScreen;
