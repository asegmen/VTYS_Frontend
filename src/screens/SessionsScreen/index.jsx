import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import TableSessions from 'components/table-sessions';

import styles from "./styles.scss";

const SessionsScreen = ({ title, pageResponse }) => {

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
          <a href="/sessions/new" className={styles.addNewButton}>ADD NEW SESSION</a>

        </div>
        {
          pageResponse && (
            <TableSessions data={pageResponse} />
          )
        }
      </MainContent>
    </>
  )
};

export default SessionsScreen;
