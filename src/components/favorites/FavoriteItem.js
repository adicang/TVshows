import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import removeFromFavorites from "../../redux/actions/removeFromFavorites";
import fetchShow from "../../redux/actions/fetchShow";
import { createShowObject } from "../../helpers/createShowObject";

import swal from "sweetalert";
import { Col, Card, ListGroup, Button, Image } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import Fade from "react-reveal/Fade";
import "./index.css";

class FavoriteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.removeCardFromFavorites = this.removeCardFromFavorites.bind(this);
    this.showFullShowDetails = this.showFullShowDetails.bind(this);
  }

  removeCardFromFavorites(showId) {
    this.props.removeFromFavorites(showId);
  }

  showFullShowDetails(showId) {
    this.props.fetchShow(
      createShowObject(
        this.props.showId,
        this.props.showName,
        this.props.showImage,
        this.props.showRating,
        true
      )
    );
    this.setState({ redirect: true });
  }

  handleClick() {
    swal({
      title: "Pay Attention!",
      text:
        "Once you remove the item, it will be permanently removed from the favorites list",
      icon: "warning",
      buttons: true
    }).then(willDelete => {
      if (willDelete) {
        this.removeCardFromFavorites(this.props.showId);
      }
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/TVshows/singleShow" />;
    }

    return (
      <Col sm>
        <Fade>
          <Card className="favorite-card">
            <ListGroup variant="flush">
              <button
                onClick={() => this.showFullShowDetails(this.props.showId)}
                className="button-see-full-show"
                data-tip="Click to see full show details"
              >
                <ListGroup.Item className="fav-card-show-name">
                  <h2 className="fav-show-name">{this.props.showName}</h2>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Image src={this.props.showImage} className="fav-image" />
                </ListGroup.Item>
              </button>
              <ReactTooltip
                place="top"
                type="light"
                effect="solid"
                className="full-show-tooltip"
                afterShow={() => {
                  setTimeout(ReactTooltip.hide, 8000);
                }}
              />
              <ListGroup.Item>
                <Button onClick={this.handleClick} className="remove-button">
                  Remove From Favorites
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Fade>
      </Col>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchShow: fetchShow,
      removeFromFavorites: removeFromFavorites
    },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(FavoriteItem);
