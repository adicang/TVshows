import React, { Component } from "react";

import { Icon } from "semantic-ui-react";

export default class AddToFavorites extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.toggleFavorites();
  }

  render() {
    return (
      <div>
        {this.props.isFavorite ? (
          <div className="add-to-favorite-wrapper">
            <p>
              Remove From Favorites
              <Icon
                color="red"
                name="heart"
                size="small"
                onClick={this.handleOnClick}
                className="heart-icon"
              />
            </p>
          </div>
        ) : (
          <div className="add-to-favorite-wrapper">
            <p>
              Add To Favorites
              <Icon
                name="heart outline"
                size="small"
                onClick={this.handleOnClick}
                className="heart-icon"
              />
            </p>
          </div>
        )}
      </div>
    );
  }
}
