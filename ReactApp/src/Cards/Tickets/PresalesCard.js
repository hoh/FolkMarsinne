'use strict';
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const priceTagStyle = {
  height: 50,
  width: 100,
  margin: 20,
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const i18n_strings = {
  fr: {
    title: 'Préventes',
    text: (
      <p>
        Le <b>Pass 3 jours</b> est disponible en prévente à un tarif
        avantageux. Il peut être obtenu sur internet via la plateforme
        <i> ticketscript </i> ou via le
        <a href="http://www.acte2.be/index.php/contacts"> Centre Culturel de Huy </a>
        (sur place ou par téléphone).
      </p>),
    free_for_kids: 'Entrée gratuite pour les moins de 12 ans accompagnés d\'un adulte responsable.',
    notes_title: 'Remarques',
    notes: (
      <ul>
        <li>
          Les préventes sont disponibles jusqu'au <b>3 septembre</b> inclus
          - au delà de cette date, la réservation en ligne ne sera plus
          possible et il vous faudra acheter votre billet sur place.
        </li>
        <li>
          Nous ne remboursons pas les préventes. En cas d’empêchement, il
          vous faut soit avoir pris l'assurance proposée par
          <i>ticketscript</i>, soit revendre ou donner la place.
        </li>
      </ul>
    ),
  },
  en: {
    title: 'Pre-Sales',
    text: (
      <p>
        The <b>3 days Pass</b> is available in pre-sales at a better price than
        buying it on site. It can be obtained online via <i> ticketscript </i>
        or at the
        <a href="http://www.acte2.be/index.php/contacts"> Centre Culturel de Huy </a>
        (on site or by phone).
      </p>),
    free_for_kids: 'Free entrance for children until 12 year, with a responsible adult.',
    notes_title: 'Notes',
    notes: (
      <ul>
        <li>
          Pre-sales for the 3 days pass are
          available <b>until September 3rd included</b>  - after this date, you
          can only buy tickets on site
          at the festival. Don’t worry, we'll not be sold out!
        </li>
        <li>
          We do not refund pre-sales. You can buy a cancellation insurance from Ticketscript,
or sell / give the ticket to someone else yourself If you can’t make it.
        </li>
      </ul>
    ),
  },
  nl: {
    title: 'Voorverkoop',
    text: (
      <p>
        De <b> 3 dagen Pass </b> is beschikbaar in voorverkoop tegen een lagere prijs dan
        te kopen ter plaatse. Het kan online worden verkregen via de <i> ticketscript </i>
        of via de
        <a href="http://www.acte2.be/index.php/contacts"> Centre Culturel de Huy </a>
        (Ter plaatse of telefonisch).
      </p>),
    free_for_kids: 'Gratis voor kinderen jonger dan 12 jaar, die vergezeld worden door een verantwoordelijke volwassene.',
    notes_title: 'Opmerkingen',
    notes: (
      <ul>
        <li>
          <b>Tot en met zaterdag 3 september</b>. Na die datum zal online reservering
          niet mogelijk zijn ; U kunt dan nog uw ticket rechtstreeks op de site kopen ..
        </li>
        <li>
          Geen terugbetaling van de VVK, ofwel voorgestelde verzekering
          langs <i>ticketscript</i> nemen, ofwel verkopen, ofwel uw ticket aan iemand geven
        </li>
      </ul>
    ),
  }

}

export default class PresalesCard extends React.Component {
	render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

		return (
      <Card style={{marginBottom: '1em'}}>
        <CardTitle title={strings.title} id="presales" />
        <CardText>

          {strings.text}

          <div>
            <Paper zDepth={1} style={priceTagStyle}>
              <div>Normal</div>
              <span>48 €</span>
            </Paper>

            <Paper zDepth={1} style={priceTagStyle}>
              <div>12-25 ans</div>
              <span>38 €</span>
            </Paper>

            <Paper zDepth={1} style={priceTagStyle}>
              <div>0-12 ans</div>
              <span>Gratuit*</span>
            </Paper>
          </div>

          <iframe id="ts-shop-iframe"
                  style={{border: '0px none', background: 'transparent none repeat scroll 0% 0%', maxWidth: '100%'}}
                  src={'https://shop.ticketscript.com/channel/web2/start-order/rid/D795GP7K/language/' + this.props.lang + '?referrer=http%3A%2F%2Fwww.folkfestivalmarsinne.be%2Fjoomla35%2Findex.php%2Fen%2F&amp;sourcepageurl=http%3A%2F%2Fwww.folkfestivalmarsinne.be%2Fjoomla35%2Findex.php%2Fen%2Fticket-price'}
                  width="500" height="580" frameborder="0">
          </iframe>

          <p>
            <i>* {strings.free_for_kids}</i>
          </p>

          <h3>{strings.notes_title}</h3>
          {strings.notes}

        </CardText>
      </Card>
		);
	}
}
