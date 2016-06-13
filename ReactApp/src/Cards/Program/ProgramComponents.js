import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';


const programTableStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  width: '100%',
};

const programRowStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
};

const programHourStyle = {
  borderRight: '1px solid black',
  borderCollapse: 'collapse',
};

const programCellStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  width: '20%',
  backgroundColor: blue100,
  paddingLeft: '0.4em',
};


class BandPlaying extends React.Component {
  render() {
		return (
      <td style={programCellStyle} rowSpan={this.props.duration}>
        <a href="#">{this.props.name}</a>
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
