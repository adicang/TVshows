import React from "react";

import { searchShowEndPoint } from "../../helpers/createEndPoints";
import SingleShowItem from "./SingleShowItem";

import { Grid, Container, Card, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Bounce from "react-reveal/Bounce";
import "./index.css";

class MainScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      shows: null,
      seacrhQuery: ""
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({ seacrhQuery: event.target.value });

    fetch(searchShowEndPoint(event.target.value))
      .then(res => res.json())
      .then(data => this.displayShows(data));
  }

  displayShows(data) {
    let showsObject = data.map(this.returnObject);
    this.setState({
      shows: showsObject
    });
  }

  returnObject(data) {
    return {
      key: data.show.id,
      text: data.show.name,
      image: data.show.image ? data.show.image.medium : null,
      premiered: data.show.premiered,
      rating: data.show.rating.average
    };
  }

  render() {
    return (
      <Container>
        <Bounce top>
          <Grid.Row>
            <Input
              icon="search"
              placeholder="Search new TV show..."
              type="text"
              value={this.state.seacrhQuery}
              onChange={this.handleSearchChange}
              className="search-bar"
            />
          </Grid.Row>
        </Bounce>
        <Grid.Row>
          <Container className="show-cards-container">
            {this.state.shows ? (
              <Card.Group
                className="shows-card-group"
                stackable
                itemsPerRow={5}
              >
                {this.state.shows.map(show => (
                  <SingleShowItem
                    key={show.key}
                    name={show.text}
                    image={show.image}
                    year={show.premiered}
                    id={show.key}
                    rating={show.rating}
                  />
                ))}
              </Card.Group>
            ) : null}
          </Container>
        </Grid.Row>
      </Container>
    );
  }
}

export default MainScreen;
