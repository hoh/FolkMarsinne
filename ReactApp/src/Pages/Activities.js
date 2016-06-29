import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CustomTitle from '../Cards/CustomTitle';


const i18n_strings = {
  fr: {
    title: "Animations 2016",
    mabotte: {
      title: "Théâtre des Marionnettes de Mabotte",
      headline: "Théâtre de marionnettes liégeoises (Belgique - Wallonie) - Samedi et dimanche / COUR",
      desc: "Un théâtre de marionnettes traditionnelles liégeoises: de quoi réjouir les plus jeunes d'entre nous! Le Théâtre Mabotte rassemble des professionnels qui perpétuent avec talent cette vieille tradition. Avec brio, alors venez les rejoindre!",
      website: "Site web"
    }
  },
  en: {
    title: "Revel 2016",
    mabotte: {
      title: "Puppet Theatre",
      headline: "Puppet Theater from Liege (Wallonia) - Saturday and sunday / COURTYARD",
      desc: "A traditional puppet theater from Liège has enough to delight the youngest among us. The Mabotte Theater brings together professionals who perpetuate this old tradition with talent. Brilliant! So come and join them!",
      website: "Website"
    }
  }
};


export default class ActivitiesPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];
    
    return (
      <div>

        <CustomTitle title={strings.title} />

        <Card>
          <CardTitle title={strings.mabotte.title}
                     subtitle="" />
          <CardText>
            <p><b>{strings.mabotte.headline}</b>
            </p>
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
      </div>
    );
  }
}
