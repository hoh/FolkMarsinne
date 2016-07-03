import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CustomTitle from '../Cards/CustomTitle';
import Paper from 'material-ui/Paper';


export default class AccessPage extends React.Component {

  render() {
    return (
      <div>
        <CustomTitle title="Accéder au festival" />

        <Card>
          <CardTitle title="Site du festival"
                     subtitle="" />
          <CardText>
            <Paper style={{padding: 10, width: 200}}>
              Château-ferme de Marsinne<br/>
              Rue de la Médaille 17<br/>
              4218 Couthuin - Héron<br/>
              Belgique
            </Paper>
            <p>
              Coordonnées GPS : <a href="geo:50.529371,5.117713">50.529371,5.117713</a> <br/>
              (ou 50°31'45.74"N & 5° 7'3.78"E)
            </p>
          </CardText>
        </Card>
        <p/>
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
        <p/>
        <Card>
          <CardTitle title="En voiture"
                     subtitle="" />

          <CardText>
            <h3 style={{marginTop: '0px'}}>Parking</h3>
            Une large zone de parking totalement gratuit est prévue, ainsi que le long du chemin de remembrement (rue de Couthuin). Merci de respecter les voisins, le passage et les demandes des bénévoles responsables de la circulation. Garez-vous en épi, le plus près possible les uns des autres.
            <p/>
            Le parking « handicapés » est prévu dans le bout de la rue de la médaille, côté rue de Marsinne, avant les guichets.
          </CardText>

          <CardText>
            <h3 style={{marginTop: '0px'}}>Directions</h3>
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
