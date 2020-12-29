import React from "react";
import axios from 'axios';

import SessionsScreen from "src/screens/SessionsScreen";

const SessionsPage = ({ pageResponse }) => <SessionsScreen title="SESSIONS" pageResponse={pageResponse} />;

SessionsPage.getInitialProps = async (context) => {
  let pageResponse = null;
  await axios.get('https://vtys-conference-5gh8b.ondigitalocean.app/api/sessions')
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

export default SessionsPage;
