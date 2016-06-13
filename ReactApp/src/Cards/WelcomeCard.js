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
  fontFamily: "'Dancing Script', cursive",
  fontSize: 18
};

const paperStyle = {
  fontSize: 35,
  marginTop: 35,
};

class WelcomeCard extends React.Component {
	render() {
		return (
      <Card>
        <CardTitle title="Trois jours de festival, les 9-10-11 septembre 2016"
                   subtitle="25ème édition du Folk Festival de Marsinne" />
        <CardText>
          <p>
            Bienvenue sur le site du Folk Festival de Marsinne, organisé par l&apos;a.s.b.l. Musiques et Traditions!
          </p>
          <p>
            Ce festival accueille durant trois jours concerts, bals, théâtre de rue et de marionnettes, luthiers, artisans. Découvrez tous les ingrédients du plus ancien festival de musique traditionnelle de Wallonie !
          </p>

          <RaisedButton label="Programmation" primary={true} style={{margin: 12}} />
          <RaisedButton label="Animations" secondary={true} style={{margin: 12}} />
          <RaisedButton label="Tickets" style={{margin: 12}} backgroundColor={grey500}/>
          <RaisedButton label="Devenir Bénévole" primary={true} style={{margin: 12}} />
        </CardText>
      </Card>
		);
	}
}

export default WelcomeCard;
