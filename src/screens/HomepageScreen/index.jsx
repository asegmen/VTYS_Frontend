import React from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';

import styles from "./styles.scss";

const HomepageScreen = () => {
  return (
    <>
      <SideMenu />
      <MainContent>
        {/* <FormSample /> */}
      </MainContent>
    </>
  )
};

export default HomepageScreen;
