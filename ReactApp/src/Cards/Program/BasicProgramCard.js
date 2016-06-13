import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import {black, white, cyan50, cyan500, grey500, pink500, teal400, lime500, brown500, green200, amber800, lightGreen500} from 'material-ui/styles/colors';

const programTableStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse'
};


class HourRow extends React.Component {
  render() {
		return (
      <tr>
        <th>{this.props.hour}h</th>
        <td style={programTableStyle}></td>
        <td style={programTableStyle} rowSpan='2'>BAILAS</td>
        <td style={programTableStyle}></td>
      </tr>
    );
  }
}

export default class ProgramCard extends React.Component {
	render() {
		return (
      <Card>
        <CardTitle title="Programme du festival"
                   subtitle="Version basique sous forme de liste pour commencer" />
        <CardText>
          <table style={programTableStyle}>
            <tr style={programTableStyle}>
              <th style={programTableStyle}>Salle</th>
              <th style={programTableStyle}>Chap. 1</th>
              <th style={programTableStyle}>Cham. 2</th>
            </tr>
            <tr>
              <th>20h</th>
              <td style={programTableStyle}></td>
              <td style={programTableStyle} rowSpan='2'>BAILAS</td>
              <td style={programTableStyle}></td>
            </tr>
            <tr>
              <th>21h</th>
              <td style={programTableStyle}></td>
              <td style={programTableStyle}></td>
            </tr>
            <tr>
              <th>22h</th>
              <td style={programTableStyle} rowSpan='2'>WOUTER VANDENABEELE
& JEROEN KNAPEN (BE) bal</td>
              <td style={programTableStyle}></td>
              <td style={programTableStyle} rowSpan='2'>DUO MONTANARO - CAVEZ (B-FR)</td>
            </tr>
            <tr>
              <th>23h</th>
              <td style={programTableStyle}></td>
            </tr>

            <HourRow hour='24'/>

          </table>
        </CardText>
      </Card>
		);
	}
}
