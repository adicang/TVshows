import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createHashHistory } from "history";

import { ShowByIdEndPoint } from "../../helpers/createEndPoints";
import fetchSucceed from "../../redux/actions/fetchSucceed";
import fetchFailed from "../../redux/actions/fetchFailed";
import fetching from "../../redux/actions/fetching";
import removeFromFavorites from "../../redux/actions/removeFromFavorites";
import addToFavorites from "../../redux/actions/addToFavorites";
import AddToFavorites from "./AddToFavorites";
import Fade from "react-reveal/Fade";
import Cast from "./Cast";
import Episodes from "./Episodes";

import icon from "../../assets/logo192.png";
import ScrollTop from "react-scrolltop-button";
import stripHtml from "string-strip-html";
import Loader from "react-loader-spinner";
import { Container, Button } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";
import "./index.css";

class SingleShowScreen extends Component {
  constructor() {
    super();
    this.state = {
      showData: {}
    };
  }

  stripHtmlTagsFromString(summary) {
    if (summary) {
      return stripHtml(summary);
    }
  }

  joinGenres(genres) {
    if (genres) {
      return genres.join(", ");
    }
  }

  toggleFavorites() {
    if (this.props.currShow.isFavorite) {
      this.props.removeFromFavorites(this.props.currShow.showId);
    } else {
      this.props.addToFavorites({
        showId: this.props.currShow.showId,
        showName: this.props.currShow.showName,
        showImg: this.props.currShow.showImg,
        showRating: this.props.currShow.showRating
      });
    }
  }

  componentDidMount() {
    this.props.fetching();
    fetch(ShowByIdEndPoint(this.props.currShow.showId))
      .then(res => {
        if (res.status === 200) {
          this.props.fetchSucceed();
          return res.json();
        } else {
          this.props.fetchFailed();
        }
      })
      .then(data => {
        this.setState({ showData: data });
      });
  }

  renderShow() {
    return (
      <Container>
        <ScrollTop text="&uarr;" className="button-up-arrow" />
        <Row>
          <Col sm>
            <Button
              onClick={() => createHashHistory().goBack()}
              className="btn-go-back"
            >
              Back to Search Screen
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Fade right>
              {this.props.currShow.showImg ? (
                <img
                  src={this.props.currShow.showImg}
                  className="img-single-show"
                  alt="show-img"
                />
              ) : (
                <div className="div-no-image margin-auto">
                  <img
                    src={icon}
                    className="icon-no-image-div img-single-show"
                    alt="show-no-img"
                  />
                </div>
              )}
              <AddToFavorites
                isFavorite={this.props.currShow.isFavorite}
                toggleFavorites={() => this.toggleFavorites()}
              />
              <a className="btn-full-episodes" href="#episodes">
                See Full Episodes
              </a>
            </Fade>
          </Col>

          <Col sm lg={8}>
            <Fade left>
              <h1 className="show-title">{this.props.currShow.showName}</h1>
              <div className="show-description">
                <p>
                  {this.stripHtmlTagsFromString(this.state.showData.summary)}
                </p>
                <p>
                  <b>Rating: </b>
                  {this.props.currShow.showRating}
                </p>
                <p>
                  <b>Genres: </b>
                  {this.joinGenres(this.state.showData.genres)}
                </p>
                <p>
                  <b>Language: </b>
                  {this.state.showData.language}
                </p>
                <p>
                  <b>Status: </b>
                  {this.state.showData.status}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>

        <Row>
          <Cast />
        </Row>
        <Row>
          <Episodes />
        </Row>
      </Container>
    );
  }

  renderLoader() {
    return (
      <div className="loader-spinner">
        <Loader type="TailSpin" color="white" height={80} width={80} />
      </div>
    );
  }

  renderMessageFailed() {
    return (
      <div className="no-fav-wrapper">
        <h1 className="no-fav-header">Could Not Fetch Show Information :(</h1>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.fetchApiState === "fetching"
          ? this.renderLoader()
          : this.props.fetchApiState === "failed"
          ? this.renderMessageFailed()
          : this.renderShow()}
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSucceed: fetchSucceed,
      fetchFailed: fetchFailed,
      fetching: fetching,
      addToFavorites: addToFavorites,
      removeFromFavorites: removeFromFavorites
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currShow: state.currShow,
    fetchApiState: state.fetchApiState
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleShowScreen);
