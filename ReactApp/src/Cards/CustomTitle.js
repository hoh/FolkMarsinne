import React, { Component } from 'react';
import {red500, brown500} from 'material-ui/styles/colors';

const titleStyle = {
  fontFamily: 'Roboto,sans-serif',
  margin: '10px',
  color: brown500,
};

export default class CustomTitle extends React.Component {

  render() {
    return (
        <div style={titleStyle}>
          <h1 style={{color: red500}}>
            {this.props.title}
          </h1>
          <p>
            {this.props.desc}
          </p>
        </div>
    );
  }
}
