import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {red500, brown500} from 'material-ui/styles/colors';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';

import CustomTitle from '../Cards/CustomTitle';


class LinkedImage extends React.Component {
  render() {
    return (
      <a href={this.props.src} target="_blank">
        <img src={this.props.src}
             height={this.props.height}
             style={this.props.style}
        />
      </a>
    );
  }
}

const i18n_strings = {
  fr: {
    intro: {
      title: 'Marché des Luthiers',
      text: 'Le marché des luthiers regroupe de nombreux fabricants d\'instruments de musique',
    },
    luthiers: {
      title: 'Marché des luthiers',
      text: (
       <div>
        <p>
        J-Cl Condi (<a href="http://www.nyckelharpa-condi.com">www.nyckelharpa-condi.com</a>, nyckelharpa, archets, cordes,...)
        </p>
        <p>
        Gilles Garneret (<a href="http://www.anchesetcuirs.fr">www.anchesetcuirs.fr</a>)
        </p>
        <p>
        Pierre Kieffer (La Bonne Franquette, psaltérion)
        </p>
        <p>
        J-M Pâque (accordéon, basse au pied,...)
        </p>
        <p>
        Pierre Thouvenin (Pierrot accordéon)
        </p>
        <p>
        Peter Verhoeven (<a href="http://www.peterkyn.be">www.peterkyn.be</a>, épinette) : propose un cours d'initiation le dimanche 11 septembre, heure à préciser
        </p>
        <p>
          Lutherie HAFFNER (<a href="http://lutherie-haffner.wix.com/lutherie">lutherie-haffner.wix.com/lutherie</a>, Epinettes des Vosges et dulcimers)
        </p>
       </div>
      ),
    },
    accordeons_viseur: {
      title: 'Accordéons Viseur',
      text: (
        <div>
          <p>
            Iwein Jacobs, accordéoniste passionné à l'origine de la création
            de “Accordéons Viseur, Magasin spécialiste de l’accordéon ainsi que de l’harmonica.
          </p>
          <LinkedImage src="/static/artisans/accordeons-viseur-poster1.jpg?v=2" height="250px"
               style={{marginRight: 5}} />
          <LinkedImage src="/static/artisans/accordeons-viseur-poster3.jpg" height="250px" />
        </div>
      ),
    },
  },
  en: {
    intro: {
      title: 'Instrument makers market',
      text: 'The festival is host to several artisans and other associations: instrument makers, clothes, shoes, jewels, Mains-Unies npo',
    },
    luthiers: {
      title: 'Instrument makers market',
      text: (
       <div>
        <p>
        J-Cl Condi (<a href="http://www.nyckelharpa-condi.com">www.nyckelharpa-condi.com</a>, nyckelharpa, bows, ropes,...)
        </p>
        <p>
        Gilles Garneret (<a href="http://www.anchesetcuirs.fr">www.anchesetcuirs.fr</a>)
        </p>
        <p>
        Pierre Kieffer (La Bonne Franquette, psaltérion)
        </p>
        <p>
        J-M Pâque (accordion, basse au pied,...)
        </p>
        <p>
        Pierre Thouvenin (Pierrot accordéon)
        </p>
        <p>
        Peter Verhoeven (<a href="http://www.peterkyn.be">www.peterkyn.be</a>, épinette) : proposes an introductory course on Sunday September 11th, hour to be specified
        </p>
        <p>
          Lutherie HAFFNER (<a href="http://lutherie-haffner.wix.com/lutherie">lutherie-haffner.wix.com/lutherie</a>, Epinettes des Vosges et dulcimers)
        </p>
       </div>
      ),
    },
    accordeons_viseur: {
      title: 'Accordéons Viseur',
      text: (
        <div>
          <p>
            Following a passion for accordeon, <i>Accordeons Viseur</i> -
            specialist in accordions and harmonicas, was created in 2003.
          </p>
          <LinkedImage src="/static/artisans/accordeons-viseur-poster1.jpg?v=2" height="250px"
               style={{marginRight: 5}} />
          <LinkedImage src="/static/artisans/accordeons-viseur-poster3.jpg" height="250px" />
        </div>
      ),
    },
  },
  nl: {
    intro: {
      title: 'Markt van instrument makers',
      text: 'Het festival is gastheer voor kunstenaars en diverse verenigingen : instrument makers, kleren, schoenen, juwelen, Mains-Unies vzw',
    },
    luthiers: {
      title: 'Markt van instrument makers',
      text: (
       <div>
        <p>
        J-Cl Condi (<a href="http://www.nyckelharpa-condi.com">www.nyckelharpa-condi.com</a>, nyckelharpa, strijkstok, touwen,...)
        </p>
        <p>
        Gilles Garneret (<a href="http://www.anchesetcuirs.fr">www.anchesetcuirs.fr</a>)
        </p>
        <p>
        Pierre Kieffer (La Bonne Franquette, psaltérion)
        </p>
        <p>
        J-M Pâque (accordeon, basse au pied,...)
        </p>
        <p>
        Pierre Thouvenin (Pierrot accordéon)
        </p>
        <p>
        Peter Verhoeven (<a href="http://www.peterkyn.be">www.peterkyn.be</a>, épinette) : stelt een introductiecursus op zondag 11 september, uur te specificeren
        </p>
        <p>
          Lutherie HAFFNER (<a href="http://lutherie-haffner.wix.com/lutherie">lutherie-haffner.wix.com/lutherie</a>, Epinettes des Vosges et dulcimers)
        </p>
       </div>
      ),
    },
    accordeons_viseur: {
      title: 'Accordéons Viseur',
      text: (
        <div>
          <p>
            Vanuit een passie voor het accordeon, ontstond in 2003 “Accordeons Viseur”,
            de speciaalzaak in accordeons en mondharmonica’s.
          </p>
          <LinkedImage src="/static/artisans/accordeons-viseur-poster1.jpg?v=2" height="250px"
               style={{marginRight: 5}} />
          <LinkedImage src="/static/artisans/accordeons-viseur-poster2.jpg" height="250px" />
        </div>
      ),
    },
  },
}


export default class LuthiersPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>

        <CustomTitle title={strings.intro.title}
                     desc={strings.intro.text} />

        <Card>
          <CardTitle title={strings.luthiers.title}
                     subtitle="" />
          <CardText>
              {strings.luthiers.text}
          </CardText>
        </Card>

        <p/>

        <Card>
          <CardTitle title={strings.accordeons_viseur.title}
                     subtitle="" />
          <CardText>
            {strings.accordeons_viseur.text}
          </CardText>
          <RaisedButton label="accordeons-viseur.com" secondary={true}
                        style={{margin: 12}} href="http://www.accordeons-viseur.com/"
                        linkButton={true} />
          <RaisedButton label="email" secondary={true}
                        style={{margin: 12}} href="mailto:info@accordeons-viseur.com"
                        linkButton={true} />
          <RaisedButton label="(+32) 03 / 866 47 57" primary={true}
                        style={{margin: 12}} href="tel:+3238664757"
                        linkButton={true} />
        </Card>

      </div>
    );
  }
}
