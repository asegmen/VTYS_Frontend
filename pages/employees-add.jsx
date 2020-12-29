import React from "react";

import EmployeeAddScreen from "src/screens/EmployeeAddScreen";

const EmployeesPage = () => <EmployeeAddScreen title="ADD NEW EMPLOYEE" />;

EmployeesPage.getInitialProps = async (context) => {
  return {
  };
};

export default EmployeesPage;
