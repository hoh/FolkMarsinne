import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';

import ProgramCard from '../Cards/Program/BasicProgramCard';
import FridayProgram from '../Cards/Program/FridayProgram';
import SaturdayProgram from '../Cards/Program/SaturdayProgram';
import SundayProgram from '../Cards/Program/SundayProgram';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

const i18n_strings = {
  fr: {
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    all_details: 'Tous les détails sur les artistes',
  },
  en: {
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    all_details: 'All informations on the line-up',
  },
  nl: {
    friday: 'Vrijdag',
    saturday: 'Zaterdag',
    sunday: 'Zondag',
    all_details: 'Alle informatie over de kunstenaars',
  }
}


export default class ProgramPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
    };
  }

  handleChange (value) {
    this.setState({
      slideIndex: value,
    });
  }

  render() {
      var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

      return (
        <Card>
            <div>
              <Tabs
                onChange={::this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab label={strings.friday} value={0} />
                <Tab label={strings.saturday} value={1} />
                <Tab label={strings.sunday} value={2} />
              </Tabs>
              <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={::this.handleChange}
              >
                <CardText>
                  <FridayProgram lang={this.props.lang} />
                </CardText>
                <div style={styles.slide}>
                  <SaturdayProgram lang={this.props.lang} />
                </div>
                <div style={styles.slide}>
                  <SundayProgram lang={this.props.lang} />
                </div>
              </SwipeableViews>
              <CardText>
                <RaisedButton label={strings.all_details} primary={true}
                  labelColor='white' linkButton={true}
                  style={{marginLeft: 10}}
                  href="/static/all-details.html" />
              </CardText>
            </div>
        </Card>
      );
    }
  }
