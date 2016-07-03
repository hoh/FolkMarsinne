import React, { Component } from 'react';
import {blue100, red100, cyan500, teal400, amber800, pink500, purple500} from 'material-ui/styles/colors';


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
  top: '20px',
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


export class DayProgram extends React.Component {
  render() {
    return(
      <div>
        <table style={programTableStyle}>
          <tr style={programRowStyle}>
            <th></th>
            <th style={{}}>Salle</th>
            <th style={{}}>Chapiteau 1</th>
            <th style={{}}>Chapiteau 2</th>
            <th style={{}}>Cour</th>
          </tr>
          {this.props.plan.map((hourPlan) =>
            <HourRow hour={hourPlan.hour} groups={hourPlan.groups} />
           )}
        </table>
      </div>
    );
  }
}
