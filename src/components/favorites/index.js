import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FavoriteItem from "./FavoriteItem";

import Fade from "react-reveal/Fade";
import { Container, Row, Button } from "react-bootstrap";
import "./index.css";

class Favorites extends Component {
  render() {
    return (
      <Container>
        {this.props.favoritesArray.length !== 0 ? (
          <Row>
            {this.props.favoritesArray.map(fav => (
              <FavoriteItem
                key={fav.showId}
                showId={fav.showId}
                showName={fav.showName}
                showImage={fav.showImg}
                showRating={fav.showRating}
              />
            ))}
          </Row>
        ) : (
          <div className="no-fav-wrapper">
            <Fade top>
              <h1 className="no-fav-header">No Items On Favorites</h1>
              <Link to="/">
                <Button className="no-fav-button">
                  Click here and search new TV shows
                </Button>
              </Link>
            </Fade>
          </div>
        )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritesArray: state.favorites
  };
}

export default connect(mapStateToProps, null)(Favorites);
