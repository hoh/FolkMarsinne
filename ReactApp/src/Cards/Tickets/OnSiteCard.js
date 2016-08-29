'use strict';
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const i18n_strings = {
  fr: {
		title: 'Sur Place',
		intro: (<div>
			<p>
				Les tickets pour <b>une journée</b> sont à acheter sur place
				à l'entrée du festival. Les <b>Pass 3 jours</b> y seront également
				disponibles, mais à un tarif plus élevé qu'en prévente.
			</p>
			<p>
				Seuls les paiements en <b>espèces</b> seront acceptés pour le
				paiement sur place, <b>PAS de paiement par carte bancaire ou
				par chèque</b>. Si vous pouvez prévoir la monnaie exacte, c'est
				encore mieux.
			</p>
		</div>),
		table: {
			friday: 'Vendredi',
			saturday: 'Samedi',
			sunday: 'Dimanche',
			normal_fare: 'Tarif Normal',
			fare_12_25: 'Tarif 12-25 ans',
			pass_3_days: 'Pass 3 jours',
			evening: 'Soirée',
		},
		free_for_kids: 'Entrée gratuite pour les moins de 12 ans accompagnés d\'un adulte responsable.',
		notes_title: 'Remarques',
		notes: (
			<ul>
				<li>
					Vous pourrez toujours acheter vos tickets sur place aux tarifs
					indiqués ci-dessus — il y en aura pour tout le monde.
				</li>
				<li>
					Le distributeur de billets de banque le plus proche se trouve à 1.7 km,
					au <a href="http://www.bpost2.be/locations/zip_res/fr/map_zone_ins.php?ins=61028&word=couthuin">bureau de poste de Couthuin</a>:
					<p>
						Rue Sur Les Trixhes 3, 4216 Couthuin

						&nbsp;
						<a href="https://www.google.be/maps/place/bpost+SA/@50.5285247,5.1353813,17z/data=!4m5!3m4!1s0x0000000000000000:0xc19cd0daccb7ea38!8m2!3d50.5285473!4d5.1383507">
							(Google Maps)
						</a>
					</p>
				</li>
			</ul>
		),
	},
  en: {
		title: 'On Site',
		intro: (<div>
			<p>
				<b>One day</b> tickets will be available at the entry of the festival
				only. <b>3 days Pass</b> will also be available on site, but at a higher
				price than pre-sales.
			</p>
			<p>
				Only <b>cash</b> payments will be available on site, <b>NOR cards
				or bank cheque</b>. If you have the exact amount, that’s even better !
			</p>
		</div>),
		table: {
			friday: 'Friday',
			saturday: 'Saturday',
			sunday: 'Sunday',
			normal_fare: 'Normal fare',
			fare_12_25: '12-25 yo',
			pass_3_days: 'Pass 3 days',
			evening: 'Evening',
		},
		free_for_kids: 'Free entrance for children until 12 year, with a responsible adult.',
		notes_title: 'Notes',
		notes: (
			<ul>
				<li>
					Tickets will always be available on site — there will be enough for
					everyone.
				</li>
				<li>
					The closest ATM is 1.7 km away,
					at <a href="http://www.bpost2.be/locations/zip_res/fr/map_zone_ins.php?ins=61028&word=couthuin">bureau de poste de Couthuin</a>:
					<p>
						Rue Sur Les Trixhes 3, 4216 Couthuin

						&nbsp;
						<a href="https://www.google.be/maps/place/bpost+SA/@50.5285247,5.1353813,17z/data=!4m5!3m4!1s0x0000000000000000:0xc19cd0daccb7ea38!8m2!3d50.5285473!4d5.1383507">
							(Google Maps)
						</a>
					</p>
				</li>
			</ul>
		),
	},
  nl: {
		title: 'Ter plaatse',
		intro: (<div>
			<p>
				<b>Een dag</b> tickets zijn rechtstreeks op de site te kopen.
				De <b>3 dagen Pass</b> zullen daar ook beschikbaar zijn maar op hooger prijs dan in voorverkoop.
			</p>
			<p>
				Aandacht! Ter plaatse kan <b>NIET met bankkaart of met bankcheques</b> betaald worden. Probeer ook  met pasmunt te betalen.
			</p>
		</div>),
		table: {
			friday: 'Vrijdag',
			saturday: 'Zaterdag',
			sunday: 'Zondag',
			normal_fare: 'Gewoon',
			fare_12_25: '12-25 jaar',
			pass_3_days: '3 dagen',
			evening: 'Avondtarief',
		},
		free_for_kids: 'Gratis voor kinderen jonger dan 12 jaar, die vergezeld worden door een verantwoordelijke volwassene.',
		notes_title: 'Opmerkingen',
		notes: (
			<ul>
				<li>
					Heb je geen ticket in voorverkoop kunnen nemen, dan kan je tickets ter
					plaatse kopen op tarief hierboven vermeld - er zullen er voor iedereen beschikbaar zijn!
				</li>
				<li>
					De dichtstbijzijnde geldautomaat is 1,7 km:
					<a href="http://www.bpost2.be/locations/zip_res/fr/map_zone_ins.php?ins=61028&word=couthuin">bureau de poste de Couthuin</a>:
					<p>
						Rue Sur Les Trixhes 3, 4216 Couthuin

						&nbsp;
						<a href="https://www.google.be/maps/place/bpost+SA/@50.5285247,5.1353813,17z/data=!4m5!3m4!1s0x0000000000000000:0xc19cd0daccb7ea38!8m2!3d50.5285473!4d5.1383507">
							(Google Maps)
						</a>
					</p>
				</li>
			</ul>
		),
	},
}


export default class EventsCard extends React.Component {
	render() {
		var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

		return (
      <Card>
        <CardTitle title={strings.title} id="onsite" />
        <CardText>

					{strings.intro}

					<Paper zDepth={2}>
	          <Table >
	            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	              <TableRow>
	                <TableHeaderColumn></TableHeaderColumn>
	                <TableHeaderColumn>{strings.table.normal_fare}</TableHeaderColumn>
	                <TableHeaderColumn>{strings.table.fare_12_25}</TableHeaderColumn>
	                <TableHeaderColumn>{strings.table.evening}</TableHeaderColumn>
	              </TableRow>
	            </TableHeader>
	            <TableBody displayRowCheckbox={false}>
	              <TableRow>
	                <TableRowColumn>{strings.table.pass_3_days}</TableRowColumn>
	                <TableRowColumn>57 €</TableRowColumn>
	                <TableRowColumn>47 €</TableRowColumn>
	                <TableRowColumn>/</TableRowColumn>
	              </TableRow>
	              <TableRow>
	                <TableRowColumn>{strings.table.friday}</TableRowColumn>
	                <TableRowColumn>17 €</TableRowColumn>
	                <TableRowColumn>14 €</TableRowColumn>
	                <TableRowColumn>/</TableRowColumn>
	              </TableRow>
	              <TableRow>
	                <TableRowColumn>{strings.table.saturday}</TableRowColumn>
	                <TableRowColumn>33 €</TableRowColumn>
	                <TableRowColumn>27 €</TableRowColumn>
	                <TableRowColumn>15 € (20h30)</TableRowColumn>
	              </TableRow>
	              <TableRow>
	                <TableRowColumn>{strings.table.sunday}</TableRowColumn>
	                <TableRowColumn>22 €</TableRowColumn>
	                <TableRowColumn>18 €</TableRowColumn>
	                <TableRowColumn>10 € (19h00)</TableRowColumn>
	              </TableRow>
	            </TableBody>
	          </Table>
					</Paper>
					<p><i>
						{strings.free_for_kids}
					</i></p>

					<h3>{strings.notes_title}</h3>
          {strings.notes}

        </CardText>
      </Card>
		);
	}
}
