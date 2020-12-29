import React from "react";
import axios from 'axios';

import SpeakersEditScreen from "src/screens/SpeakersEditScreen";

const SpeakersEditPage = ({ pageResponse, userId }) => <SpeakersEditScreen title="EDIT Speaker" pageResponse={pageResponse} userId={userId} />;

SpeakersEditPage.getInitialProps = async (context) => {
  const { query } = context;
  const { userId } = query
  let pageResponse = null;
  await axios.get(`https://vtys-conference-5gh8b.ondigitalocean.app/api/speakers/${userId}`)
    .then(function (response) {
      console.log(response.data);
      pageResponse = response.data;
    })
    .catch(function (error) {
      console.log('ERROR!', error);
    })
  return {
    pageResponse,
    userId
  };
};

export default SpeakersEditPage;
