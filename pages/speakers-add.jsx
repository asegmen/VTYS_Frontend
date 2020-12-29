import React from "react";

import SpeakersAddScreen from "src/screens/SpeakersAddScreen";

const SpeakersPage = () => <SpeakersAddScreen title="ADD NEW SPEAKER" />;

SpeakersPage.getInitialProps = async (context) => {
  return {
  };
};

export default SpeakersPage;
