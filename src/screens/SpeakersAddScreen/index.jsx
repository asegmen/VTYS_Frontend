import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import FormAddNewSpeaker from 'components/form-add-speaker';

import styles from "./styles.scss";

const SpeakersAddScreen = ({ title }) => {
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
        <FormAddNewSpeaker />
      </MainContent>
    </>
  )
};

export default SpeakersAddScreen;
