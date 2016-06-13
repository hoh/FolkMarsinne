import React, { Component } from 'react';

import {red600, white} from 'material-ui/styles/colors';

import WelcomeCard from '../Cards/WelcomeCard';
import EventsCard from '../Cards/EventsCard';


export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <img src="/static/musicians.png"
             alt="Logo with Musicians"
             style={{float: 'right', height: 70}}
             />

        <h1 style={{fontFamily: "'Dancing Script', cursive",
                    fontSize: 55,
                    margin: 30,
                    textAlign: 'center',
                    color: red600 }}>
          Folk Festival Marsinne
        </h1>

        <WelcomeCard />
        <EventsCard />
      </div>
    );
  }
}
