import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import {red500, red700, brown500, white} from 'material-ui/styles/colors';

import Navbar from './Navbar';
import AppBar from 'material-ui/AppBar';

import IndexPage from './Pages/Index';
import ProgramPage from './Pages/Program';
import ActivitiesPage from './Pages/Activities';
import ArtisansPage from './Pages/Artisans';
import TicketsPage from './Pages/Tickets';
import AccessPage from './Pages/Access';
import ContactPage from './Pages/Contact';

const pagesMap = {
  index: IndexPage,
  program: ProgramPage,
  artisans: ArtisansPage,
  activities: ActivitiesPage,
  tickets: TicketsPage,
  access: AccessPage,
  volunteer: ContactPage,
  contact: ContactPage,
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    accent1Color: brown500,
  },
  appBar: {
    height: 50,
  },
});


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false, mobile: false, page: 'index', lang: 'fr'};
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {(() => {
          if (this.state.mobile) {
            return (
              <div>
                <Navbar docked={false}
                        open={this.state.open}
                        onPageChange={::this.handlePageChange}
                        onRequestChange={this.handleNavbarRequest}
                        onLanguageChange={::this.handleLanguage} />

                <AppBar
                  title="Folk Festival Marsinne"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                  onLeftIconButtonTouchTap={this.handleToggle}
                  titleStyle={{fontFamily: '\'Dancing Script\', cursive',
                               fontSize: 30}}
                  />

                  {(() => {
                    return React.createElement(pagesMap[this.state.page],
                                               {lang: this.state.lang});
                  })()}
              </div>
            )
          } else {
            return (
              <div style={{marginLeft: 220}}>
                <Navbar onPageChange={this.handlePageChange}
                        onLanguageChange={::this.handleLanguage}
                        lang={this.state.lang}
                        />

                {(() => {
                  return React.createElement(pagesMap[this.state.page],
                                             {lang: this.state.lang});
                })()}

              </div>
            )
          }
        })()}
      </MuiThemeProvider>
    );
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleNavbarRequest = (open) => this.setState({open: false});

  handleLanguage = (code) => {
    console.log('Switch to language', code);
    this.setState({lang: code});
  };

  handlePageChange = (pageName) => {
    console.log('handlePageChange')
    this.setState({page: pageName});
    if (this.state.mobile == true)
      this.setState({open: false});
  }

}
