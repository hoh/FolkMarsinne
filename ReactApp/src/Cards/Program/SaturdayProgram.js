import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';
import {DayProgram} from './ProgramComponents'
import {BandDescriptions} from './BandDescriptions'


const saturdayPlan = [
  {hour: '', 'groups': []},
  {hour: '11h00', 'groups':[false,
                            false,
                            {name: 'Pays de Galles - Mad Tom Duo (FR) atelier de danse', duration: 3, kind: 'learn'},
                            false]},
  {hour: '11h30', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '12h00', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '12h30', 'groups':[false,
                            {name: 'Danses de couple - Pierre Chesneau (BE) & Poke (FR) atelier de danse', duration: 3, kind: 'learn'},
                            false,
                            false]},
  {hour: '13h00', 'groups':[{name: 'InFluEnCeS (BE) concert', duration: 2, kind: 'concert'},
                            true,
                            {name: 'Mad Tom Duo (FR) bal', duration: 3, kind: 'bal'},
                            false]},
  {hour: '13h30', 'groups':[true,
                            true,
                            true,
                            false]},
  {hour: '14h00', 'groups':[false,
                            false,
                            true,
                            {name: 'Théâtre Mabotte (BE) théatre enfants', duration: 1, kind: 'theatre'}]},
  {hour: '14h30', 'groups':[false,
                            {name: 'Poke (FR) bal', duration: 3, kind: 'bal'},
                            false,
                            {name: 'Melting Potes (Podium libre)', duration: 2, kind: 'free'}]},
  {hour: '15h00', 'groups':[false,
                            true,
                            false,
                            true]},
  {hour: '15h30', 'groups':[false,
                            true,
                            false,
                            {name: 'Théâtre Mabotte (BE) théatre enfants', duration: 1, kind: 'theatre'}]},
  {hour: '16h00', 'groups':[{name: 'Initiation bal folk - Carine de Lauw et Christian D\'Huyvetter (BE) atelier de danse',
                             duration: 3, kind: 'learn'},
                            false,
                            {name: 'Durif - Champeval (FR) bal', duration: 4, kind: 'bal'},
                            false]},
  {hour: '16h30', 'groups':[true,
                            false,
                            true,
                            {name: 'Théâtre Mabotte (BE) théatre enfants', duration: 1, kind: 'theatre'}]},
  {hour: '17h00', 'groups':[true,
                            false,
                            true,
                            false]},
  {hour: '17h30', 'groups':[false,
                            false,
                            true,
                            {name: 'Théâtre Mabotte (BE) théatre enfants', duration: 1, kind: 'theatre'}]},
  {hour: '18h00', 'groups':[false,
                            {name: 'Duo TTC (FR) bal', duration: 4, kind: 'bal'},
                            false,
                            {name: 'Contretemps et Marées (Podium libre)', duration: 2, kind: 'free'}]},
  {hour: '18h30', 'groups':[false,
                            true,
                            false,
                            true]},
  {hour: '19h00', 'groups':[{name: 'Elles s\'y promènent (BE) concert', duration: 3, kind: 'concert'},
                            true,
                            false,
                            false]},
  {hour: '19h30', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '20h00', 'groups':[true,
                            false,
                            {name: 'Carte blanche à Michel Jacqmain (BE) bal', duration: 4, kind: 'bal'},
                            false]},
  {hour: '20h30', 'groups':[false,
                            false,
                            true,
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '21h00', 'groups':[false,
                            false,
                            true,
                            true]},
  {hour: '21h30', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '22h00', 'groups':[{name: 'Väsen (SE) concert', duration: 3, kind: 'concert'},
                            {name: 'Beat Bouet Trio (FR) bal', duration: 4, kind: 'bal'},
                            false,
                            false]},
  {hour: '22h30', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '23h00', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '23h30', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '00h00', 'groups':[false,
                            false,
                            {name: 'Shillelagh (FR) bal', duration: 4, kind: 'bal'},
                            false]},
  {hour: '00h30', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '01h00', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '01h30', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '02h00', 'groups':[false,
                            false,
                            false,
                            false]},
];


const saturdayBands = [
  {
    name: 'Atelier de danse: Pays de Galles (contredanses)',
    kind: 'learn',
    from: 'Pays de Galles',
    members: [
      {name: 'Rachel Goodwin', instruments: ['']},
      {name: 'Hervé Dréan', instruments: ['']},
    ],
    links: [
      'http://www.madtomduo.eu/',
    ]
  },
  {
    name: 'Mad Tom Duo',
    kind: 'bal',
    from: 'France',
    members: [
      {name: 'Hervé Dréan', instruments: ['flutes', 'low whistle', 'high whistle']},
      {name: 'Rachel Goodwin', instruments: ['calling', 'piano']},
    ],
    links: [
      'http://www.madtomduo.eu/',
      'https://www.youtube.com/watch?v=pRUtj1oBZGM',
    ]
  },
  {
    name: 'InFluEnCeS',
    kind: 'concert',
    from: 'Belgique - Wallonie',
    members: [
      {name: 'Frédéric Nicolas', instruments: ['flûtes', 'cornemuses', 'chant']},
      {name: 'Gwennaëlle Simus', instruments: ['violon', 'chant']},
      {name: 'Kerryan Simus', instruments: ['guitare', 'percussions', 'coeurs']},
    ],
    links: [
      'http://influenceslegroupe.wix.com/influences',
      'https://youtu.be/kBRfA-W6CJ8https://youtu.be/kBRfA-W6CJ8',
    ]
  },
  {
    name: 'Atelier de danse de couple',
    kind: 'learn',
    from: '',
    members: [
      {name: 'Pierre Chesneau', instruments: ['flûtes irlandaises', 'saxophone']},
      {name: 'Colin Delzant', instruments: ['violoncelle']},
      {name: 'Sylvain Letourneau', instruments: ['guitare']},
      {name: 'Jonas Thin', instruments: ['cornemuses', 'flûtes irlandaises']},
    ],
    links: [
      'http://poke-folk.webflow.io/',
      'https://www.youtube.com/watch?v=96EbRjgEWI4',
      'https://soundcloud.com/pokefolk',
    ]
  },
  {
    name: 'Poke',
    kind: 'bal',
    from: 'France',
    members: [
      {name: 'Pierre Chesneau', instruments: ['flûtes irlandaises', 'saxophone']},
      {name: 'Colin Delzant', instruments: ['violoncelle']},
      {name: 'Sylvain Letourneau', instruments: ['guitare']},
      {name: 'Jonas Thin', instruments: ['cornemuses', 'flûtes irlandaises']},
    ],
    links: [
      'http://poke-folk.webflow.io/',
      'https://www.youtube.com/watch?v=96EbRjgEWI4',
      'https://soundcloud.com/pokefolk',
    ]
  },
  {
    name: 'Initiation aux danses de bal folk',
    kind: 'learn',
    from: '',
    members: [
      {name: 'Carine de Lauw', instruments: ['']},
      {name: 'Christian D Huyvetter', instruments: ['']},
    ],
    links: [
      '',
    ]
  },
  {
    name: 'Durif-Champeval',
    kind: 'bal',
    from: 'France, Belgique - Wallonie',
    members: [
      {name: 'Jean-Pierre Champeval', instruments: ['violon']},
      {name: 'Olivier Durif', instruments: ['violon']},
    ],
    links: [
      'https://www.youtube.com/watch?v=JkOM0d63NsE',
      'https://www.youtube.com/watch?v=GMYE6qMBNDw ',
    ]
  },
  {
    name: 'Duo TTC',
    kind: 'bal',
    from: 'France',
    members: [
      {name: 'Thomas Restoin', instruments: ['accordéon chromatique', 'accordina']},
      {name: 'Tienne Simonnin', instruments: ['accordéon chromatique', 'whistle']},
    ],
    links: [
      'http://www.tiennetsimonnin.fr/groupes/duo-ttc/',
      'https://www.youtube.com/watch?v=HwLsCjrzmJw',
      'https://soundcloud.com/duottc',
    ]
  },
  {
    name: 'Elles s y promènes',
    kind: 'concert',
    from: 'Belgique - Wallonie',
    members: [
      {name: 'Florence Laloy', instruments: ['chant']},
      {name: 'Christine Lurquin', instruments: ['chant']},
    ],
    links: [
      'https://www.facebook.com/Elles-sy-prom%C3%A8nent-137646016402370/',
      'https://www.youtube.com/watch?v=lTS3LdTOfpg',
      'https://myspace.com/ellessypromenent/music/songs',
    ]
  },
  {
    name: 'Carte blanche à Michel Jacqmain',
    kind: 'bal',
    from: '',
    members: [
      {name: 'Michel Jacqumain', instruments: ['cistre', 'guitare']},
      {name: 'Catherine Blanjean', instruments: ['Violon', 'contrebasse']},
      {name: 'Marinette Bonnert', instruments: ['accordéon diatonique']},
      {name: 'Pierre Brasseur', instruments: ['mandoline', 'clarinette']},
      {name: 'Jonathan Bruyninckx', instruments: ['plink plink']},
      {name: 'Pierre Challe', instruments: ['accordéon diatonique']},
      {name: 'Evelaine Cobut', instruments: ['violon']},
      {name: 'Christophe Delpierre', instruments: ['violon']},
      {name: 'Franco Delvecchio', instruments: ['cornemuses']},
      {name: 'Christian D Huyvetter', instruments: ['accordéon diatonique']},
      {name: 'Catherine Louise Dowle', instruments: ['violon']},
      {name: 'Adeline Ghilain', instruments: ['flûte traversière']},
      {name: 'Aurélie Giet', instruments: ['clarinette']},
      {name: 'Barthélemy Houben', instruments: ['Accordéon chromatique']},
      {name: 'Basile Jacqmain', instruments: ['cajon']},
      {name: 'Philippe Malcorps', instruments: ['vielle à roue']},
      {name: 'Vincent Maljean', instruments: ['accordéon diatonique']},
      {name: 'Nicolas Martorana', instruments: ['cornemuses']},
      {name: 'Thibaud Misson', instruments: ['contrebasse']},
      {name: 'François Postic', instruments: ['saxophone']},
      {name: 'Pere Romani', instruments: ['accordéon diatonique', 'mandoline']},
      {name: 'Françoise Ryelandt', instruments: ['accordéon diatonique']},
      {name: 'Dominique Scoubeau', instruments: ['accordéon diatonique']},
      {name: 'Robin Seifert', instruments: ['accordéon diatonique']},
    ],
    links: [
      '',
    ]
  },
  {
    name: 'Beat Bouet Trio',
    kind: 'bal - fest-noz',
    from: 'France',
    members: [
      {name: 'Faya Gur', instruments: ['voix']},
      {name: 'T Burt / Christian L Berton', instruments: ['beat box']},
      {name: 'Vanao / Ivan R', instruments: ['accordéon diatonique']},
    ],
    links: [
      'http://beatbouettrio.wix.com/beatbouettrio',
      'https://www.youtube.com/watch?v=9wcFiD0WNDQ',
      'https://www.youtube.com/watch?v=A8mNEgnaOMM',
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
    name: 'Shillelagh',
    kind: 'bal',
    from: 'France',
    members: [
      {name: 'Gabriel Lenoir', instruments: ['violon']},
      {name: 'Benjamin Macke', instruments: ['accordéon diatonique']},
      {name: 'Aurélien Tanghe', instruments: ['guitare']},
    ],
    links: [
      'http://www.shillelagh.fr/',
      'https://www.youtube.com/watch?v=Xg3jPxRpQ6I',
      'https://www.youtube.com/watch?v=1YPxgatAS_w',
    ]
  },

]


export default class SaturdayProgram extends React.Component {
  render() {
    return (
      <div>
        <DayProgram plan={saturdayPlan} lang={this.props.lang} />
        <BandDescriptions bands={saturdayBands} lang={this.props.lang} />
      </div>
    );
  }
}
