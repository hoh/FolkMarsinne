'use strict';
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

export default class EventsCard extends React.Component {
	render() {
		return (
      <Card>
        <CardTitle title="Sur Place"/>
        <CardText>

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

					<Paper zDepth={2}>
	          <Table >
	            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
	              <TableRow>
	                <TableHeaderColumn></TableHeaderColumn>
	                <TableHeaderColumn>Tarif Normal</TableHeaderColumn>
	                <TableHeaderColumn>Tarif 12-25 ans</TableHeaderColumn>
	                <TableHeaderColumn>Soirée</TableHeaderColumn>
	              </TableRow>
	            </TableHeader>
	            <TableBody displayRowCheckbox={false}>
	              <TableRow>
	                <TableRowColumn>Pass 3 jours</TableRowColumn>
	                <TableRowColumn>57 €</TableRowColumn>
	                <TableRowColumn>47 €</TableRowColumn>
	                <TableRowColumn>/</TableRowColumn>
	              </TableRow>
	              <TableRow>
	                <TableRowColumn>Vendredi</TableRowColumn>
	                <TableRowColumn>17 €</TableRowColumn>
	                <TableRowColumn>14 €</TableRowColumn>
	                <TableRowColumn>/</TableRowColumn>
	              </TableRow>
	              <TableRow>
	                <TableRowColumn>Samedi</TableRowColumn>
	                <TableRowColumn>33 €</TableRowColumn>
	                <TableRowColumn>27 €</TableRowColumn>
	                <TableRowColumn>15 € (20h30)</TableRowColumn>
	              </TableRow>
	              <TableRow>
	                <TableRowColumn>Dimanche</TableRowColumn>
	                <TableRowColumn>22 €</TableRowColumn>
	                <TableRowColumn>18 € (19:00)</TableRowColumn>
	                <TableRowColumn>10 € (19h00)</TableRowColumn>
	              </TableRow>
	            </TableBody>
	          </Table>
					</Paper>
					<p><i>
						Entrée gratuite pour les moins de 12 ans accompagnés d'un adulte responsable.
					</i></p>

					<h3>Remarques</h3>
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

        </CardText>
      </Card>
		);
	}
}
