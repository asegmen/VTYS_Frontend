import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import FormAddNewEmployee from 'components/form-add-employee';

import styles from "./styles.scss";

const EmployeeAddScreen = ({ title }) => {
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
        <FormAddNewEmployee />
      </MainContent>
    </>
  )
};

export default EmployeeAddScreen;
