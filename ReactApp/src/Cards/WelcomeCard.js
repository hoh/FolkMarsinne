import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import {black, white, cyan50, cyan500, grey500, pink500, teal400, lime500, brown500, green200, amber800, lightGreen500} from 'material-ui/styles/colors';

const style = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  color: white,
  backgroundColor: cyan50,
  fontFamily: '\'Dancing Script\', cursive',
  fontSize: 18
};

const paperStyle = {
  fontSize: 35,
  marginTop: 35,
};

const i18n_strings = {
  fr: {
    title: 'Festival Folk à Marsinne, Belgique',
    desc: 'Le festival accueille durant trois jours concerts, bals, théâtre de rue et de marionnettes, luthiers, artisans. Découvrez tous les ingrédients du plus ancien festival de musique traditionnelle de Wallonie !',
    buttons: {
      progam: 'Programmation',
      volunteer: 'Devenir bénévole',
    }
  },
  en: {
    title: 'Folk Festival in Marsinne, Belgium',
    desc: 'The only one of its kind in Wallonia, the three-day long Folk Festival of Marsinne features balls, concerts, dancing workshops, a free stage, sessions, street and puppet theatre, as well as a market for instrument makers and craftsmen.',
    buttons: {
      progam: 'Program',
      volunteer: 'volunteer',
    }
  }
}

class WelcomeCard extends React.Component {
	render() {
    var strings = i18n_strings[this.props.lang];

		return (
      <Card>
        <CardTitle title={strings.title}
                   subtitle="25ème édition du Folk Festival de Marsinne" />
        <CardText>
          {strings.desc}
        </CardText>
      </Card>
		);
	}
}

export default WelcomeCard;
