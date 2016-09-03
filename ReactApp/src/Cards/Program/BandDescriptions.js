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
  'accordéon chromatique': {
    fr: 'accordéon chromatique',
    en: 'chromatic accordion',
    nl: 'chromatisch accordeon',
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
  'guitares': {
    fr: 'guitares',
    en: 'guitars',
    nl: 'gitaars',
  },
  'banjo': {
    fr: 'banjo',
    en: 'banjo',
    nl: 'banjo',
  },
  'bouzouki': {
    fr: 'bouzouki',
    en: 'bouzouki',
    nl: 'bouzouki',
  },
  'cornemuse': {
    fr: 'cornemuse',
    en: 'bagpipe',
    nl: 'doedelzak',
  },
  'cornemuses': {
    fr: 'cornemuses',
    en: 'bagpipes',
    nl: 'doedelzaks',
  },
  'flûtes irlandaises': {
    fr: 'flûtes irlandaises',
    en: 'whistles',
    nl: 'whistles',
  },
  'vielle à roue': {
    fr: 'vielle à roue',
    en: 'hurdy gurdy',
    nl: '',
  },
  'nickelharpa': {
    fr: 'nickelharpa',
    en: 'nickelharpa',
    nl: 'nickelharpa',
  },
  'bodhran': {
    fr: 'bodhran',
    en: 'bodhran',
    nl: 'bodhran',
  },
};


const origins = {
  'Belgique - Wallonie': {
    fr: 'Belgique - Wallonie',
    en: 'Belgium - Wallonia',
    nl: 'België - Wallonië',
  },
  'France': {
    fr: 'France',
    en: 'France',
    nl: 'Frankrijk',
  },
  'Suède': {
    fr: 'France',
    en: 'Sweden',
    nl: 'Zweden',
  },
  'italie': {
    fr: 'Italie',
    en: 'Italy',
    nl: 'Italië',
  },
};

const kinds = {
  'learn': {
    fr: 'Atelier',
    en: 'Workshop',
    nl: 'Workshop',
  },
  'concert': {
    fr: 'Concert',
    en: 'Concert',
    nl: 'Concert',
  },
  'bal': {
    fr: 'Bal',
    en: 'Bal',
    nl: 'Bal',
  },
  'bal - fest-noz': {
    fr: 'Bal - Fest-Noz',
    en: 'Bal - Fest-Noz',
    nl: 'Bal - Fest-Noz',
  },
}


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
var translate_kind = translator(kinds);

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
          <div key={band.name + band.from}>
            <h2 style={{color: red500}} id={'band/' + band.name}>{band.name}</h2>
            <p>
              <i>
                {translate_kind(band.kind, this.props.lang)} {band.from ? strings.from : ''}&nbsp;
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
                    {member.instruments.map((instrument) =>
                      <span key={instrument} className="comma_separated">{
                          translate_instrument(instrument, this.props.lang)}
                      </span>
                    )}
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
