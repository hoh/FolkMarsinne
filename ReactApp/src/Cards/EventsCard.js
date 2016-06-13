import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import {black, white, cyan50, cyan500, grey500, pink500, teal400, lime500, brown500, green200, amber800, lightGreen500} from 'material-ui/styles/colors';

const style = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  color: white,
  backgroundColor: cyan50,
  fontFamily: "'Dancing Script', cursive",
  fontSize: 18
};

var styleConcerts = Object.assign({}, style, {
  backgroundColor: teal400,
});

var styleBals = Object.assign({}, style, {
  backgroundColor: cyan500,
});

var styleTheatre = Object.assign({}, style, {
  backgroundColor: amber800,
});

var styleArtisans = Object.assign({}, style, {
  backgroundColor: pink500,
});

var styleCamping = Object.assign({}, style, {
  backgroundColor: lightGreen500,
});


const paperStyle = {
  fontSize: 35,
  marginTop: 35,
};

class EventsCard extends React.Component {
	render() {
		return (
      <Card>
        <CardTitle title="De nombreuses activités"
                   subtitle="Entre musiques et traditions" />
        <CardText>

          <div>
            <Paper style={styleBals} zDepth={1} circle={true}>
              <div style={paperStyle}>Bals</div>
              <span>&nbsp;</span>
            </Paper>
            <Paper style={styleConcerts} zDepth={1} circle={true}>
              <div style={paperStyle}>Concerts</div>
              <span>&nbsp;</span>
            </Paper>
            <Paper style={styleTheatre} zDepth={1} circle={true}>
              <div style={paperStyle}>Théâtre</div>
              <span>et Marionnettes</span>
            </Paper>
            <Paper style={styleArtisans} zDepth={1} circle={true}>
              <div style={paperStyle}>Artisans</div>
              <span>et Luthiers</span>
            </Paper>
            <Paper style={styleCamping} zDepth={1} circle={true}>
              <div style={paperStyle}>Camping</div>
              <span>au vert</span>
            </Paper>
          </div>

        </CardText>
      </Card>
		);
	}
}

export default EventsCard;
