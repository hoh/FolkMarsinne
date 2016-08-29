import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';
import {DayProgram} from './ProgramComponents'
import {BandDescriptions} from './BandDescriptions'


const sundayPlan = [
  {hour: '', 'groups': []},
  {hour: '11h00', 'groups':[false,
                            {name: 'Vendée - Dames de Nage (FR) atelier de danse', kind: 'workshop', duration: 3, kind: 'learn'},
                            false,
                            false]},
  {hour: '11h30', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '12h00', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '12h30', 'groups':[false,
                            false,
                            {name: 'Suède - Aurélie Giet & Väsen (SE) atelier de danse', kind: 'workshop', duration: 3, kind: 'learn'},
                            false]},
  {hour: '13h00', 'groups':[{name: 'Grand Air (BE) concert', kind: 'concert', duration: 2, kind: 'concert'},
                            {name: 'Dames de Nage (FR) bal', kind: 'bal', duration: 3, kind: 'bal'},
                            true,
                            false]},
  {hour: '13h30', 'groups':[true,
                            true,
                            true,
                            false]},
  {hour: '14h00', 'groups':[false,
                            true,
                            false,
                            {name: 'Théâtre Mabotte (BE) théatre enfants', duration: 1, kind: 'theatre'}]},
  {hour: '14h30', 'groups':[false,
                            false,
                            {name: 'Väsen (SE) bal', duration: 3, kind: 'bal'},
                            {name: 'Les Djoweus D\'danses (Podium libre)', duration: 2, kind: 'free'}]},
  {hour: '15h00', 'groups':[false,
                            false,
                            true,
                            true]},
  {hour: '15h30', 'groups':[false,
                            false,
                            true,
                            {name: 'Théâtre Mabotte (BE) théatre enfants', duration: 1, kind: 'theatre'}]},
  {hour: '16h00', 'groups':[{name: 'Zim Boum Trad (BE) bal pour enfants', duration: 2, kind: 'bal'},
                            {name: 'Boutons & Ficelles (BE) bal', duration: 4, kind: 'bal'},
                            false,
                            false]},
  {hour: '16h30', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '17h00', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '17h30', 'groups':[false,
                            true,
                            false,
                            {name: 'Théâtre Mabotte (BE) théatre enfants', duration: 1, kind: 'theatre'}]},
  {hour: '18h00', 'groups':[false,
                            false,
                            {name: 'Grand Boeuf du 25ème bal', kind: 'bal', duration: 4},
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '18h30', 'groups':[false,
                            false,
                            true,
                            true]},
  {hour: '19h00', 'groups':[{name: 'Duo Mc Gowan - Munelly (IE) concert', kind: 'concert', duration: 3},
                            false,
                            true,
                            false]},
  {hour: '19h30', 'groups':[true,
                            false,
                            true,
                            false]},
  {hour: '20h00', 'groups':[true,
                            {name: 'Carré Manchot (FR) bal', kind: 'bal', duration: 4},
                            false,
                            false]},
  {hour: '20h30', 'groups':[false,
                            true,
                            false,
                            {name: 'EÄ (Podium libre)', duration: 2, kind: 'free'}]},
  {hour: '21h00', 'groups':[false,
                            true,
                            false,
                            true]},
  {hour: '21h30', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '22h00', 'groups':[{name: 'Duo Botasso (IT) bal', kind: 'bal', duration: 4},
                            false,
                            false,
                            false]},
  {hour: '22h30', 'groups':[true,
                            false,
                            false,
                            false]},
  {hour: '23h00', 'groups':[true,
                            false,
                            false,
                            false]},
  {hour: '23h30', 'groups':[true,
                            false,
                            false,
                            false]},
  {hour: '00h00', 'groups':[false,
                            false,
                            false,
                            false]},
];


const sundayBands = [
  {
    name: 'Atelier danse: Vendée',
    kind: 'learn',
    from: 'France',
    members: [
      {name: 'Valérie Imbert', instruments: ['chant']},
      {name: 'Brigitte Kloareg', instruments: ['chant']},
    ],
    links: [
      'https://www.youtube.com/watch?v=RbrA4pb_ON4',
      'https://www.youtube.com/watch?v=QCb6P7NkqS4',
      'https://www.youtube.com/watch?v=EkMHfaA5P',
    ]
  },
  {
    name: 'Dames de nage',
    kind: 'bal',
    from: 'France',
    members: [
      {name: 'Valérie Imbert', instruments: ['chant']},
      {name: 'Brigitte Kloareg', instruments: ['chant']},
    ],
    links: [
      'https://www.youtube.com/watch?v=RbrA4pb_ON4',
      'https://www.youtube.com/watch?v=QCb6P7NkqS4',
      'https://www.youtube.com/watch?v=EkMHfaA5P',
    ]
  },
  {
    name: 'Grand Air',
    kind: 'concert',
    from: 'Belgique - Wallonie',
    members: [
      {name: 'Catherine Blanjean', instruments: ['violon','alto']},
      {name: 'Pierre Brasseur', instruments: ['mandoline', 'clarinette']},
      {name: 'Michel Jacqmain', instruments: ['cistre','guitare']},
      {name: 'Julien Maréchal', instruments: ['violon']},
      {name: 'Patrick Van Uffelen', instruments: ['bodhran', 'tin whistle']},
    ],
    links: [
      '',
    ]
  },
  {
    name: 'Atelier de danse: Suède',
    kind: 'learn',
    from: 'Suède',
    members: [
      {name: 'Olov Johansson', instruments: ['nyckelharpa']},
      {name: 'Mickael Marin', instruments: ['alto']},
      {name: 'Roger Tallroch', instruments: ['guitare']},
      {name: 'Aurélie Giet', instruments: ['']},
    ],
    links: [
      'http://www.aureliegiet.be',
      'http://www.vasen.se/',
    ]
  },
  {
    name: 'Väsen',
    kind: 'concert',
    from: 'Suède',
    members: [
      {name: 'Olov Johansson', instruments: ['nyckelharpa']},
      {name: 'Mickael Marin', instruments: ['alto']},
      {name: 'Roger Tallroch', instruments: ['guitare']},
    ],
    links: [
      'http://www.vasen.se/',
      'https://www.youtube.com/watch?v=tWorsJwzycw',
      'https://www.youtube.com/watch?v=770ig9bYZYM',
      'https://www.youtube.com/watch?v=7gWLH7ZrMgw',
      'https://www.youtube.com/watch?v=FcYliDfOQ6Q ',
    ]
  },
  {
    name: 'Zim Boum Trad',
    kind: 'bal pour enfants',
    from: 'Belgique - Wallonie',
    members: [
      {name: 'Etienne Evrats', instruments: ['']},
      {name: 'Marinette Bonnert', instruments: ['accordéon diatonique']},
      {name: 'Pierre Challe', instruments: ['guitare']},
    ],
    links: [
      'http://zimboumtrad.weebly.com/?',
      'https://www.facebook.com/zimboumtrad',
      'https://youtu.be/PP2hRVRCK4Q',
    ]
  },
  {
    name: 'Boutons & Ficelles',
    kind: 'bal',
    from: 'Belgique - Wallonie',
    members: [
      {name: 'Vincent Jadot', instruments: ['guitares']},
      {name: 'Benoît Marthus', instruments: ['accordéon diatonique', 'mandoline']},
      {name: 'Pierre Matagne', instruments: ['guitares']},
      {name: 'Frédéric Nicolas', instruments: ['cornemuse', 'flûtes', 'bodhran']},
      {name: 'Joël Schallenbergh', instruments: ['guitare', 'bouzouki', 'banjo']},
      {name: 'Alexandre Warnant', instruments: ['djembé']},
    ],
    links: [
      'https://www.facebook.com/boutonsetficelles/ ',
    ]
  },
  {
    name: 'Grand boeuf du 25e',
    kind: 'bal',
    from: '',
    members: [
      {name: '-', instruments: ['']},
    ],
    links: [
      'https://www.dropbox.com/sh/ksddlq7haz7e2me/AAA63LHOorATzDAyBZOZMaTMa?dl=0 ',
    ]
  },
  {
    name: 'Duo McGowan - Munnelly',
    kind: 'concert',
    from: 'Irlande',
    members: [
      {name: 'Shane mc Gowan', instruments: ['guitare']},
      {name: 'David Munnelly', instruments: ['accordéon diatonique']},
    ],
    links: [
      'http://davidmunnelly.com/munnelly-mcgowan/',
      'https://www.youtube.com/watch?v=0ByfCReKTfA&feature=share',
      'https://youtu.be/NHYISawoY3c',
      'https://youtu.be/7vy7nJ-FcAo',
      'https://youtu.be/tIugpzTj9p4',
    ]
  },
  {
    name: 'Carré Manchot',
    kind: 'bal - fest-noz',
    from: 'France',
    members: [
      {name: 'Yannig Alory', instruments: ['flûte traversière en bois']},
      {name: 'Loïc Bléjean', instruments: ['uileann pipes', 'low whistles']},
      {name: 'Yann-Loïc Joly', instruments: ['accordéon diatonique']},
      {name: 'Gilbert Le Pennec', instruments: ['guitare']},
      {name: 'Patrick Marie', instruments: ['chant']},
    ],
    links: [
      'http://www.carremanchot.fr/',
      'https://youtu.be/XytH9QHIojE',
      'https://youtu.be/APXkRtxw2wA',
    ]
  },
  {
    name: 'Duo Bottasso',
    kind: 'bal',
    from: 'Italie',
    members: [
      {name: 'Nicolò Bottasso', instruments: ['violon']},
      {name: 'Simone Bottasso', instruments: ['accordéon diatonique']},
    ],
    links: [
      'http://www.duobottasso.com',
      'https://www.youtube.com/watch?feature=player_embedded&v=c82PUHf7hww',
      'https://www.youtube.com/watch?v=NBJTqHFA6h8',
      'https://youtu.be/ELMpLOHkQbk',
    ]
  },

]


export default class SundayProgram extends React.Component {
  render() {
		return (
      <div>
        <DayProgram plan={sundayPlan} lang={this.props.lang} />
        <BandDescriptions bands={sundayBands} lang={this.props.lang} />
      </div>
    );
  }
}
