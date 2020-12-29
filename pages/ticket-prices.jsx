import React from "react";
import axios from 'axios';

import TicketPricesScreen from "src/screens/TicketPricesScreen";

const TicketPricesPage = ({ pageResponse }) => <TicketPricesScreen title="TICKET PRICES" pageResponse={pageResponse} />;

TicketPricesPage.getInitialProps = async (context) => {
  let pageResponse = null;
  await axios.get('https://vtys-conference-5gh8b.ondigitalocean.app/api/ticket_price')
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

export default TicketPricesPage;
