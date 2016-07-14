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
      title: 'Artisans',
      text: 'Le festival héberge plusieurs artisans et autres associations',
    },
    mainsunies: {
      title: 'Mains Unies - Mettez du Folk dans vos vacances !'
      text: (
         <p>
         Chaque été, <b>MAINS UNIES</b> propose des <b>séjours participatifs</b> dans des <b>sites naturels</b>. 
         Accompagnés par des bénévoles, 50 à 80 participants organisent les activités.
         </p>
         <p>
         <b>Et tous les soirs, bal folk !</b> Petits et grands découvrent ou pratiquent la danse avec des musiciens et animateurs chevronnés !
         </p>
         <p>
         Sous tente ou en gîte, une formule qui séduira les amateurs d'authenticité et de rencontres !
         </p>
      ),
    },
    bourse: {
      title: 'Bourse musicale'
      text: (
         <p>
         Deux musiciens de confiance, <b>André Deru</b> et <b>Thierry Legros</b> (du groupe Salon Ambroisine), proposent cette année une bourse musicale à Marsinne.
        </p>
        <p>
        <b>Vous souhaitez vendre un « objet musical ?»</b> 
        </p>
        <p>
        Venez le confier à ce stand pour la journée (reprise à 18h30 au plus tard). Indiquez le prix demandé ou/et un numéro de gsm où l'acheteur potentiel pourrait vous joindre.
        André Deru et Thierry Legros accueilleront les dépôts avec la plus grande attention et veilleront de leur mieux à ce que ces objets ne subissent aucun dégât. 
        Cependant, ils ne pourront être tenus pour responsables en cas de dégât ou de vol.
        </p>
        <p>
        <b>Vous souhaitez acheter un « objet musical ?»</b> 
        </p>
        <p>
        Acquittez-vous du prix demandé ou, s'il y a lieu, contactez le vendeur.
        </p>
      ),
    },
  },
  en: {
    intro: {
      title: 'Artisans',
      text: 'The festival is host to several artisans and other associations',
    },
    mainsunies: {
      title: 'Mains Unies - Mettez du Folk dans vos vacances !'
      text: (
         <p>
              Chaque été, <b>MAINS UNIES</b> propose des <b>séjours participatifs</b> dans des <b>sites naturels</b>. 
              Accompagnés par des bénévoles, 50 à 80 participants organisent les activités.
            </p>
            <p>
              <b>Et tous les soirs, bal folk !</b> Petits et grands découvrent ou pratiquent la danse avec des musiciens et animateurs chevronnés !
            </p>
            <p>
              Sous tente ou en gîte, une formule qui séduira les amateurs d'authenticité et de rencontres !
            </p>)
    },
  },
  nl: {
    intro: {
      title: 'Artisans',
      text: 'Het festival is gastheer voor verschillende ambachtslieden en andere verenigingen',
    },
    mainsunies: {
      title: 'Mains Unies - Mettez du Folk dans vos vacances !'
      text: (
         <p>
              Chaque été, <b>MAINS UNIES</b> propose des <b>séjours participatifs</b> dans des <b>sites naturels</b>. 
              Accompagnés par des bénévoles, 50 à 80 participants organisent les activités.
            </p>
            <p>
              <b>Et tous les soirs, bal folk !</b> Petits et grands découvrent ou pratiquent la danse avec des musiciens et animateurs chevronnés !
            </p>
            <p>
              Sous tente ou en gîte, une formule qui séduira les amateurs d'authenticité et de rencontres !
            </p>)
    },
  }
}


export default class ArtisansPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>

        <CustomTitle title={strings.intro.title}
                     desc={strings.intro.text} />

        <Card>
          <CardTitle title={strings.bourse.title}
                     subtitle="" />
          <CardText>
        
        </Card>
        <Card>
          <CardTitle title="Mains Unies - Mettez du Folk dans vos vacances !"
                     subtitle="" />
          <CardText>
            <img src="/static/artisans/mains-unies.jpg" width="250px"
                 style={{float: 'right'}} />
            <p>
              Chaque été, <b>MAINS UNIES</b> propose des <b>séjours participatifs </b>
              dans des <b>sites naturels</b>. Accompagnés par des bénévoles,
              50 à 80 participants organisent les activités.
            </p>
            <p>
              <b>Et tous les soirs, bal folk !</b> Petits et grands découvrent ou
              pratiquent la danse avec des musiciens et animateurs chevronnés !
            </p>
            <p>
              Sous tente ou en gîte, une formule qui séduira les amateurs
              d'authenticité et de rencontres !
            </p>
          </CardText>
          <RaisedButton label="mainsunies.be" secondary={true}
                        style={{margin: 12}} href="http://www.mainsunies.be/"
                        linkButton={true} />
                      <RaisedButton label="02 / 344 46 53" primary={true}
            style={{margin: 12}} href="tel:+3223444653" linkButton={true} />
        </Card>

      </div>
    );
  }
}
