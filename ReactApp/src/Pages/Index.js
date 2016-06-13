import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import {red500, brown500, grey500, cyan500, transparent, white} from 'material-ui/styles/colors';

import WelcomeCard from '../Cards/WelcomeCard';
import EventsCard from '../Cards/EventsCard';

const bands = [
  {name: 'Väsen', num: 1},
  {name: 'Shillelagh', num: 2},
  {name: 'Les Zéoles', num: 3},
  {name: 'Carré Manchot', num: 4},
  {name: 'Duo Cavez-Montanaro', num: 5},
  {name: 'Carte Blanche à Michel Jacqmain', num: 6},
  {name: 'DUo Bottasso', num: 7},
  {name: 'Beat Bouet Trio', num: 8},
  {name: 'Baila Tocamos', num: 9},
  {name: 'Durif-Champeval', num: 10},
  {name: 'Elles s\'y Promènent', num: 11},
  {name: 'Duo McGowan-Munnelly', num: 12},
  {name: 'Duo TTC', num: 13},
  {name: 'Wouter Vandenabeele & Jeroen Knapen', num: 14},
  {name: 'Poke', num: 15},
  {name: 'Boutons & Ficelles', num: 16},
  {name: 'Influences', num: 17},
  {name: 'Dames de Nage', num: 18},
  {name: 'Zim Boum Trad', num: 19},
  {name: 'Grand Air', num: 20},
  {name: 'Mad Tom Duo', num: 21},
  {name: 'Le Théâtre Mabotte', num: 22},
]

const i18n_strings = {
  fr: {
    buttons: {
      progam: 'Programme',
      volunteer: 'Devenir bénévole',
    }
  },
  en: {
    buttons: {
      progam: 'Program',
      volunteer: 'volunteer',
    }
  }
}


export default class IndexPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang];

    return (
      <div>

        <Card>
          <div style={{display: 'block', paddingTop: '20px', paddingBottom: '20px',
                       marginBottom: '0px'}}>
            {bands.map((band) =>
              <FlatButton label={band.name} key={band.num}
                          primary={band.num % 2} secondary={(band.num % 2) - 1}
                          labelStyle={{fontSize: 25 - Math.log(band.num) * 4}}
                          />
            )}
          </div>
        </Card>

        <div style={{fontFamily: '\'Dancing Script\', cursive',
                     textAlign: 'center',
                     background: 'url("/static/marsinne-bw.png")',
                     backgroundSize: 'cover',
                     margin: 0,
                   }}>
          <div style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>

            <div style={{fontSize: 55,
                        paddingTop: 50,
                        color: red500 }}>
              Folk Festival Marsinne 2016
            </div>
            <h2 style={{fontSize: 35, color: brown500}}>
              9-10-11 Sept. 2016
            </h2>

            <div>
              <RaisedButton label={strings.buttons.progam} primary={true}
                style={{margin: 12}} onClick={() => this.props.onPageChange('program')} />
              <RaisedButton label="Tickets" secondary={true} style={{margin: 12}}
                onClick={() => this.props.onPageChange('tickets')}/>
            </div>

            <div style={{height: 100}} />
          </div>
        </div>

        <WelcomeCard lang={this.props.lang} />
        <p />
        <EventsCard lang={this.props.lang} />
      </div>
    );
  }
}
