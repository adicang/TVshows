import React from 'react';
import { searchShowEndPoint } from '../../helpers/createEndPoints';
import swal from "sweetalert";
import SingleShowItem from './SingleShowItem';
import { Grid, Container, Card , Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

class MainScreen extends React.Component {

    constructor() {
        super();

        this.state = {
          shows: null,
          seacrhQuery: ''
        };
        this.handleClickShow = this.handleClickShow.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
  }

    handleSearchChange(event) {
        this.setState({ seacrhQuery: event.target.value });

        let showsResult =  fetch(searchShowEndPoint(event.target.value))
          .then(res => res.json())
          .then(data => this.displayShows(data))
    }

    displayShows(data){

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
            premiered: data.show.premiered
        };
    }

    handleClickShow(){

    }

    render(){
        return (
          <Container>

             <Grid.Row>
                <Input
                    icon='search'
                    placeholder='Search new TV show...'
                    type="text"
                    value={this.state.seacrhQuery}
                    onChange={this.handleSearchChange}
                    className="search-bar"
                />
                </Grid.Row>

                <Grid.Row>
                    <Container className="show-cards-container">
                        {this.state.shows ?
                             <Card.Group stackable  itemsPerRow={5}>
                            {this.state.shows.map(show => (
                                <SingleShowItem
                                  key={show.key}
                                  name={show.text}
                                  image={show.image}
                                  year={show.premiered}
                                    id={show.key}
                                />
                              ))
                            }
                        </Card.Group>
                        : null}

                    </Container>

                </Grid.Row>
          </Container>
        );
    }
}


export default MainScreen;
