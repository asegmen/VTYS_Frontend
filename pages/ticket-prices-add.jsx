import React from "react";

import TicketPricesAddScreen from "src/screens/TicketPricesAddScreen";

const TicketPricesPage = () => <TicketPricesAddScreen title="ADD NEW TICKET PRICE" />;

TicketPricesPage.getInitialProps = async (context) => {
  return {
  };
};

export default TicketPricesPage;
