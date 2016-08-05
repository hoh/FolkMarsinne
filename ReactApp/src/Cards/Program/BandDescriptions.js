import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {red500} from 'material-ui/styles/colors';


const instruments = {
  'accordéon diatonique': {
    fr: 'accordéon diatonique',
    en: 'diatonic accordion',
    nl: 'diatonische accordeon',
  },
  'clarinette': {
    fr: 'clarinette',
    en: 'clarinet',
    nl: 'klarinet',
  },
  'violon': {
    fr: 'violon',
    en: 'violin',
    nl: 'viool',
  },
  'guitare': {
    fr: 'guitare',
    en: 'guitar',
    nl: 'gitaar',
  },
};


const origins = {
  'Belgique - Wallonie': {
    fr: 'Belgique - Wallonie',
    en: 'Belgium - Wallonia',
    nl: 'België - Wallonië',
  },
};


const i18n_strings = {
  fr: {
    from: 'de',
    musicians: 'Musiciens',
  },
  en: {
    from: 'from',
    musicians: 'Musicians',
  },
  nl: {
    from: 'van',
    musicians: 'Muzikanten',
  }
};


function translator(catalog) {
  return function translator_function(key, lang) {
    if (catalog[key])
      return catalog[key][lang] || key;
    else
      return key;
  }
}


var translate_instrument = translator(instruments);
var translate_origin = translator(origins);

function i18n_instrument(instrument, lang) {
  if (instruments[instrument])
    return instruments[instrument][lang] || instrument;
  else
    return instrument;
}


function labelForLink(url) {
  // Return a label for a given URL
  if (url.startsWith('https://soundcloud.com/'))
    return 'SoundCloud';
  else if (url.startsWith('https://youtu.be/') || url.startsWith('https://www.youtube.com/'))
    return 'YouTube';
  else {
    return 'Web';
  }
}


class FormattedLink extends React.Component {

  render() {
    var url = this.props.url;
    var name = labelForLink(url);

    return (
      <RaisedButton label={name}
        secondary={true}
        linkButton={true}
        href={url}
        style={{marginRight: 10}}
        target="_blank" />
    );
  }
};


export class BandDescriptions extends React.Component {
  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>
        {this.props.bands.map((band) =>
          <div>
            <h2 style={{color: red500}} id={'band/' + band.name}>{band.name}</h2>
            <p>
              <i>
                {band.kind} {strings.from}&nbsp;
                {translate_origin(band.from, this.props.lang)}
              </i>
            </p>
            <p>
              {strings.musicians}:
              <ul>
                {band.members.map((member) =>
                  <li key={member.name}>
                    {member.name}
                    &nbsp;—&nbsp;
                    {translate_instrument(member.instrument, this.props.lang)}
                  </li>
                )}
              </ul>
            </p>
            <div>
              {band.links.map((link) =>
                <FormattedLink key={link} url={link} />
              )}
            </div>
          </div>
         )}
      </div>
    );
  }
}
