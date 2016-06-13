import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class AccessPage extends React.Component {

  render() {
    return (
      <div>

        <Card>
          <CardTitle title="Accéder au festival"
                     subtitle="" />
          <CardText>
            <p>
              <pre>
                Château-ferme de Marsinne<br/>
                Rue de la Médaille 17<br/>
                4218 Couthuin - Héron<br/>
                Belgique
              </pre>
            </p>
            <p>
              Coordonnées GPS : 50.529371,5.117713 ou 50°31'45.74"N & 5° 7'3.78"E
            </p>
          </CardText>
        </Card>

        <Card>
          <CardTitle title="En transport en commun"
                     subtitle="" />
          <CardText>
            <p>
              <b>En train</b>: rejoindre la gare d’Andenne
              (à 15 minutes de Namur) ou la gare de Huy
              (à 20 minutes de Liège) sur la ligne Namur-Liège :
              http://www.belgianrail.be/
            </p>
            <p>
              <b>En Bus</b>: Ligne 143 HUY - COUTHUIN - ANDENNE
              Peu de bus par jour, surtout le week-end, vérifiez les horaires :
              http://www.infotec.be/fr-be/medeplacer/horaires/ligne.aspx?ligne=L143
              Descendre à l'arrêt Couthuin, Rue de Marsinne.
              Marcher jusqu'au Château Ferme, Rue de la Médaille (7 min).
            </p>
            <ul>
              <li>A la gare d'Andenne: rejoindre l'arrêt "Seilles Gare Routière" direction Huy jusqu'à l'arrêt à Couthuin (12 min)</li>
              <li>A la gare de Huy rejoindre l'arrêt "Ecole Technique" (8 min), direction Andenne jusqu'à l'arrêt à Couthuin Rue de Marsinne (25 min)</li>
            </ul>
          </CardText>
        </Card>

        <Card>
          <CardTitle title="En voiture"
                     subtitle="" />
          <CardText>
            Autoroute E42 Liège-Namur, sortie n° 8 "Huy/Héron"
            A la sortie, prendre la direction de Huy (N643 = Chaussée de Wavre direction Huy/Wanze/Héron) sur 600m.
            A la hauteur des garages Fiat, Citroën et Alfa Romeo, prendre la première à droite en direction de "Couthuin" (Rue de la Campagne).
            Continuer toujours tout droit et suivre les indications "Marsinne". A 1 km, vous verrez le chateau-ferme.
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
