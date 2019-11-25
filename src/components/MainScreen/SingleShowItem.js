import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createShowObject } from "../../helpers/createShowObject";
import fetchShow from "../../redux/actions/fetchShow";

import icon from "../../assets/logo192.png";
import "./index.css";

class SingleShowItem extends React.Component {
  constructor() {
    super();

    this.returnYearFromDate = this.returnYearFromDate.bind(this);
    this.onclickHandler = this.onclickHandler.bind(this);
    this.checkIfFavorite = this.checkIfFavorite.bind(this);
  }

  returnYearFromDate(date) {
    let res = date;
    if (res) {
      res = date.substring(0, 4);
    }
    return res;
  }

  onclickHandler() {
    let showObj = createShowObject(
      this.props.id,
      this.props.name,
      this.props.image,
      this.props.rating,
      this.checkIfFavorite(this.props.id)
    );
    this.props.fetchShow(showObj);
  }

  checkIfFavorite(showId) {
    let favoritesArr = this.props.favoritesArray;
    for (let i = 0; i < favoritesArr.length; i++) {
      if (favoritesArr[i].showId === showId) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <Link
        to="/TVshows/singleShow"
        className="link-to-single-show-page"
        onClick={this.onclickHandler}
      >
        <div className="single-show-item-card">
          {this.props.image ? (
            <img
              src={this.props.image}
              alt="show-img"
              className="img-card-show-item-card"
            />
          ) : (
            <div className="div-no-image">
              <h3>{this.props.name} </h3>
              <img
                src={icon}
                className="icon-no-image-div"
                alt="no-show-img"
              />
            </div>
          )}

          <p className="name-and-year">
            {this.props.name} ({this.returnYearFromDate(this.props.year)})
          </p>
        </div>
      </Link>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchShow: fetchShow
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    favoritesArray: state.favorites
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleShowItem);
