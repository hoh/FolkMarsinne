import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';

import CustomTitle from '../Cards/CustomTitle';


const i18n_strings = {
  fr: {
    title: 'Bénévoles',
    local: {
      title: 'Devenir bénévole',
      subtitle: 'Participer à la vie du festival',
      register: 'Contacter Simon',
      text: (<div>
        <CardText>
          Comme chaque année, nous sommes à la recherche de bénévoles pour
          réaliser toute une série de tâches (montage et démontage du site, vente au bar,
          vente aux caisses bracelets et jetons, contrôle, circulation,...).
          <p/>
          Il n'est pas encore possible de t'inscrire, mais reste attentif!
          Les inscriptions seront annoncées sur cette page et
          sur <a href='https://www.facebook.com/events/649129711905158/'>l'événement facebook du festival</a>.
          <p/>
          Pour toute information sur le bénévolat tu peux contacter Simon
          via <a href='mailto:benevolat@folkfestivalmarsinne.be'>benevolat@folkfestivalmarsinne.be</a>
        </CardText>
      </div>),
    },
    international: {
      title: 'Chantier international',
      subtitle: 'Jeunes du monde entier',
      register: 'S\'inscrire',
      to_planning: 'Planning des bénévoles inscrits',
      text: (<div>
        <CardText>
          Tu as envie de vivre un festival de l’intérieur ? De participer à son installation ?
          De rencontrer des jeunes d’autres pays et de faire partie d'une équipe ?
          Eventuellement d’avoir une entrée gratuite au festival (oui oui, ça compte aussi) ?
          Alors le montage et le démontage de Marsinne sont fait pour toi !
        </CardText>

        <CardText>
          Cette année encore, nous réalisons un partenariat
          avec <a href="https://www.javva.org/">JAVVA</a> pour organiser un
          Chantier international.
          Une dizaine de jeunes venus du monde entier viennent pour découvrir notre
          région et notre festival en mettant la main à la pâte.
        </CardText>

        <CardText>
          Le montage commence le lundi 05/09 et se termine le vendredi 09/09 avant les premiers concerts.
          Le démontage commence le lundi 12/09 et termine le jeudi 15/09.
          Tu ne sais venir que quelque jours ? Pas de soucis, tu restes le bienvenu.
          Mais sache que si les places viennent à manquer, ceux qui sont disponibles pour le
          plus de journées d’affilées auront la priorité.
        </CardText>

        <CardText>
          Il reste encore une quinzaine de places, ne tarde pas à nous contacter
          pour en savoir plus et t'inscrire en envoyant un email
          à <a href='mailto:chantierjeunes@folkfestivalmarsinne.be'>chantierjeunes@folkfestivalmarsinne.be</a> !
        </CardText>

        <CardText>
          Tenté(e) ? N’hésite plus et rejoins nous.
        </CardText>
      </div>)
    }
  },
}


export default class VolunteerPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>
        <CustomTitle title={strings.title}
                   subtitle="" />

        <Card>
         <CardHeader
           title={strings.local.title}
           subtitle={strings.local.subtitle}
           avatar={null}
         />
         <div>
           {strings.local.text}
         </div>
         <CardText>
           <RaisedButton label={strings.local.register} primary={true}
             labelColor='white' linkButton={true}
             href="mailto:benevolat@folkfestivalmarsinne.be"
             />
         </CardText>
        </Card>

        <p/>

        <Card>
          <CardHeader
            title={strings.international.title}
            subtitle={strings.international.subtitle}
            avatar="/static/JAVVA.jpg"
          />
          <div>
            {strings.international.text}
          </div>
          <CardText>
            <RaisedButton label={strings.international.register} primary={true}
              labelColor='white' linkButton={true}
              href="mailto:chantierjeunes@folkfestivalmarsinne.be"
              />
            <RaisedButton label={strings.international.to_planning} secondary={true}
              labelColor='white' linkButton={true}
              style={{marginLeft: 10}}
              href="http://www.folkfestivalmarsinne.be/joomla35/images/phocagallery/2016/MARSINNE2016-Affiche.jpg" />
          </CardText>
        </Card>

      </div>
    );
  }
}
