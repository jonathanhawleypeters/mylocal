import React from 'react';
import Autocomplete from 'react-google-autocomplete';

export default class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: ''};
  }

  onInputChange(event) {
    console.log(event);
    this.setState({location: event});
  }

  onFormSubmit(event) {
    // Tells the browser not to refresh page
    event.preventDefault();
    console.log('Submitted Form');
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <Autocomplete
          className="inputBox"
          style={{top: '-15px', left: '-5px', position: 'relative'}}
          value={this.state.term}
          onChange={(this.onInputChange).bind(this)}
          onPlaceSelected={(place) => this.onInputChange(place)}
          types={['address']}
          required
        />
        <select className="typeSelect" defaultValue="" required>
          <option disabled value="">- Type -</option>
          <option value="restaurant">Restaurants</option>
          <option value="events">Events</option>
          <option value="jobs">Jobs</option>
          <option value="volunteers">Volunteers</option>
        </select>
        <div className="divider"></div>
        <button className="btn btn-lg btn-primary">Submit</button>
      </form>
    );
  }
}
