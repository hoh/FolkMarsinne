import React, { Component } from 'react';

import CustomTitle from '../Cards/CustomTitle';
import PresalesCard from '../Cards/Tickets/PresalesCard';
import OnSiteCard from '../Cards/Tickets/OnSiteCard';
import RaisedButton from 'material-ui/RaisedButton';

const i18n_strings = {
  fr: {
    title: 'Tickets',
    desc: <span>
      Les tickets sont disponibles
      &nbsp;
      <RaisedButton label="Sur place" linkButton={true} href="#onsite"
                    primary={true} />
      &nbsp;
      (voir plus bas) et en
      &nbsp;
      <RaisedButton label="Prévente" linkButton={true} href="#presales"
                    primary={true} />
    </span>,
  },
  en: {
    title: 'Tickets',
    desc: <span>
      Tickets are available
      &nbsp;
      <RaisedButton label="On site" linkButton={true} href="#onsite"
                    primary={true} />
      &nbsp;
      (see below) and on
      &nbsp;
      <RaisedButton label="Pre Sales" linkButton={true} href="#presales"
                    primary={true} />
    </span>,
  },
  nl: {
    title: 'Tickets',
    desc: <span>
      Tickets zijn verkrijgbaar
      &nbsp;
      <RaisedButton label="Ter plaatse" linkButton={true} href="#onsite"
                    primary={true} />
      &nbsp;
      (zie hieronder) en
      &nbsp;
      <RaisedButton label="Voorverkoop" linkButton={true} href="#presales"
                    primary={true} />
    </span>,
  },
}

export default class TicketsPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>
        <CustomTitle title={strings.title} desc={strings.desc} />
        <OnSiteCard lang={this.props.lang} />
        <p/>
        <PresalesCard lang={this.props.lang} />
      </div>
    );
  }
}
