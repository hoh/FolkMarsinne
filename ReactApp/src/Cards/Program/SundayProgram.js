import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';
import {DayProgram} from './ProgramComponents'


const sundayPlan = [
  {hour: '', 'groups': []},
  {hour: '11:00', 'groups':[false,
                            {name: 'Vendée - Dames de Nage (FR)' <i>'atelier de danse'<\/i>, kind: 'workshop', duration: 3, kind: 'learn'},
                            false,
                            false]},
  {hour: '11:30', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '12:00', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '12:30', 'groups':[false,
                            false,
                            {name: 'Suède - Aurélie Giet & Väsen (SE)' <i>'atelier de danse'<\/i>, kind: 'workshop', duration: 3, kind: 'learn'},
                            false]},
  {hour: '13:00', 'groups':[{name: 'Grand Air (BE)' <i>'concert'<\/i>, kind: 'concert', duration: 2, kind: 'concert'},
                            {name: 'Dames de Nage (FR)' <i>'bal'<\/i>, kind: 'bal', duration: 3, kind: 'bal'},
                            true,
                            false]},
  {hour: '13:30', 'groups':[true,
                            true,
                            true,
                            false]},
  {hour: '14:00', 'groups':[false,
                            true,
                            false,
                            {name: 'Théâtre Mabotte (BE)' <i>'théatre enfants'<\/i>, duration: 1, kind: 'theatre'}]},
  {hour: '14:30', 'groups':[false,
                            false,
                            {name: 'Väsen (SE)' <i>'bal'<\/i>, duration: 3, kind: 'bal'},
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '15:00', 'groups':[false,
                            true,
                            true,
                            true]},
  {hour: '15:30', 'groups':[false,
                            false,
                            true,
                            {name: 'Théâtre Mabotte (BE)' <i>'théatre enfants'<\/i>, duration: 1, kind: 'theatre'}]},
  {hour: '16:00', 'groups':[{name: 'Zim Boum Trad (BE)' <i>'bal pour enfants'<\/i>, duration: 3, kind: 'bal'},
                            {name: 'Boutons & Ficelles (BE)' <i>'bal'<\/i>, duration: 4, kind: 'bal'},
                            false,
                            false]},
  {hour: '16:30', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '17:00', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '17:30', 'groups':[false,
                            true,
                            false,
                            {name: 'Théâtre Mabotte (BE)' <i>'théatre enfants'<\/i>, duration: 1, kind: 'theatre'}]},
  {hour: '18:00', 'groups':[false,
                            false,
                            {name: 'Grand Boeuf du 25ème' <i>'bal'<\/i>, kind: 'bal', duration: 4},
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '18:30', 'groups':[false,
                            false,
                            true,
                            true]},
  {hour: '19:00', 'groups':[{name: 'Duo Mc Gowan - Munelly (IE)' <i>'concert'<\/i>, kind: 'concert', duration: 3},
                            false,
                            true,
                            false]},
  {hour: '19:30', 'groups':[true,
                            false,
                            true,
                            false]},
  {hour: '20:00', 'groups':[true,
                            {name: 'Carré Manchot (FR)' <i>'bal'<\/i>, kind: 'bal', duration: 4},
                            false,
                            false]},
  {hour: '20:30', 'groups':[false,
                            true,
                            false,
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '21:00', 'groups':[false,
                            true,
                            false,
                            true]},
  {hour: '21:30', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '22:00', 'groups':[{name: 'Duo Botasso (IT)' <i>'bal'<\/i>, kind: 'bal', duration: 3},
                            false,
                            false,
                            false]},
  {hour: '22:30', 'groups':[true,
                            false,
                            false,
                            false]},
  {hour: '23:00', 'groups':[true,
                            false,
                            false,
                            false]},
  {hour: '23:30', 'groups':[true,
                            false,
                            false,
                            false]},
  {hour: '00:00', 'groups':[false,
                            false,
                            false,
                            false]},
];


export default class SundayProgram extends React.Component {
  render() {
		return (
      <DayProgram plan={sundayPlan} lang={this.props.lang} />
    );
  }
}
