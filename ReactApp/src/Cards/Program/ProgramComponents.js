import React, { Component } from 'react';
import {blue100, red100, cyan500, teal400, amber800, pink500, purple500} from 'material-ui/styles/colors';
import {CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const programTableStyle = {
  // border: '1px solid black',
  borderCollapse: 'collapse',
  width: '100%',
};

const programRowStyle = {
  // border: '1px solid black',
  borderCollapse: 'collapse',
};

const programHourStyle = {
  borderRight: '1px solid black',
  borderCollapse: 'collapse',
  position: 'relative',
  height: '40px',
  top: '-20px',
  width: '60px',
};

const programCellStyle = {
  border: '1px solid white',
  borderCollapse: 'collapse',
  width: '20%',
  backgroundColor: blue100,
  padding: '0.4em',
  textAlign: 'center',
};

const eventColors = {
  bal: cyan500,
  concert: teal400,
  theatre: amber800,
  learn: pink500,
  free: purple500,
};


class BandPlaying extends React.Component {
  render() {
    var kind = this.props.kind;
    var cellStyle = Object.assign({}, programCellStyle, {
      backgroundColor: eventColors[kind]
    });

		return (
      <td style={cellStyle} rowSpan={this.props.duration}>
        <a style={{color: 'white', textDecoration: 'none'}} href="#">{this.props.name}</a>
      </td>
    )
  }
}


class HourRow extends React.Component {
  render() {
    var groups = this.props.groups;
		return (
      <tr>
        <th style={programHourStyle}>{this.props.hour}</th>
        {groups.map((group) => {
          if (group === false)
            return <td style={{}}></td>
          else if (group === true)
            return null
          else
            return (
              <BandPlaying {...group} />
            )
        })}
      </tr>
    );
  }
}

const i18n_strings = {
  fr: {
    all_details: 'Tous les détails sur les artistes',
  },
  en: {
    all_details: 'All informations on the line-up',
  },
  nl: {
    all_details: 'Alle informatie over de kunstenaars',
  }
}


export class DayProgram extends React.Component {
  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return(
      <div>
        <CardText>
          <RaisedButton label={strings.all_details} secondary={true}
            labelColor='white' linkButton={true}
            style={{marginLeft: 'auto'}}
            href="/static/all-details.html" />
        </CardText>
        <table style={programTableStyle}>
          <tbody>
            <tr style={programRowStyle}>
              <th></th>
              <th style={{}}>Salle</th>
              <th style={{}}>Chapiteau 1</th>
              <th style={{}}>Chapiteau 2</th>
              <th style={{}}>Cour</th>
            </tr>
            {this.props.plan.map((hourPlan) =>
              <HourRow key={hourPlan.hour} hour={hourPlan.hour} groups={hourPlan.groups} />
             )}
          </tbody>
        </table>
      </div>
    );
  }
}
