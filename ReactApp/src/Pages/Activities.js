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
    }
    maquillage: {
      title: "Maquillage pour enfants",
      headline: "(Belgique - Wallonie) - Samedi et Dimanche / MARCHÉ",
      desc: "Des oeuvres d'art éphémères sur les plus belles oeuvres d'art des parents, le temps pour les enfants de jouer à quelqu'un d'autre!",
      desc2: "Maquilleuse : Viviane Desmet"
    }
    bourse: {
      title: "Bourse musicale",
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
    title: "Revel 2016",
    mabotte: {
      title: "Puppet Theatre",
      headline: "Puppet Theater from Liege (Wallonia) - Saturday and Sunday / COURTYARD",
      desc: "A traditional puppet theater from Liège has enough to delight the youngest among us. The Mabotte Theater brings together professionals who perpetuate this old tradition with talent. Brilliant! So come and join them!",
      website: "Website"
    }
    maquillage: {
      title: "Children make-up",
      headline: "(Belgium - Wallonia) - Saturday and Sunday / MARKET",
      desc: "Ephemeral works of art on the most beautiful artworks of parents, time for children to play someone else !",
      desc2: "Make-up artist : Viviane Desmet"
    }
  bourse: {
      title: "Bourse musicale",
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
  nl: {
    title: "Animaties 2016",
    mabotte: {
      title: "Poppentheater van de Mabotte (België)",
      headline: "Luiks poppentheater (Wallonië) – Zaterdag en Zondag / BINNENPLAATS",
      desc: "Een traditioneel Luiks poppentheater om de jongsten onder ons te verheugen ! Theater Mabotte brengt professionelen met talent die deze traditie met talent bestendigen. Met brio, dus kom meedoen !",
      website: "Website"
    },
    maquillage: {
      title: "Grimeren voor kinderen",
      headline: "(België - Wallonië) – Zaterdag en Zondag / MARKT",
      desc: "Vergankelijke kunstwerken op de mooiste kunstwerken van de ouders, het moment voor de kinderen om met iemand anders te spelen !",
      desc2: "Begeleiding : Viviane Desmet"
    },
    bourse: {
      title: "Bourse musicale",
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
      </div>
    );
  }
}
