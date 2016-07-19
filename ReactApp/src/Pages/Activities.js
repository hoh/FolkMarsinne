import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CustomTitle from '../Cards/CustomTitle';


const i18n_strings = {
  fr: {
    title: "Animations 2016",
    mabotte: {
      title: "Théâtre des Marionnettes de Mabotte",
      headline: "Théâtre de marionnettes liégeoises (Belgique - Wallonie) - Samedi et Dimanche / COUR",
      desc: "Un théâtre de marionnettes traditionnelles liégeoises: de quoi réjouir les plus jeunes d'entre nous! Le Théâtre Mabotte rassemble des professionnels qui perpétuent avec talent cette vieille tradition. Avec brio, alors venez les rejoindre!",
      website: "Site web"
    },
    maquillage: {
      title: "Maquillage pour enfants",
      headline: "(Belgique - Wallonie) - Samedi et Dimanche / MARCHÉ",
      desc: "Des oeuvres d'art éphémères sur les plus belles oeuvres d'art des parents, le temps pour les enfants de jouer à quelqu'un d'autre!",
      desc2: "Maquilleuse : Viviane Desmet"
    },
    initiation: {
      title: "Initiation à l'épinette",
      desc: "Le luthier <b>Peter Verhoeven</b> propose un cours d'initiation à l'épinette, le dimanche 11 septembre, heure à préciser",
    },
    bourse: {
      title: "Bourse musicale",
      desc: (
         <p>
         Deux musiciens de confiance, <b>André Deru</b> et <b>Thierry Legros</b> (du groupe Salon Ambroisine), proposent cette année une bourse musicale à Marsinne.
        </p>
        <p>
        <b>Vous souhaitez vendre un «objet musical» ?</b> 
        </p>
        <p>
        Venez le confier à ce stand pour la journée (reprise à 18h30 au plus tard). Indiquez le prix demandé ou/et un numéro de gsm où l'acheteur potentiel pourrait vous joindre.
        André Deru et Thierry Legros accueilleront les dépôts avec la plus grande attention et veilleront de leur mieux à ce que ces objets ne subissent aucun dégât. 
        Cependant, ils ne pourront être tenus pour responsables en cas de dégât ou de vol.
        </p>
        <p>
        <b>Vous souhaitez acheter un «objet musical» ?</b> 
        </p>
        <p>
        Acquittez-vous du prix demandé ou, s'il y a lieu, contactez le vendeur.
        </p>
      ),
    },
  },
  en: {
    title: "Revel 2016",
    mabotte: {
      title: "Mabotte Puppet Theatre",
      headline: "Puppet Theater from Liege (Wallonia) - Saturday and Sunday / COURTYARD",
      desc: "A traditional puppet theater from Liège has enough to delight the youngest among us. The Mabotte Theater brings together professionals who perpetuate this old tradition with talent. Brilliant! So come and join them!",
      website: "Website"
    },
    maquillage: {
      title: "Children make-up",
      headline: "(Belgium - Wallonia) - Saturday and Sunday / MARKET",
      desc: "Ephemeral works of art on the most beautiful artworks of parents, time for children to play someone else !",
      desc2: "Make-up artist : Viviane Desmet"
    },
    initiation: {
      title: "Introductory course épinette",
      desc: "Instrument maker <b>Peter Verhoeven</b> proposes an introductory course on Sunday September 11th, hour to be specified",
    },
    bourse: {
      title: "Musical market",
      desc: (
         <p>
         Two reliable musicians, <b>André Deru</b> et <b>Thierry Legros</b> (from the band Salon Ambroisine), propose this year a musical market in Marsinne.
        </p>
        <p>
        <b>Do you wish to sell a musical instrument ? </b> 
        </p>
        <p>
        Confide it to this stand for the day (taken back at 6:30 pm at the latest). Indicate the asking price or / and a mobile phone number where the potential buyer could contact you.
        André Deru and Thierry Legros will welcome the instruments with the biggest attention and will take care so that these objects undergo no damage.
        However, they cannot be held responsible in case of damage or theft.
        </p>
        <p>
        <b>do you wish to buy a musical instrument ?</b> 
        </p>
        <p>
        Pay the asking price or, if necessary, contact the seller.
        </p>
      ),
    },
  },
  nl: {
    title: "Animaties 2016",
    mabotte: {
      title: "Poppentheater Mabotte (België)",
      headline: "Luiks poppentheater (Wallonië) – Zaterdag en Zondag / BINNENPLAATS",
      desc: "Het traditioneel Luiks poppentheater zal onze jongsten bekoren ! Theater Mabotte brengt professionelen samen die talentvol de oude traditie voortzetten. Met brio, dus kom meedoen !",
      website: "Website"
    },
    maquillage: {
      title: "Grimeren voor kinderen",
      headline: "(België - Wallonië) – Zaterdag en Zondag / MARKT",
      desc: "Vergankelijke kunstwerken op de mooiste kunstwerken van de ouders, het moment voor de kinderen om met iemand anders te spelen !",
      desc2: "Begeleiding : Viviane Desmet"
    },
    initiation: {
      title: "Introductiecursus épinette",
      desc: "Instrument maker <b>Peter Verhoeven</b> telt een introductiecursus op zondag 11 september, uur te specificeren",
    },
    bourse: {
      title: "Muzikale markt",
      desc: (
         <p>
         Twee betrouwbare muzikanten, <b>André Deru</b> et <b>Thierry Legros</b> (groep Salon Ambroisine) stellen dit jaar een muzikale markt in Marsinne.
         </p>
        <p>
        <b>U wenst een muziekinstrument te verkopen ?</b> 
        </p>
        <p>
        Laat uw instrument op dit stand voor de dag (hervatting om 18u30 bij het laatste). Geef de vraagprijs of / en een GSM nummer waar de potentiële koper kan uw bellen.
        André Deru en Thierry Legros zullen de instrumenten met de grootste aandacht krijgen en zorgen dat deze objecten niet worden beschadigd.
        Ze kunnen echter niet verantwoordelijk worden gehouden in geval van schade of diefstal.
        </p>
        <p>
        <b>U wenst een muziekinstrument te kopen ?</b> 
        </p>
        <p>
        Betaal de vraagprijs of, indien nodig, neem contact op met de verkoper.
        </p>
      ),
    },
  },
};


export default class ActivitiesPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>

        <CustomTitle title={strings.title} />

        <Card>
          <CardTitle title={strings.mabotte.title}
                     subtitle={strings.mabotte.headline} />
          <CardText>
            <p>
              {strings.mabotte.desc}
            </p>
            <p>
              {strings.mabotte.website}: <a href="http://www.theatremabotte.be/">
                www.theatremabotte.be</a>
            </p>
            <img src="http://www.folkfestivalmarsinne.be/marsinne_img/groupes/2014/PHOTO_Theatre_Mabotte.jpg"
                 alt="Theatre Mabotte"/>
          </CardText>
        </Card>
        <p/>
        <Card>
          <CardTitle title={strings.maquillage.title}
                     subtitle={strings.maquillage.headline} />
          <CardText>
            <p>
              {strings.maquillage.desc}
            </p>
            <p>
              {strings.maquillage.desc2}
            </p>
            <img src="http://www.folkfestivalmarsinne.be/marsinne_img/groupes/2014/PHOTO_Viviane_Desmet.png"
                 alt="Maquillage"/>
          </CardText>
        </Card>
        <p/>
        <Card>
          <CardTitle title={strings.initiation.title}
                     subtitle="" />
          <CardText>
            {strings.initiation.desc}
          </CardText>
        </Card>
        <p/>
        <Card>
          <CardTitle title={strings.bourse.title}
                     subtitle="" />
          <CardText>
            {strings.bourse.desc}
          </CardText>
        </Card>
      </div>
    );
  }
}
