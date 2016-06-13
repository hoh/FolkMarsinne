import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';
import {DayProgram} from './ProgramComponents'


const fridayPlan = [
  {hour: '20h', 'groups': [false,
                           {name: 'Baila Tocamos', duration: 2, kind: 'bal'},
                           false, false]},
  {hour: '21h', 'groups': [false, true, false, false]},
  {hour: '22h', 'groups': [{name: 'Wouter Vandenabeele', duration: 2, kind: 'bal'},
                           false,
                           {name: 'Duo Montanaro-Cavez', duration: 2, kind: 'concert'},
                           false]},
  {hour: '23h', 'groups': [true, false, true, false]},
  {hour: '00h', 'groups': [false,
                           {name: 'Les Zéoles', duration: 2, kind: 'bal'},
                           false, false]},
  {hour: '01h', 'groups': [false, true, false, false]},
];


export default class FridayProgram extends React.Component {
  render() {
		return (
      <DayProgram plan={fridayPlan} />
    );
  }
}
