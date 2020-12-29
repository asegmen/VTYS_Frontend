import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import FormAddNewSession from 'components/form-add-session';

import styles from "./styles.scss";

const SessionsAddScreen = ({ title }) => {
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
        <FormAddNewSession />
      </MainContent>
    </>
  )
};

export default SessionsAddScreen;
