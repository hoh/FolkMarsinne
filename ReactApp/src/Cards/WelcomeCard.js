import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import {black, white, cyan50, cyan500, grey500, pink500, teal400, lime500, brown500, green200, amber800, lightGreen500, indigo500} from 'material-ui/styles/colors';

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
    subtitle: '25ème édition du Folk Festival de Marsinne',
    desc: 'Le festival accueille durant trois jours concerts, bals, théâtre de marionnettes, luthiers, artisans. Découvrez tous les ingrédients du plus ancien festival de musique traditionnelle de Wallonie !',
    desc2: 'Que ce soit pour le danseur invétéré ou le curieux d\'un jour, c\'est l\'endroit où se rendre pour profiter des musiques traditionnelles, dans un lieu calme et facile d\'accès. Un festival convivial, familial dans une ambiance unique et un lieu magnifique !',
    buttons: {
      progam: 'Programmation',
      volunteer: 'Devenir bénévole',
    },
    poster: 'Affiche 2016',
    flyer: 'Dépliant 2016',
    old_website: 'Ancien site',
    archives: 'Archives',
  },
  en: {
    title: 'Folk Festival in Marsinne, Belgium',
    subtitle: '25th edition of the Folk Festival in Marsinne',
    desc: 'The only one of its kind in Wallonia, the three-day long Folk Festival of Marsinne features balls, concerts, dancing workshops, a free stage, sessions, street and puppet theatre, as well as a market for instrument makers and craftsmen.',
    desc2: 'Whether you are an experienced dancer, an enthusiastic music lover or a one day passer-by, this is the place to be if you want to indulge in traditional music in a peaceful and easily accessible setting. Expect to find a friendly and family-oriented festival with a unique atmosphere and set in a spectacular location.',
    buttons: {
      progam: 'Program',
      volunteer: 'volunteer',
    },
    poster: 'Poster 2016',
    flyer: 'Flyer 2016',
    old_website: 'Old website',
    archives: 'Archives',
  },
  nl: {
    title: 'Folkfestival van Marsinne, Belgïe',
    subtitle: '25ste editie van Folkfestival van Marsinne',
    desc: 'Uniek in zijn soort in Wallonië biedt dit festival drie dagen lang concerten, dans, straattheater, poppentheater, fabrikanten van muziekinstrumenten, ambachtsmannen. Ontdek alle ingrediënten van het oudste traditionele muziekfestival in Wallonië !',
    desc2: 'Of het nu is voor de fanatieke danser of een nieuwsgierige van één dag, het is de plek om naartoe te gaan om van traditionele muziek te genieten in een rustige en goed bereikbare locatie. Een vriendelijk en familiaal festival in een unieke atmosfeer en prachtige omgeving !',
    buttons: {
      progam: 'Programma',
      volunteer: 'Vrijwilliger worden',
    },
    poster: 'Poster 2016',
    flyer: 'Flyer 2016',
    old_website: 'Voorige website',
    archives: 'Archieven',
  },
}

class WelcomeCard extends React.Component {
	render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

		return (
      <Card>
        <CardTitle title={strings.title}
                   subtitle={strings.subtitle} />
        <CardText>
          {strings.desc}
          <p/>
          {strings.desc2}
        </CardText>
        <CardText>
          <RaisedButton label="Facebook" backgroundColor={indigo500}
            labelColor='white' linkButton={true}
            href="https://www.facebook.com/Festival-Musiques-et-Traditions-104714328025/" />
          <RaisedButton label={strings.poster} secondary={true}
            labelColor='white' linkButton={true}
            style={{marginLeft: 10}}
            href="http://www.folkfestivalmarsinne.be/joomla35/images/phocagallery/2016/MARSINNE2016-Affiche.jpg" />
          <RaisedButton label={strings.flyer} secondary={true}
            labelColor='white' linkButton={true}
            style={{marginLeft: 10}}
            href="/static/files/MARSINNE2016-Flyer.pdf" />
          <RaisedButton label={strings.old_website} backgroundColor={cyan500}
            labelColor='white' linkButton={true}
            style={{marginLeft: 10}}
            href="http://www.folkfestivalmarsinne.be/joomla35/index.php/" />
          <RaisedButton label={strings.archives} backgroundColor={cyan500}
            labelColor='white' linkButton={true}
            style={{marginLeft: 10}}
            href="http://www.folkfestivalmarsinne.be/joomla35/index.php/fr/archives" />
        </CardText>
      </Card>
		);
	}
}

export default WelcomeCard;
