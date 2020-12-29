import React from "react";
import axios from 'axios';

import EmployeesScreen from "src/screens/EmployeesScreen";

const EmployeesPage = ({ pageResponse }) => <EmployeesScreen title="EMPLOYEES" pageResponse={pageResponse} />;

EmployeesPage.getInitialProps = async (context) => {
  let pageResponse = null;
  await axios.get('https://vtys-conference-5gh8b.ondigitalocean.app/api/employee')
    .then(function (response) {
      pageResponse = response.data;
    })
    .catch(function (error) {
      console.log('ERROR!', error);
    })
  return {
    pageResponse
  };
};

export default EmployeesPage;
