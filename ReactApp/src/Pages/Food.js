import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {red500, brown500} from 'material-ui/styles/colors';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';

import CustomTitle from '../Cards/CustomTitle';

const i18n_strings = {
  fr: {
    intro: {
      title: 'Restauration',
      text: 'A partir du vendredi 19h',
    },
    canteen: {
      title: 'Cuisine du festival',
      desc: 'Un grand choix de restauration est proposé sur place aux festivaliers : repas chauds complets cuisinés sur place, frites, couscous, croque-monsieurs spéciaux, crêpes, ...',
      desc2: 'Possibilité de petit-déjeuner.',
    },
  },
  en: {
    intro: {
      title: 'Catering',
      text: 'Starting Friday at 7pm',
    },
    canteen: {
      title: 'Cuisine of the festival',
      desc: 'A lot of food choice are available in the festival area : full hot meals prepared on site, french fries, couscous, croque-monsieur, pancakes, ...',
      desc2: 'Breakfast also possible.',
    },
  },
  nl: {
    intro: {
      title: 'Eten',
      text: 'Vanaf vrijdag om 19u',
    },
    canteen: {
      title: 'Keuken van het festival',
      desc: 'Er is een grote verscheidenheid aan maaltijden/snacks voorzien : Volledige warme maaltijden ter plaatse bereid, frieten, couscousschotels, croque-monsieurs, pannenkoeken, ...',
      desc2: 'Mogelijkheid tot ontbijt.',
    },
  },
}


export default class ArtisansPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>

        <CustomTitle title={strings.intro.title}
                     desc={strings.intro.text} />

        <Card>
          <CardTitle title={strings.canteen.title}
                     subtitle={strings.canteen.subtitle} />
          <CardText>
            {strings.canteen.desc}
          </CardText>
        </Card>

      </div>
    );
  }
}
