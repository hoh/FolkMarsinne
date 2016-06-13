import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';


export default class ContactPage extends React.Component {

  render() {
    return (
      <div>

        <Card>
          <CardTitle title="Contact"
                     subtitle="" />
          <CardText>
            <p>
              Le Folk Festival Marsinne est organisé par l'association
              <b> Musique et Traditions</b>.
              <pre>
                Musique et Traditions A.S.B.L.<br/>
                Rue de la Médaille 17<br/>
                4218 Couthuin-Héron<br/>
                Belgique<br/>
              </pre>
            </p>
          </CardText>
        </Card>

        <Card>
          <CardTitle title="Informations générales"
                     subtitle="" />
          <List>
            <ListItem
             primaryText="Email"
             secondaryText="info@folkfestivalmarsinne.be"
             leftIcon={<EmailIcon />}
             />
           <ListItem
             primaryText="Téléphone"
             secondaryText="+32 474 26 06 37"
             leftIcon={<EmailOutlineIcon />}
           />
          </List>
        </Card>

        <Card>
          <CardTitle title="Contacter une équipe"
                     subtitle="" />

          <List>
            <ListItem
              primaryText="Exposants, Luthiers, artisans"
              secondaryText="exposant@folkfestivalmarsinne.be"
              leftIcon={<EmailOutlineIcon />}
            />
            <ListItem
              primaryText="Bénévoles"
              secondaryText="benevolat@folkfestivalmarsinne.be"
              leftIcon={<EmailOutlineIcon />}
            />
            <ListItem
              primaryText="Sponsors"
              secondaryText="sponsoring@folkfestivalmarsinne.be"
              leftIcon={<EmailOutlineIcon />}
            />
            <ListItem
              primaryText="Programmation"
              secondaryText="programmation@folkfestivalmarsinne.be"
              leftIcon={<EmailOutlineIcon />}
            />
            <ListItem
              primaryText="Affichage"
              secondaryText="affichage@folkfestivalmarsinne.be"
              leftIcon={<EmailOutlineIcon />}
            />
            <ListItem
              primaryText="Environnement"
              secondaryText="environnement@folkfestivalmarsinne.be"
              leftIcon={<EmailOutlineIcon />}
            />
          </List>
        </Card>

      </div>
    );
  }
}
