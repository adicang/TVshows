import React, { Component } from "react";
import { Link } from "react-router-dom";

import icon from "../../assets/logo192.png";
import { Header } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.css";

class MyNav extends Component {

  render() {
    return (
      <Navbar expand="lg" className="navbar-dark">
        <Navbar.Brand href="/TVshows">
          <Header as="h1">
            <img src={icon} alt="app-icon" />
            <Header.Content className="navbar-brand-title">
              TV Show Seach Engine
            </Header.Content>
          </Header>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/TVshows/favorites" className="fav-nav-item">
              <h2 className="fav-nav">Favorites</h2>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNav;
