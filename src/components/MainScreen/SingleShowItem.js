import React from 'react';
import { Grid, Card, Container } from 'semantic-ui-react';
import './index.css';
import { Link } from "react-router-dom";
import icon from "../../assets/logo192.png";
import { createShowObject } from '../../helpers/createShowObject';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchShow from "../../redux/actions/fetchShow";




class SingleShowItem extends React.Component {

    constructor() {
        super();

        this.returnYearFromDate = this.returnYearFromDate.bind(this);
         this.onclickHandler = this.onclickHandler.bind(this);
  }

    returnYearFromDate(date){
        let res = date;
        if(res){
            res = date.substring(0, 4);
        }
        return res;
    }

    onclickHandler(){
        let showObj = createShowObject(this.props.id, this.props.name, this.props.image, false);
        this.props.fetchShow(showObj);
    }



    render(){
        return(
            <Link to="/singleShow" className="link-to-single-show-page" onClick={this.onclickHandler}>
                <div className="single-show-item-card">
                    {this.props.image?
                        <img
                        src={this.props.image}
                        alt="show-image"
                        className="img-card-show-item-card"
                        />
                    :
                        <div className="div-no-image">
                            <h3>{this.props.name} </h3>
                            <img
                                src={icon}
                                className="icon-no-image-div"
                                alt="no-show-image"
                            />
                        </div>
                    }

                    <p className="name-and-year">{this.props.name} ({this.returnYearFromDate(this.props.year)})</p>
                </div>
            </Link>
        )
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

export default connect(null, matchDispatchToProps)(SingleShowItem);





