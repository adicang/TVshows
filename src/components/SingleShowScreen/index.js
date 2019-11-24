import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ShowByIdEndPoint } from '../../helpers/createEndPoints';
import { Container, Button } from 'semantic-ui-react';
import stripHtml from "string-strip-html";
import { Row, Card, Col, ListGroup } from "react-bootstrap";
import './index.css';
import Loader from "react-loader-spinner";
import fetchSucceed from "../../redux/actions/fetchSucceed";
import fetchFailed from "../../redux/actions/fetchFailed";
import fetching from "../../redux/actions/fetching";
import swal from "sweetalert";

class SingleShowScreen extends Component {
    constructor() {
    super();
    this.state = {
        showData: {}
    };


  }

    stripHtmlTagsFromString(summary){
        if(summary){
            return stripHtml(summary);
        }
    }

    joinGenres(genres){
        if(genres){
            return genres.join(", ");
        }
    }

    componentDidMount(){
        this.props.fetching();
        let showsResult = fetch(ShowByIdEndPoint(this.props.currShow.showId))
        .then(res => {
            if(res.status==200){
                this.props.fetchSucceed();
                return res.json();
            }
            else{
                this.props.fetchFailed();
            }
        })
        .then(data => {
            this.setState({showData: data});
        })
    }


    renderShow(){
        return(
            <Container>
                <Row>
                    <Col sm>
                        <img
                            src={this.props.currShow.showImg}
                            className="img-single-show"
                        />
                        <Button className="btn-full-episodes">
                            See Full Episodes
                        </Button>
                    </Col>
                    <Col sm lg={8}>
                        <h1 className="show-title">{this.props.currShow.showName}</h1>
                        <p className="show-description">{this.stripHtmlTagsFromString(this.state.showData.summary)}</p>
                         <p><b>Genres: </b>{this.joinGenres(this.state.showData.genres)}</p>
                        <p><b>Language: </b>{this.state.showData.language}</p>
                        <p><b>Status: </b>{this.state.showData.status}</p>
                        <p><b>Rating: </b>{this.state.showData.rating.map(item => item.average)}</p>
                    </Col>

                </Row>
            </Container>
        )
    }

    renderLoader() {
    return (
      <Loader
        type="TailSpin"
        color="white"
        className="loader-spinner"
        height={80}
        width={80}
      />
    );
  }

  renderMessageFailed() {
    return (
      <div class="no-fav-wrapper">
        <h1 className="no-fav-header">Could Not Fetch Show Information :(</h1>
      </div>
    );
  }

    render(){
        return (
          <Row>
            {this.props.fetchApiState === "fetching"
              ? this.renderLoader()
              : this.props.fetchApiState === "failed"
              ? this.renderMessageFailed()
              : this.renderShow()}
          </Row>
    );
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSucceed: fetchSucceed,
      fetchFailed: fetchFailed,
      fetching: fetching
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
