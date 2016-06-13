import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import AvQueueMusic from 'material-ui/svg-icons/av/queue-music';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import ThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import Album from 'material-ui/svg-icons/av/album';
import Directions from 'material-ui/svg-icons/maps/directions';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import LocalHotel from 'material-ui/svg-icons/maps/local-hotel';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';


class Navbar extends React.Component {

  render() {
    console.log("Navbar props", this.props);
    return (
      <Drawer
        docked={this.props.docked}
        width={220}
        open={this.props.open}
        openRight={false}
        onRequestChange={this.props.onRequestChange}
        >
        <MenuItem onTouchTap={() => this.props.onPageChange('index')}
                  leftIcon={<img src="/static/musicians_black.png"
                                 alt="Logo of the Festival" />}
                  style={{color: "#999"}} >Marsinne Festival</MenuItem>
        <div>
          <FlatButton label="Fr" primary={this.props.lang == 'fr'} style={{minWidth: '30px'}}
                      onClick={() => this.props.onLanguageChange('fr')} />
          <FlatButton label="Nl" primary={this.props.lang == 'nl'} style={{minWidth: '30px'}}
                      onClick={() => this.props.onLanguageChange('nl')} />
          <FlatButton label="En" primary={this.props.lang == 'en'} style={{minWidth: '30px'}}
                      onClick={() => this.props.onLanguageChange('en')} />
        </div>
        <Divider />

        <MenuItem onTouchTap={() => this.props.onPageChange('tickets')} leftIcon={<AddShoppingCart />}>Tickets</MenuItem>
        <Divider />
        <MenuItem onTouchTap={() => this.props.onPageChange('program')} leftIcon={<AvQueueMusic />}>Programmation</MenuItem>
        <MenuItem onTouchTap={() => this.props.onPageChange('activities')} leftIcon={<RemoveRedEye />}>Animations</MenuItem>
        <MenuItem onTouchTap={() => this.props.onPageChange('artisans')} leftIcon={<ThumbsUpDown />}>Artisans</MenuItem>
        <MenuItem onTouchTap={() => this.props.onPageChange('food')} leftIcon={<LocalDining />}>Alimentation</MenuItem>
        <Divider />
        <MenuItem onTouchTap={() => this.props.onPageChange('access')} leftIcon={<Directions />}>Accès</MenuItem>
        <MenuItem onTouchTap={() => this.props.onPageChange('accomodation')} leftIcon={<LocalHotel />}>Hébergement</MenuItem>
        <MenuItem onTouchTap={() => this.props.onPageChange('volunteer')} leftIcon={<PersonOutline />}>Bénévoles</MenuItem>
        <MenuItem onTouchTap={() => this.props.onPageChange('contact')} leftIcon={<ChatBubble />}>Contact</MenuItem>
      </Drawer>
    );
  }

  handleMenuItem(pageName) {
    this.props.onPageChange(pageName);
    this.props.onRequestChange();
  }

  handleGotoAccess() {
    alert("plop");
  }
}


export default Navbar;
