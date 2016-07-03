import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';

import CustomTitle from '../Cards/CustomTitle';

const i18n_strings = {
  fr: {
    title: 'Contact',
    subtitle: 'Contacter les organisateurs du festival',
    general_information: 'Informations générales',
    contact_a_team: 'Contacter une équipe',
  },
  en: {
    title: 'Contact',
    subtitle: 'Get in touch with the organizers',
    general_information: 'General information',
    contact_a_team: 'Contact a specific team',
  }
}


export default class ContactPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>
        <CustomTitle title={strings.title}
                   desc={strings.subtitle} />

        <Card>
          <CardTitle title="Association"
                     subtitle="" />
          <CardText>
            Le Folk Festival Marsinne est organisé par l'association
            <b> Musique et Traditions</b>.
            <p/>
            <Paper style={{padding: 10, width: 250}}>
              Musique et Traditions A.S.B.L.<br/>
              Rue de la Médaille 17<br/>
              4218 Couthuin-Héron<br/>
              Belgique<br/>
            </Paper>
          </CardText>
        </Card>
        <p/>
        <Card>
          <CardTitle title={strings.general_information}
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
        <p/>
        <Card>
          <CardTitle title={strings.contact_a_team}
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
            <ListItem
              primaryText="Site web"
              secondaryText="webmaster@folkfestivalmarsinne.be"
              leftIcon={<EmailOutlineIcon />}
            />
          </List>
        </Card>

      </div>
    );
  }
}
