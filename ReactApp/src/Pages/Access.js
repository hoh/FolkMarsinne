import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CustomTitle from '../Cards/CustomTitle';
import Paper from 'material-ui/Paper';

const i18n_strings = {
  fr: {
    title: 'Accéder au festival',
    location: 'Site du festival',
    gps: 'Coordonnées GPS',
    transport: {
      title: 'En transport en commun',
      train: (
        <p>
          <b>En train</b>: rejoindre la gare d’Andenne
          (à 15 minutes de Namur) ou la gare de Huy
          (à 20 minutes de Liège) sur la ligne Namur-Liège :
          http://www.belgianrail.be/
        </p>
      ),
      bus: (
        <p>
          <b>En Bus</b>: Ligne 143 HUY - COUTHUIN - ANDENNE
          Peu de bus par jour, surtout le week-end, vérifiez les horaires :
          http://www.infotec.be/fr-be/medeplacer/horaires/ligne.aspx?ligne=L143
          Descendre à l'arrêt Couthuin, Rue de Marsinne.
          Marcher jusqu'au Château Ferme, Rue de la Médaille (7 min).
        </p>
      ),
    },
    car: {
      title: 'En voiture',
      parking_title: 'Car park',
      parking: (
        <div>
          <p>
            Une large zone de parking totalement gratuit est prévue, ainsi que le long du chemin de remembrement (rue de Couthuin). Merci de respecter les voisins, le passage et les demandes des bénévoles responsables de la circulation. Garez-vous en épi, le plus près possible les uns des autres.
          </p>
          <p>
            Le parking « handicapés » est prévu dans le bout de la rue de la médaille, côté rue de Marsinne, avant les guichets.
          </p>
        </div>
      ),
      directions: (
        <div>
          <p>
            Autoroute E42 Liège-Namur, sortie n° 8 "Huy/Héron"
          </p>
          <p>
            A la sortie, prendre la direction de Huy (N643 = Chaussée de Wavre direction Huy/Wanze/Héron) sur 600m.
          </p>
          <p>
            A la hauteur des garages Fiat, Citroën et Alfa Romeo, prendre la première à droite en direction de "Couthuin" (Rue de la Campagne).
          </p>
          <p>
            Continuer toujours tout droit et suivre les indications "Marsinne". A 1 km, vous verrez le chateau-ferme.
          </p>
        </div>
      ),
    }
  },
  en: {
    title: 'Accessing the festival',
    location: 'Festival location',
    gps: 'GPS coordinates ',
    transport: {
      title: 'With public transporation',
      train: (
        <p>
          <b>By train</b>: go to "Andenne" rail station (travel time: 15 minutes
            from Namur, 90 minutes from Brussels) or go to "Huy" rail station
            (travel time: 20 minutes from Liège). These station are accessible
            with the Belgium rail system, line 143 NAMUR-LIEGE.  The music
             festival is not directly accessible from these rail stations, you need to take a bus.
        </p>
      ),
      bus: (
        <div>
          <p>
            <b>By bus</b>: use the bus line 143 HUY-COUTHIN-ANDENNE
            Only few buses deserve this line every day, especially during the weekend,
            please check
            the <a href="http://www.infotec.be/fr-be/medeplacer/horaires/ligne.aspx?ligne=L143">schedule</a>.
          </p>
          <ul>
            <li>At the Andenne rail station: walk to the bus stop "Seilles Gare Routière", direction "Huy" (travel time: 12 minutes), Get off the bus at the stop "Couthin"
            </li>
            <li>At the Huy rail station: walk to the bus stop "Ecole Technique" (walking time: 8 minutes), direction "Andenne". Get off the bus at the stop "Couthuin, Rue de Marsinne" (travel time: 25 minutes)
            </li>
          </ul>
        </div>
      ),
    },
    car: {
      title: 'By car',
      parking_title: 'Car park',
      parking: (
        <div>
          <p>
            A wide free area is usable to park your car and it is also possible to park your car on the street. Please respect the neighborhood, don't park your car just in front of the houses. A group of volunteers will help you to park your car and maximize the use of the parking, please follow their instructions and try to save the available space.
          </p>
          <p>
            A special par king for low mobility person is available at the end of the street "rue de la médaille", just before the ticket check.
          </p>
        </div>
      ),
      directions: (
        <div>
          <p>
            highway E42 Liège-Namur, exit n° 8 "Huy/Héron"
          </p>
          <p>
            At the highway exit, continue straight to the city direction "Huy" (road number: N643, road name: Chaussée de Wavre, global direction: Huy/Wanze/Héron) 600 meters / 650 yards.
          </p>
          <p>
            Near Fiat, Citroën and Alfa Romeo garages,  turn right to the city direction "Couthuin" (road name: Rue de la Campagne).
          </p>
          <p>
            Continue straight and follow yellow or orange "Marsinne" road sign (see bellow) 1 kilometer / 1100 yards.  You will be able to see the castle-farm.  
          </p>
        </div>
      ),
    }
  },
  nl: {
    title: 'Bereikbaarheid',
    location: 'Festivalterrein',
    gps: 'GPS coördinaten',
    transport: {
      title: 'Onderweg',
      train: (
        <p>
          <b>Met de trein :</b> Tot het station van Andenne (15 minuten met de
          trein vanuit Namen) of tot het station van Huy (20 minuten met de
          trein vanuit Luik op de lijn Namen-Luik).
        </p>
      ),
      bus: (
        <div>
          <p>
            <b>Met de bus :</b>: Neem buslijn 143 "HUY – COUTHUIN – ANDENNE".
            Vooral in het weekend zijn er weinig bussen! Het uurrooster is te
            vinden op&nbsp;
            <a href="http://www.infotec.be/fr-be/medeplacer/horaires/ligne.aspx?ligne=L143">
              http://www.infotec.be/fr-be/medeplacer/horaires/ligne.aspx?ligne=L143
            </a>.
          </p>
          <p>
            Stap af aan de halte ‘Couthuin, Rue de Marsinne’. Daarna te voet tot het kasteel, Rue de la Médaille (7 min).
          </p>
          <ul>
            <li>Vanaf het station van Andenne naar de halte ‘Seilles Gare Routière’ in de richting van Huy. Stap af aan de bushalte ‘Couthuin, Rue de Marsinne’ (12 min ).
            </li>
            <li>Vanaf het station van Huy naar de halte ‘Ecole Technique’ (8 min) in de richting van Couthuin, Rue de Marsinne (25 min).
            </li>
          </ul>
        </div>
      ),
    },
    car: {
      title: 'Met de wagen',
      parking_title: 'Car park',
      parking: (
        <div>
          <p>
            Er is een grote parkingzone voorzien, helemaal gratis. Daarnaast is parkeren ook mogelijk langs de weg “rue de Couthuin”. Wij stellen het respect voor de buurtbewoners op prijs, het <u>respect voor een vlotte doorgang en voor de inzet van de vrijwilligers</u>, verantwoordelijk voor het verkeer. Parkeer schuin en zo dicht mogelijk bij elkaar.
          </p>
          <p>
            De parking voor gehandicapten ( andersvaliden) bevindt zich op het einde van de “ Rue de la Médaille”, aan de kant van de “Rue de Marsinne”, juist voor de loketten.
          </p>
        </div>
      ),
      directions: (
        <div>
          <p>
            Via E42 Luik-Namen, afrit 8 "Huy/Héron".
          </p>
          <p>
            Houd richting Huy aan gedurende 600m (N643 = Chaussée de Wavre richting Huy/Wanze/Héron).
          </p>
          <p>
            Neem de eerste straat rechts richting ‘Couthuin’ (Rue de la campagne) ter hoogte van garage Fiat, Citroën en Alfa Romeo.
          </p>
          <p>
            Steeds rechtdoor en volg de aanwijzingen naar Marsinne. Na 1 km ziet u de kasteelhoeve.
          </p>
        </div>
      ),
    }
  },
}

export default class AccessPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>
        <CustomTitle title={strings.title} />

        <Card>
          <CardTitle title={strings.location}
                     subtitle="" />
          <CardText>
            <Paper style={{padding: 10, width: 200}}>
              Château-ferme de Marsinne<br/>
              Rue de la Médaille 17<br/>
              4218 Couthuin - Héron<br/>
              Belgique
            </Paper>
            <p>
              {strings.gps} : <a href="geo:50.529371,5.117713">50.529371,5.117713</a> <br/>
              (ou 50°31'45.74"N & 5° 7'3.78"E)
            </p>
          </CardText>
        </Card>
        <p/>
        <Card>
          <CardTitle title={strings.transport.title}
                     subtitle="" />
          <CardText>
            {strings.transport.train}
            {strings.transport.bus}
          </CardText>
        </Card>
        <p/>
        <Card>
          <CardTitle title={strings.car.title}
                     subtitle="" />

          <CardText>
            <h3 style={{marginTop: '0px'}}>{strings.car.parking_title}</h3>
            {strings.car.parking}
          </CardText>

          <CardText>
            <h3 style={{marginTop: '0px'}}>Directions</h3>
            {strings.car.directions}
          </CardText>

          <img src="http://www.folkfestivalmarsinne.be/images/stories/PlanAcces.gif" />

          <a href="http://maps.google.com/maps?q=50%C2%B031%2745.74%22N,+5%C2%B0+7%273.78%22E&hl=fr&ie=UTF8&sll=37.0625,-95.677068&sspn=49.176833,79.013672&t=h&z=16">
            <img style={{width: '90%', textAlign: 'center'}} src="http://www.folkfestivalmarsinne.be/images/pratique/plansmall.png" />
          </a>
        </Card>
      </div>
    );
  }
}
