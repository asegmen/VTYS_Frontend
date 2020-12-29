import React from "react";
import axios from 'axios';

import SpeakersScreen from "src/screens/SpeakersScreen";

const SpeakersPage = ({ pageResponse }) => <SpeakersScreen title="SPEAKERS" pageResponse={pageResponse} />;

SpeakersPage.getInitialProps = async (context) => {
  let pageResponse = null;
  await axios.get('https://vtys-conference-5gh8b.ondigitalocean.app/api/speakers')
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

export default SpeakersPage;
