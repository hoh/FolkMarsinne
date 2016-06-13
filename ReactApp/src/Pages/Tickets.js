import React, { Component } from 'react';

import CustomTitle from '../Cards/CustomTitle';
import PresalesCard from '../Cards/Tickets/PresalesCard';
import OnSiteCard from '../Cards/Tickets/OnSiteCard';


export default class TicketsPage extends React.Component {

  render() {
    return (
      <div>
        <CustomTitle title="Tickets" />
        <PresalesCard />
        <OnSiteCard />
      </div>
    );
  }
}
