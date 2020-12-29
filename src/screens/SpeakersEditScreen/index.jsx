import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import FormEditSpeakers from 'components/form-edit-speakers';

import styles from "./styles.scss";

const SpeakersEditScreen = ({ title, pageResponse, userId }) => {
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
        <FormEditSpeakers datas={pageResponse} userId={userId} />
      </MainContent>
    </>
  )
};

export default SpeakersEditScreen;
