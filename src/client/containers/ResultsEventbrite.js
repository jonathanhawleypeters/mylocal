import React, { Component }                  from 'react';
import ResultsEventbriteItem                 from './ResultsEventbriteItem';
import { connect }                           from 'react-redux';
import { searchEventbrite, initEventbrite }  from '../actions';

class ResultsEventbrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      list: true
    }
    this.searchChange = this.searchChange.bind(this);
  }
  componentWillMount() {
    this.props.initEventbrite();
    this.props.searchEventbrite(this.props.location.query.q, this.props.location.query.location)
  }
  componentWillReceiveProps(nextprops){
    if (nextprops.eventbriteResults.length !== 0) {
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
        <div style={{ marginTop:'100px' }}> </div>
        <h1 className="searchresults-main">
        { this.props.eventbriteResults.length === 0 ? "Searching for Events" : "Search Results for Events" }</h1>
        <form >
          <input type="text" placeholder="Filter" style={{float: "right", marginRight: "100px"}} onChange={this.searchChange} value={this.state.search} />
        </form>
        <div className="clearfloat"></div>
        { this.state.list === true ? <img className="loading" src="https://i.imgur.com/EATfJf4.gif" /> : <div></div> }
        <hr />
        { this.props.eventbriteResults.filter((event) => {
          return event.description.text.toUpperCase().includes(this.state.search.toUpperCase()) ||
            event.name.text.toUpperCase().includes(this.state.search.toUpperCase())
        }).map(eventData => <ResultsEventbriteItem eventData={ eventData } />) }
      </div>
    )
  }
}

function mapStateToProps({ eventbriteResults }) {
  return { eventbriteResults }
};

export default connect(mapStateToProps, { searchEventbrite, initEventbrite })(ResultsEventbrite)