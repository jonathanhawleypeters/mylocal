import React             from 'react';
import SearchLocationBar from './SearchLocationBar';
import { connect }       from 'react-redux';
import { browserHistory} from 'react-router';

class SearchLocation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: ''
    };
  }
  componentWillMount() {
    let location
    try {
      location = JSON.parse(localStorage.getItem('location'))
    } catch (exception) {
      console.error(exception)
      location = ''
    }
    if (!!location) {
      this.setState({
        location: location
      });
    }

    if(!this.props.searchTerms.type) {
      browserHistory.push('/')
    }
  }

  render() {

    return (
      <div className="main-bg">
        <div className="main-bg-text">
          <h1 className="main-text">Where do you want to find { this.props.searchTerms.type }?</h1>
          <hr className="hr" />
          <div className="divider"></div>
          <SearchLocationBar searchTerms={ this.props.searchTerms } defaultLocation={this.state.location}/>
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}

var mapStateToProps = function ({ searchTerms }) {
  return { searchTerms }
};

export default connect (mapStateToProps)(SearchLocation);