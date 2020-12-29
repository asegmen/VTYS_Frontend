import React from "react";

import SessionsAddScreen from "src/screens/SessionsAddScreen";

const SessionsPage = () => <SessionsAddScreen title="ADD NEW SESSION" />;

SessionsPage.getInitialProps = async (context) => {
  return {
  };
};

export default SessionsPage;
