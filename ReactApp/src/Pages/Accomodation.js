import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import CustomTitle from '../Cards/CustomTitle';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';


export default class VolunteerPage extends React.Component {

  render() {
    return (
      <div>
        <CustomTitle title="Hébergement" />

        <Card>
          <CardTitle title="Camping"
                     subtitle="" />
          <CardText>
            Le camping est gratuit et se situe juste en face de l'entrée du
            château-ferme. Il est ouvert à partir de 14h le vendredi..
            <p/>
            Comme l'espace est limité, et que vous y êtes plus nombreux,
            nous demandons de ne plus y placer les véhicules, pour réserver
            l'espace aux tentes. Merci de suivre les indications des bénévoles
            en toutes circonstances.
            <p/>
            Merci aussi de laisser libre le passage de sécurité au milieu de
            la prairie (ambulance, pompier).
            <p/>
            Ceux qui souhaitent dormir dans leur voiture sont priés de
            s'installer dans le parking des camping-car (sur graviers),
            à côté du chapiteau.
            <p/>
            Des douches chaudes gratuites sont installées sur le parking,
            à côté du camping.
          </CardText>
        </Card>

      </div>
    );
  }
}
