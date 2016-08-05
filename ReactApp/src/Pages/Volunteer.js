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
      intro: (
        <p>
          Comme chaque année, nous sommes à la recherche de bénévoles pour
          réaliser toute une série de tâches (montage et démontage du site, vente aux caisses des bracelets d'entrée et des jetons de boissons,
          service au bar, contrôle, circulation,...).
        </p>
      ),
      closed: (
        <p>
          Il n'est pas encore possible de t'inscrire, mais reste attentif!
          Les inscriptions seront annoncées sur cette page et
          sur <a href='https://www.facebook.com/events/649129711905158/'>l'événement facebook du festival</a>.
        </p>
      ),
      open: (
        <div>
          <p>
            Les bénévoles ont le libre choix des tâches, des moments de travail et de la quantité de travail.
          </p>
          <p>
            Comment faire partie de cette équipe de choc?
          </p>
          <ol>
            <li>
              Créer un compte sur <a href="http://www.folkfestivalmarsinne.be/ben/index.php" target="_blank">cette page</a>.
            </li>
            <li>
              Attendre le courriel* annonçant l'activation du compte.
            </li>
            <li>
              Se connecter à l'aide du compte créé en 1 à l'adresse renseignée
              dans le courriel et composer son horaire.
            </li>
          </ol>
          <p>
            SI TU AS DES AMIS QUI SERAIENT INTÉRESSÉS: n'hésite pas à les faire
            participer au bénévolat! Plus on est de fous plus on rit!
          </p>
          <p>
            <b>Note:</b> Simon, le responsable bénévoles, part à l'étranger du 9 au 21 août,
            aucune validation n'aura lieu dans cette période.
          </p>
        </div>
      ),
      text: (<div>
        <p>
          Pour toute information sur le bénévolat tu peux contacter Simon
          via <a href='mailto:benevolat@folkfestivalmarsinne.be'>benevolat@folkfestivalmarsinne.be</a>
        </p>
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
          Alors le montage et le démontage de Marsinne sont faits pour toi !
        </CardText>

        <CardText>
          Cette année encore, nous réalisons un partenariat
          avec <a href="https://www.javva.org/">JAVVA</a> pour organiser un
          Chantier international.
          Une dizaine de jeunes venus du monde entier viennent pour découvrir notre
          région et notre festival en mettant la main à la pâte.
        </CardText>

        <CardText>
          Le montage commence le lundi 5 septembre et se termine le vendredi 9 septembre avant les premiers concerts.
          Le démontage commence le lundi 12/09 et termine le jeudi 15/09.
          Tu ne sais venir que quelques jours ? Pas de soucis, tu restes le bienvenu.
          Mais sache que si les places viennent à manquer, ceux qui sont disponibles pour le
          plus de journées d’affilées auront la priorité.
        </CardText>

        <CardText>
          Il reste encore une quinzaine de places, ne tarde pas à nous contacter
          pour en savoir plus et t'inscrire en envoyant un email
          à <a href='mailto:chantierjeunes@folkfestivalmarsinne.be'>chantierjeunes@folkfestivalmarsinne.be</a> !
        </CardText>

        <CardText>
          Tenté(e) ? N’hésite plus et rejoins-nous !
        </CardText>
      </div>)
    }
  },
  en: {
    title: 'Volunteers',
    local: {
      title: 'Volunteering',
      subtitle: 'Take part to the festival life',
      register: 'Contact Simon',
      intro: (
        <div>
          <p>
            As each year, we are looking for volunteers to help us in fulfilling a lot of practical tasks
            (assembly and dismantling of the site, sale of entry-bracelets and drink tokens, service at the bar, control, traffic, ...).
          </p>
          <p>
            Because most visitors speak French, we require all volunteers during
            the festival to have a strong knowledge of French. If you are not fluent
            in French, have a look at the <i>International voluntary camp</i> below.
          </p>
        </div>
      ),
      closed: (
        <p>
          You can't register at the moment, but stay tuned !
          The registrations will be announced on this page and on
          <a href='https://www.facebook.com/events/649129711905158/'>the facebook event of the festival</a>.
        </p>
      ),
      open: (
        <div>
          <p>
            Volunteers are free to choose the tasks they do, when they do them and how much they contribute.
          </p>
          <p>
            How to join and participate the Dream Team ?
          </p>
          <ol>
            <li>
              Register on <a href="http://www.folkfestivalmarsinne.be/ben/index.php" target="_blank">this page</a>.
            </li>
            <li>
              Wait for the email that confirms your account has been activated.
            </li>
            <li>
              There will be a link in the email, login with your account on that
              page and create your own schedule.
            </li>
          </ol>
          <p>
            It's always more fun with friends, so don't hesitate to ask yours
            to join too. The more the merrier!
          </p>
          <p>
            <b>Note:</b> Simon, in charge of volunteers, will be on holidays from
            August 9th to 21th, so there won't be any validation during that
            period.
          </p>
        </div>
      ),
      text: (<div>
        <p>
          To get any information on the volunteering, you can contact Simon by email
          <a href='mailto:benevolat@folkfestivalmarsinne.be'>benevolat@folkfestivalmarsinne.be</a>
        </p>
      </div>),
    },
    international: {
      title: 'International voluntary camp',
      subtitle: 'Young people from around the world',
      register: 'Registration',
      to_planning: 'Planning of the registred volunteers',
      text: (<div>
        <CardText>
          You want to live a festival from the inside ? To participate to its installation ?
          To meet young people from other countries and to be a member of a team ?
          Possibly to get a free entrance to the festival (yes yes, this also matters) ?
          Then the assembly and the dismantling of the Marsinne folk festival are made for you!
        </CardText>

        <CardText>
          Once again this year, we have a partnership with <a href="https://www.javva.org/">JAVVA</a>
          to organize an international voluntary camp.
          About ten young people come from around the world to discover our region
          and our festival by putting their shoulder to the wheel.
        </CardText>

        <CardText>
          The assembly begins on Monday 5th of September and ends on Friday 9th of September before the first concerts.
          The dismantling begins on Monday 12 of September and ends on Thursday 15 of September.
          You can participate only a few days ? No worries, you are heartfully welcome.
          But pay attention that if places are running out, people who are available for the longest period will have the priority.
        </CardText>

        <CardText>
          About fifteen places are left at the moment, don't wait to contact us to know more about it and to register by sending an email
          to <a href='mailto:chantierjeunes@folkfestivalmarsinne.be'>chantierjeunes@folkfestivalmarsinne.be</a> !
        </CardText>

        <CardText>
          Interested ? Do not hesitate any more and join us !
        </CardText>
      </div>)
    }
  },
  nl: {
    title: 'Vrijwilligers',
    local: {
      title: 'Vrijwilliger worden',
      subtitle: 'Deelnemen aan het leven van het festival',
      register: 'Simon contacteren',
      intro: (
        <div>
          <p>
            Zoals ieder jaar zijn we ook nu op zoek naar vrijwilligers voor de realisatie van een heleboel
            taken (opbouw en ontmanteling van de site, verkoop aan de kassa van toegangsarmbandjes en drank jetons,
            bar, controle, vlotte circulatie, …)
          </p>
          <p>
            Het is belangrijk dat alle vrijwilligers vloeiend kunnen spreken Frans.
            Als je niet vloeiend in het Frans, neem een kijkje op de
            <i>International vrijwillige kamp </i> hieronder.
          </p>
        </div>
      ),
      closed: (
        <p>
          Je kan je op dit ogenblik nog niet inschrijven, maar blijf wel alert. De inschrijvingen worden op deze pagina aangekondigd
          en ook via <a href='https://www.facebook.com/events/649129711905158/'>het festival facebook event</a>.
        </p>
      ),
      open: (
        <div>
          <p>
            Les bénévoles ont le libre choix des tâches, des moments de travail et de la quantité de travail.
          </p>
          <p>
            Comment faire partie de cette équipe de choc?
          </p>
          <ol>
            <li>
              Créer un compte sur <a href="http://www.folkfestivalmarsinne.be/ben/index.php" target="_blank">cette page</a>
            </li>
            <li>
              Attendre le courriel* annonçant l'activation du compte.
            </li>
            <li>
              Se connecter à l'aide du compte créé en 1 à l'adresse renseignée
              dans le courriel et composer son horaire.
            </li>
          </ol>
          <p>
            SI TU AS DES AMIS QUI SERAIENT INTÉRESSÉS: n'hésite pas à les faire
            participer au bénévolat! Plus on est de fous plus on rit!
          </p>
          <p>
            Simon, le responsable bénévoles, part à l'étranger du 9 au 21 août,
            aucune validation n'aura lieu dans cette période.
          </p>
        </div>
      ),
      text: (
        <div>
          Voor alle informatie omtrent het vrijwilligerswerk kan je terecht bij Simon
          via <a href='mailto:benevolat@folkfestivalmarsinne.be'>benevolat@folkfestivalmarsinne.be</a>
        </div>
      ),
    },
    international: {
      title: 'Internationaal vrijwilligerskamp',
      subtitle: 'Jongeren uit de hele wereld',
      register: 'Zich inscrijven',
      to_planning: 'Planning van de ingeschreven vrijwilligers',
      text: (<div>
        <CardText>
         Heb je zin om een festival van binnenuit te beleven ? Om mee te werken aan zijn hele installatie ?
         Om jongeren uit andere landen te ontmoeten en om deel uit te maken van een ploeg ?
         Om eventueel een gratis toegangsticket voor het festival te ontvangen (ja, dat kan ook!) ?
         Wel, engageer je dan voor de opbouw en ontmanteling van het Marsinne folk festival.
        </CardText>

        <CardText>
          Dit jaar realiseren wij een partnerschap met <a href="https://www.javva.org/">JAVVA</a> om een ‘Internationaal vrijwilligerskamp’ op te zetten.
          Een tiental jongeren uit de hele wereld komen om onze streek en ons festival te ontdekken
          en hun handen uit de mouwen te steken.
        </CardText>

        <CardText>
          De opbouw begint op maandag 5 september en eindigt op vrijdag 9 september vóór de eerste optredens.
          De ontmanteling start op maandag 12 september en eindigt op donderdag 15 september.
          Kan je slechts enkele dagen komen ? Geen probleem, je blijft van harte welkom.
          Maar houd er wel rekening mee dat, in geval van plaatsgebrek, we voorkeur zullen geven aan zij die beschikbaar zijn
          voor de langste periode.
        </CardText>

        <CardText>
          Er blijven momenteel nog zo’n 15 plaatsen over.
          Aarzel niet om ons te contacteren voor meer info hierover en om je in te schrijven
          per mail naar <a href='mailto:chantierjeunes@folkfestivalmarsinne.be'>chantierjeunes@folkfestivalmarsinne.be</a> !
        </CardText>

        <CardText>
          Aarzel niet. Vervoeg ons !
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
           <CardText>
             {strings.local.intro}
             {strings.local.open}
             {strings.local.text}
           </CardText>
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
            {/*
              <RaisedButton label={strings.international.to_planning} secondary={true}
              labelColor='white' linkButton={true}
              style={{marginLeft: 10}}
              href="http://www.folkfestivalmarsinne.be/joomla35/images/phocagallery/2016/MARSINNE2016-Affiche.jpg" />
              */}
          </CardText>
        </Card>

      </div>
    );
  }
}
