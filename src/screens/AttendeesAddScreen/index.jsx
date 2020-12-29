import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import FormAddNewAttendees from 'components/form-add-attendees';

import styles from "./styles.scss";

const AttendeesAddScreen = ({ title }) => {
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
        <FormAddNewAttendees />
      </MainContent>
    </>
  )
};

export default AttendeesAddScreen;
