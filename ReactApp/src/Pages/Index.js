import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import {red500, brown500, transparent, white} from 'material-ui/styles/colors';

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


export default class IndexPage extends React.Component {

  render() {
    return (
      <div>

        <Card>
          <div style={{display: 'block', paddingTop: '20px', paddingBottom: '20px'}}>
            {bands.map((band) =>
              <FlatButton label={band.name} key={band.num}
                          primary={band.num % 2} secondary={(band.num % 2) - 1}
                          labelStyle={{fontSize: 25 - Math.log(band.num) * 4}}
                          />
            )}
          </div>
        </Card>

        <div style={{fontFamily: "'Dancing Script', cursive",
                     textAlign: 'center',}}>

          <h1 style={{fontSize: 55,
                      marginTop: 50,
                      color: red500 }}>
            Folk Festival Marsinne 2016
          </h1>
          <h2 style={{fontSize: 35, color: brown500}}>
            9-10-11 Sept. 2016
          </h2>

          <div style={{height: 200}} />
        </div>

        <WelcomeCard />
        <p />
        <EventsCard />
      </div>
    );
  }
}
