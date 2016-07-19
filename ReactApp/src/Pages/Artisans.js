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
      text: 'Le festival héberge plusieurs artisans et autres associations : luthiers, vêtements, chaussures, bijoux, Mains-Unies asbl',
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
        Iwein Jacobs (<a href="http://www.accordeons-viseur.com">www.accordeons-viseur.com</a>)
        <img src="/static/artisans/advertentie A4 kleur chrom_300 dpi.jpg"/>
        </p>
       </div>
      ),
    },
    mainsunies: {
      title: 'Mains Unies - Mettez du Folk dans vos vacances !',
      text: (
        <div> 
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
       </div>
      ),
    },
  },
  en: {
    intro: {
      title: 'Artisans',
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
        Iwein Jacobs (<a href="http://www.accordeons-viseur.com">www.accordeons-viseur.com</a>)
        <img src="/static/artisans/advertentie A4 kleur chrom_300 dpi.jpg"/>
        </p>
       </div>
      ),
    },
    mainsunies: {
      title: 'Mains Unies - Put Folk in your holidays !',
      text: (
       <div>
         <p>
         Every summer, <b>MAINS UNIES</b> organises <b>participative stays</b> in <b>natural sites</b>. 
              Accompanied by volunteers, 50 to 80 participants organize the activities.
            </p>
            <p>
              <b>And every evening offers its folk ball !</b> Children and adults discover or practice dancing accompagnied by experienced musicians animators !
            </p>
            <p>
              Whether lodging in a tent or a holiday home, this experience will seduce those seeking authenticity and genuine encounters !
            </p>
       </div>
      ),
    },
  },
  nl: {
    intro: {
      title: 'Kunstenaars',
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
        Iwein Jacobs (<a href="http://www.accordeons-viseur.com">www.accordeons-viseur.com</a>)
        <img src="/static/artisans/advertentie A4 kleur_300 dpi.jpg"/>
        </p>
       </div>
      ),
    },
    mainsunies: {
      title: 'Mains Unies -  Zet in op Folk voor je vakantie !',
      text: (
        <div>
            <p>
            Elke zomer biedt <b>MAINS UNIES participatieve uitstapjes </b> aan in een mooi natuurkader. 
            Begeleid door vrijwilligers kunnen 50 tot 80 deelnemers verschillende activiteiten organizeren.
            </p>
            <p>
            <b>En iedere avond is er volksbal !</b> . Klein en groot kan dan deelnemen met het dansen onder leiding van ervaren muzikanten en animators. 
            </p>
            <p>
            Onder tent of in vakantiehuis, een formule die de liefhebbers van authenticiteit en vergaderingen !
            </p>
        </div>
      ),
    },
  },
}


export default class ArtisansPage extends React.Component {

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
          
          <Card>
          <CardTitle title={strings.mainsunies.title}
                     subtitle="" />
          <CardText>
            <img src="/static/artisans/mains-unies.jpg" width="250px"
                 style={{float: 'right'}} />
            {strings.mainsunies.text}
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
