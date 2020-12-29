import React from "react";

import AttendeesAddScreen from "src/screens/AttendeesAddScreen";

const AttendeesPage = () => <AttendeesAddScreen title="ADD NEW ATTENDEES" />;

AttendeesPage.getInitialProps = async (context) => {
  return {
  };
};

export default AttendeesPage;
