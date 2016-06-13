import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import {red500, white} from 'material-ui/styles/colors';

import Navbar from './Navbar';
import AppBar from 'material-ui/AppBar';

import IndexPage from './Pages/Index';
import ProgramPage from './Pages/Program';
import TicketsPage from './Pages/Tickets';
import AccessPage from './Pages/Access';
import ContactPage from './Pages/Contact';
import ActivitiesPage from './Pages/Activities';

const muiTheme = getMuiTheme({
  palette: {
    //primary1Color: red500
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
                    if (this.state.page == 'index') {
                      return (
                        <IndexPage />
                      )
                    }
                    else if (this.state.page == 'program') {
                      return <ProgramPage />
                    }
                    else if (this.state.page == 'tickets') {
                      return <TicketsPage />
                    }
                    else if (this.state.page == 'access') {
                      return <AccessPage />
                    }
                    else if (this.state.page == 'contact') {
                      return <ContactPage />
                    }
                    else if (this.state.page == 'activities') {
                      return <ActivitiesPage />
                    }
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
                  if (this.state.page == 'index') {
                    return (
                      <IndexPage />
                    )
                  }
                  else if (this.state.page == 'program') {
                    return <ProgramPage />
                  }
                  else if (this.state.page == 'tickets') {
                    return <TicketsPage />
                  }
                  else if (this.state.page == 'access') {
                    return <AccessPage />
                  }
                  else if (this.state.page == 'contact') {
                    return <ContactPage />
                  }
                  else if (this.state.page == 'activities') {
                    return <ActivitiesPage lang={this.state.lang}/>
                  }
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
