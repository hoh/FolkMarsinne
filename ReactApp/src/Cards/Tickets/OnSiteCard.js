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
				Les billets pour <b>une journée</b> sont à acheter sur place
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
					Vous pourrez toujours acheter vos billets sur place aux tarifs
					indiqués ci-dessus — il y en aura pour tout le monde.
				</li>
				<li>
					Le distributeur de billets le plus proche se trouve à 1.7 km,
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
}


export default class EventsCard extends React.Component {
	render() {
		var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

		return (
      <Card>
        <CardTitle title={strings.title} />
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
	                <TableRowColumn>{strings.pass_3_days}</TableRowColumn>
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
	                <TableRowColumn>18 € (19:00)</TableRowColumn>
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
