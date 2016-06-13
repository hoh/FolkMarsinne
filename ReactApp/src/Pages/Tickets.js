import React, { Component } from 'react';

import PresalesCard from '../Cards/Tickets/PresalesCard';
import OnSiteCard from '../Cards/Tickets/OnSiteCard';


export default class TicketsPage extends React.Component {

  render() {
    console.log("plop");
    return (
      <div>
        <PresalesCard />
        <OnSiteCard />
      </div>
    );
  }
}
