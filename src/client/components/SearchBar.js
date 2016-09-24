import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    // Tells the browser not to refresh page
    event.preventDefault();
    console.log('Submitted Form');
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input placeholder="Search" className="inputBox" required
          value={this.state.term}
          onChange={(this.onInputChange).bind(this)}
        />
        <select className="typeSelect" defaultValue="" required>
          <option disabled value="">- Type -</option>
          <option value="restaurant">Restaurants</option>
          <option value="events">Events</option>
          <option value="jobs">Jobs</option>
          <option value="volunteers">Volunteers</option>
        </select>
      </form>
    );
  }
}
