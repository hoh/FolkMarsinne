import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors'
import {DayProgram} from './ProgramComponents'
import {BandDescriptions} from './BandDescriptions'


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


const fridayBands = [
  {
    name: 'Baila Tocamos',
    kind: 'bal',
    from: 'Belgique - Wallonie',
    members: [
      {name: 'Martin de Roos', instruments: ['accordéon diatonique']},
      {name: 'Emile Postic', instruments: ['clarinette']},
      {name: 'François Postic', instruments: ['saxophone baryton']},
    ],
    links: [
      'https://soundcloud.com/baila-tocamos',
    ]
  },
  {
    name: 'Duo Montanaro-Cavez',
    kind: 'concert',
    from: 'France / Belgique - Wallonie',
    members: [
      {name: 'Sophie Cavez', instruments: ['accordéon diatonique']},
      {name: 'Baltazar Montanaro', instruments: ['violon']},
    ],
    links: [
      'http://www.duomontanarocavez.sitew.com/',
      'https://youtu.be/G3Y7-iPCjjY',
      'https://youtu.be/NI3fo4GW7vs',
    ]
  },
  {
    name: 'Wouter Vandenabeele & Jeroen Knapen',
    kind: 'bal',
    from: 'Belgique - Flandre',
    members: [
      {name: 'Jeroen Knapen', instruments: ['guitare']},
      {name: 'Wouter Vandenabeele', instruments: ['violon']},
    ],
    links: [
      'http://www.woutervandenabeele.be',
      'https://www.youtube.com/watch?v=0ARP-LacEQ0',
      'https://www.youtube.com/watch?v=imR5WTyFrK8',
    ]
  },
  {
    name: 'Les Zéoles',
    kind: 'bal',
    from: 'France',
    members: [
      {name: 'Amélie Denarié', instruments: ['accordéon diatonique']},
      {name: 'Anne Guinot', instruments: ['accordéon chromatique']},
    ],
    links: [
      'http://leszeoles.net/',
      'https://youtu.be/CozOezCNih4',
      'https://youtu.be/Ykqn-uLhyLY',
    ]
  },
];


export default class FridayProgram extends React.Component {
  render() {
    return (
      <div>
        <DayProgram plan={fridayPlan} lang={this.props.lang} />
        <BandDescriptions bands={fridayBands} lang={this.props.lang} />
      </div>
    );
  }
}
