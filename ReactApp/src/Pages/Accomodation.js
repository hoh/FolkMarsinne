import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import CustomTitle from '../Cards/CustomTitle';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';

const i18n_strings = {
  fr: {
    title: "Hébergement",
    Accomodation: {
      title: "Camping",
      camping: (
      <p>
      Le camping est gratuit et se situe juste en face de l'entrée du château-ferme. Il est ouvert à partir de 14h le vendredi.
      <p/>
      Comme l'espace est limité, et que vous y êtes de plus en plus nombreux, nous vous demandons de ne plus y placer les véhicules, pour réserver
      l'espace aux tentes. Merci de suivre les indications des bénévoles en toutes circonstances.
      <p/>
      Merci aussi de laisser à tout moment libre le passage de sécurité au milieu de la prairie de camping (ambulance, pompier).
      <p/>
      Ceux qui souhaitent dormir dans leur voiture sont priés de s'installer dans le parking des camping-cars (sur les graviers), à côté du chapiteau.
      <p/>
      Des douches chaudes gratuites sont installées sur ce parking des camping-cars, à côté du camping.
      </p>
      ),
    },
  },
  en: {
    title: "Accomodation",
    accomodation: {
      title: "Camping",
      camping: (
      <p>
      Camping is free. The camping meadow is situated just in front of the entry of the castle-farm. It is open from 2:00 pm on Friday.
      <p/>
      As space is limited, and as more and more people are camping each year, we ask you not to enter the camping meadow with vehicles, in order to let maximum space for tents.
      Thank you for respecting indications given by volunteers in any circumstances.
      <p/>
      Thanks you for letting the security path in the middle of the camping meadow always free of any obstacle (ambulance, firemen).
      <p/>
      Those who want to sleep in their car are kindly asked to settle in the camping-cars parking (on the gravel), next to the marquee.
      <p/>
      Free warm showers are settled on this camping-cars parking, next to the camping meadow.
      </p>
      ),
    },
  },
  nl: {
    title: "Logeren",
    accomodation: {
      title: "Camping",
      camping: (
      <p>
      De camping is gratis en bevindt zich tegenover de ingang van de kasteelhoeve. Hij is open vanaf vrijdag om 14u.
      <p/>
      Aangezien de ruimte beperkt is en jullie meer en meer talrijk zijn, verzoeken we jullie om de auto’s daar niet te plaatsen en zo de ruimte vrij te laten voor andere tenten.
      In ieder geval onze dank om de aanwijzingen van onze vrijwilligers ter plekke op te volgen.
      <p/>
      Bedankt ook de veiligheidsweg in het midden van het camping weide altijd vrij te laten (ziekenwagen, brandweer).
      <p/>
      Degenen die in hun auto wensen te overnachten worden verzocht zich te installeren op de parking van de campingcars (op de grind), naast de tent.
      <p/>
      Er zijn ook gratis warme douches voorzien op de campingcars parking, naast de camping weide.
      </p>
      ),
    },
  },
}

export default class VolunteerPage extends React.Component {

  render() {
    return (
      <div>
        <CustomTitle title={strings.title} />

        <Card>
          <CardTitle title={strings.accomodation.title}
                     subtitle="" />
        <CardText>
          {strings.accomodation.camping}
        </CardText>
        </Card>

      </div>
    );
  }
}
