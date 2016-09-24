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
      //tells browser not the submit form
      event.preventDefault();
    }

  render() {
    return (
      <form>
        <input placeholder="Search" className="inputBox" required
        onSubmit={this.onFormSubmit}
        value={this.state.term}
        onChange={(this.onInputChange).bind(this)}
        />
        <select className="typeSelect" required>
          <option disabled defaultValue="- Type -"> </option>
          <option value="restaurant">Restaurants</option>
          <option value="events">Events</option>
          <option value="jobs">Jobs</option>
          <option value="volunteers">Volunteers</option>
        </select>
      </form>
    );
  }
}
