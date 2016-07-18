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
      subtitle: 'Un grand choix de restauration est proposé sur place aux festivaliers',
      desc: (
        <div>
          <p>
          <b>En extérieur, sous le car-port</b>
          </p>
          <p>
          Cuisine bio, saine et gourmande : "Epices émoi" (Malonne)
          </p>
          <p>
          Couscous
          </p>
          <p>
          Croque-monsieurs spéciaux : "Studio Corben"
          </p>
          <p>
          Crêpes salées et sucrées
          </p>
          <p>
          Glace artisanale
          </p>
          <p>
          <b>Dans la grande salle de restauration (bar)</b>
          </p>
          <p>
          RestaurationFrites et Repas chauds complets cuisinés sur place : "Guimauve"
          </p>
          <p>
          Possibilité de petit-déjeuner
          </p>
        </div>
     ),
    },
  },
  en: {
    intro: {
      title: 'Catering',
      text: 'Starting Friday at 7pm',
    },
    canteen: {
      title: 'Cuisine of the festival',
      subtitle: 'A lot of food choice are available in the festival area',
      desc: (
        <div>
          <p>
          <b>Outside, under the car-port</b>
          </p>
          <p>
          Bio, healthy and gourmet cuisine : "Epices émoi" (Malonne)
          </p>
          <p>
          Couscous
          </p>
          <p>
          Croque-monsieurs : "Studio Corben"
          </p>
          <p>
          Salted and sweet pancakes
          </p>
          <p>
          Home-made ice cream
          </p>
          <p>
          <b>In the big hall (bar)</b>
          </p>
          <p>
          Chips and full hot meals prepared on the spot : "Guimauve"
          </p>
          <p>
          Breakfast also possible
          </p>
        </div>
     ),
    },
  },
  nl: {
    intro: {
      title: 'Eten',
      text: 'Vanaf vrijdag om 19u',
    },
    canteen: {
      title: 'De festival keuken',
      subtitle: 'Er is een grote verscheidenheid aan maaltijden/snacks voorzien',
      desc: (
        <div>
          <p>
          <b>Buiten, onder de car-port</b>
          </p>
          <p>
          Biologische, gezonde en fijnproever keuken : "Epices émoi" (Malonne)
          </p>
          <p>
          Couscousschotels
          </p>
          <p>
          Croque-monsieurs : "Studio Corben"
          </p>
          <p>
          Zoute en zoete pannenkoeken
          </p>
          <p>
          Ambachtelijk ijs
          </p>
          <p>
          <b>In the grote zaal (bar)</b>
          </p>
          <p>
          Frieten en volledige warme maaltijden ter plekke bereid : "Guimauve"
          </p>
          <p>
          Mogelijkheid tot ontbijt
          </p>
        </div>
     ),
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
