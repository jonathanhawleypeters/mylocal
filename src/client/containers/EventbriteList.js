import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventbriteList extends Component {
  
  // renderEventbrite(eventData) {
  //   return (
  //     <tr>
  //       <td>{eventData.description.text}</td>
  //     </tr>
  //   );
  // }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Event Title</th>
          </tr>
        </thead>
        <tbody>
          {this.props.Eventbrite.map(function (eventData) {
            return (
              <tr id="eventData.id">
                <td>{eventData.description.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }

}

function mapStateToProps({ Eventbrite }) {
  return { Eventbrite }
}

export default connect(mapStateToProps)(EventbriteList)