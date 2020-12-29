import React from "react";
import axios from 'axios';

import AttendeesScreen from "src/screens/AttendeesScreen";

const AttendeesPage = ({ pageResponse }) => <AttendeesScreen title="ATTENDEES" pageResponse={pageResponse} />;

AttendeesPage.getInitialProps = async (context) => {
  let pageResponse = null;
  await axios.get('https://vtys-conference-5gh8b.ondigitalocean.app/api/attendee')
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

export default AttendeesPage;
