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
      et en
      &nbsp;
      <RaisedButton label="Prévente" linkButton={true} href="#presales"
                    primary={true} />
    </span>,
  },
  en: {
    title: 'Tickets',
    desc: 'On site and pre sales',
  },
  nl: {
    title: 'Tickets',
    desc: 'Ter plaatse / Voorverkoop',
  },
}

export default class TicketsPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>
        <CustomTitle title={strings.title} desc={strings.desc} />
        <PresalesCard lang={this.props.lang} />
        <p/>
        <OnSiteCard lang={this.props.lang} />
      </div>
    );
  }
}
