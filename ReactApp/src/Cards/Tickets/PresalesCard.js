'use strict';
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const priceTagStyle = {
  height: 50,
  width: 100,
  margin: 20,
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};


export default class PresalesCard extends React.Component {
	render() {
		return (
      <Card style={{marginBottom: '1em'}}>
        <CardTitle title="Préventes"/>
        <CardText>

          <p>
            Le <b>Pass 3 jours</b> est disponible en prévente à un tarif
            avantageux. Il peut être obtenu sur internet via la plateforme
            <i> ticketscript </i> ou via le
            <a href="http://www.acte2.be/index.php/contacts"> Centre Culturel de Huy </a>
            (sur place ou par téléphone).
          </p>

          <div>
            <Paper zDepth={1} style={priceTagStyle}>
              <div>Normal</div>
              <span>48 €</span>
            </Paper>

            <Paper zDepth={1} style={priceTagStyle}>
              <div>12-25 ans</div>
              <span>38 €</span>
            </Paper>
          </div>

          <h3>Remarques</h3>
          <ul>
            <li>
              Les préventes sont disponibles jusqu'au <b>3 septembre</b> inclus
              - au delà de cette date, la réservation en ligne ne sera plus
              possible et il vous faudra acheter une votre billet sur place.
            </li>
            <li>
              Les préventes peuvent être obtenues via <i>ticketscript</i>
              <b> OU </b> via le <a href="http://www.acte2.be/index.php/contacts">
              Centre Culturel de Huy</a> (sur place ou par téléphone).
            </li>
            <li>
              Nous ne remboursons pas les préventes. En cas d’empêchement, il
              vous faut soit avoir pris l'assurance proposée par
              <i>ticketscript</i>, soit revendre ou donner la place.
            </li>
          </ul>

        </CardText>
      </Card>
		);
	}
}
