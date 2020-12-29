import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import TableAttendees from 'components/table-attendees';

import styles from "./styles.scss";

const DefaultScreen = ({ title, pageResponse }) => {

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
          <a href="/attendees/new" className={styles.addNewButton}>ADD NEW ATTENDEE</a>

        </div>
        {
          pageResponse && (
            <TableAttendees data={pageResponse} />
          )
        }
      </MainContent>
    </>
  )
};

export default DefaultScreen;
