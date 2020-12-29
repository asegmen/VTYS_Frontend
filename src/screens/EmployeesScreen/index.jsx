import React, { useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import TableEmployees from 'components/table-employees';

import styles from "./styles.scss";

const EmployeesScreen = ({ title, pageResponse }) => {

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
          <a href="/employees/new" className={styles.addNewButton}>ADD NEW EMPLOYEE</a>

        </div>
        {
          pageResponse && (
            <TableEmployees data={pageResponse} />
          )
        }
      </MainContent>
    </>
  )
};

export default EmployeesScreen;
