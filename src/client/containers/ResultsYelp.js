import React, { Component } from 'react';
import ResultsYelpItem      from './ResultsYelpItem';
import { connect }          from 'react-redux';
import { searchYelp, initYelp }       from '../actions';

class ResultsYelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      list: true
    }
    this.searchChange = this.searchChange.bind(this);
  }

  componentWillMount() {
    this.props.initYelp();
    this.props.searchYelp(this.props.location.query.location, this.props.location.query.q + ' restaurant');
  }

  componentWillReceiveProps(nextprops){
    if (nextprops.yelpResults.length !== 0) {
      this.setState({
        list: false
      })
    }
  }

  searchChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div className="results">
        <div style={{ "marginTop": "100px" }}></div>
        <h1 className="searchresults-main">Search Results for Restaurants</h1>
        <form >
          <input type="text" placeholder="Filter" style={{float: "right", marginRight: "100px"}} onChange={this.searchChange} value={this.state.search} />
        </form>
        <div className="clearfloat"></div>
        { this.state.list === true ? <img className="loading" src="https://i.imgur.com/EATfJf4.gif" /> : <div></div> }
        <hr />
        { this.props.yelpResults.filter((restaurant) => {
          return restaurant.name.toUpperCase().includes(this.state.search.toUpperCase()) || restaurant.location.display_address.join(', ').toUpperCase().includes(this.state.search.toUpperCase()) ||
            restaurant.snippet_text.toUpperCase().includes(this.state.search.toUpperCase())
        }).map(restaurant => <ResultsYelpItem restaurant={ restaurant } />) }
      </div>
    );
  }
}

var mapStateToProps = function({ yelpResults }) {
  return { yelpResults };
};

export default connect(mapStateToProps, { searchYelp, initYelp })(ResultsYelp)