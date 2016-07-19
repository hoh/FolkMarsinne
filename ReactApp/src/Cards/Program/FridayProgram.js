import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';
import {DayProgram} from './ProgramComponents'


const fridayPlan = [
  {hour: '', 'groups': []},
  {hour: '20h', 'groups': [false, 
  			   {name: 'Baila Tocamos (BE) bal', duration: 4, kind: 'bal'},
  			   false, false]},
  {hour: '20h30', 'groups': [false, true, false, false]},
  {hour: '21h', 'groups': [false, true, false, false]},
  {hour: '21h30', 'groups': [false, true, false, false]},
  {hour: '22h', 'groups': [{name: 'Duo Montanaro-Cavez (BE-FR) concert', duration: 3, kind: 'concert'},
                           false,
                           {name: 'Wouter Vandenabeele et Jeroen Knapen (BE) bal', duration: 4, kind: 'bal'},
                           false]},
  {hour: '22h30', 'groups': [true, false, true, false]},                         
  {hour: '23h', 'groups': [true, false, true, false]},
  {hour: '23h30', 'groups': [false, false, true, false]},
  {hour: '00h', 'groups': [false,
                           {name: 'Les Zéoles (FR) bal', duration: 4, kind: 'bal'},
                           false, false]},
  {hour: '00h30', 'groups': [false, true, false, false]},
  {hour: '01h', 'groups': [false, true, false, false]},
  {hour: '01h30', 'groups': [false, true, false, false]},
  {hour: '02h00', 'groups': [false, false, false, false]},
];


export default class FridayProgram extends React.Component {
  render() {
    return (
      <DayProgram plan={fridayPlan} lang={this.props.lang} />
    );
  }
}
