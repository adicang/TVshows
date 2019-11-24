import React, { Component } from "react";
import { Link } from "react-router-dom";




import { Header, Checkbox } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";

import icon from "../../assets/logo192.png";
import './index.css';

class MyNav extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <Header as="h1">
            <img src={icon} alt="app-icon" />
            <Header.Content className="navbar-brand-title">TV Show Seach Engine</Header.Content>
          </Header>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">
              <h2 className="nav-item">Home</h2>
            </Link>
          </Nav>
          <Nav className="item-two">
            <Link to="/">
              <h2 className="nav-item">Favorites</h2>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}



export default MyNav;
