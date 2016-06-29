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
import FoodPage from './Pages/Food';
import TicketsPage from './Pages/Tickets';
import AccessPage from './Pages/Access';
import AccomodationPage from './Pages/Accomodation';
import VolunteerPage from './Pages/Volunteer';
import ContactPage from './Pages/Contact';

const pagesMap = {
  index: IndexPage,
  program: ProgramPage,
  artisans: ArtisansPage,
  food: FoodPage,
  activities: ActivitiesPage,
  tickets: TicketsPage,
  accomodation: AccomodationPage,
  access: AccessPage,
  volunteer: VolunteerPage,
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

function isMobile() {
  return window.innerWidth <= 700;
}


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false, mobile: isMobile(), page: 'index', lang: 'fr'};
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    console.log('Resize', window.innerWidth);
    this.setState({mobile: isMobile()});
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
                        onLanguageChange={::this.handleLanguage}
                        lang={this.state.lang} />

                <AppBar
                  title="Folk Festival Marsinne"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                  onLeftIconButtonTouchTap={this.handleToggle}
                  titleStyle={{fontFamily: '\'Dancing Script\', cursive',
                               fontSize: 30}}
                  />

                  {(() => {
                    return React.createElement(pagesMap[this.state.page],
                                               {lang: this.state.lang,
                                                onPageChange: ::this.handlePageChange});
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
                                             {lang: this.state.lang,
                                              onPageChange: ::this.handlePageChange});
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
