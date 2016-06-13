import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';


export default class VolunteerPage extends React.Component {

  render() {
    return (
      <div>

        <Card>
          <CardTitle title="Bénévolat"
                     subtitle="" />
          <CardText>
            Bientôt disponible...
          </CardText>
        </Card>

      </div>
    );
  }
}
