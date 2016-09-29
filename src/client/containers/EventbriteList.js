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
      <div className="results">
      <div style={{marginTop:87 + 'px'}}> </div>
      <h2 className="searchresults-main">Search Results for Restaurants</h2>
      <input placeholder="Filter" className="inputBox filter" />
      <div className="clearfloat"></div>
      <hr />

      {this.props.Eventbrite.map(function (eventData) {
        return (
          <div className="result" key={eventData.id}>
            <div className="row">
              <div className="col-md-3">
                <img src={!!eventData.logo ? eventData.logo.url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="result-img img-fluid" style={{width: 100 + '%'}} />
                <a href={eventData.url}>
                <button style={{width: 100 + '%'}} className="btn btn-info btn-main-custom">More Info</button>
                </a>

              </div>
              <div className="col-md-9">
                <h3 style={{marginTop: 20 + "px"}}>{eventData.name.text}</h3>
                <div style={{marginTop: 5 + "px"}}></div>
                <i className="material-icons locationPointer">location_on</i>
                Location of the restaurant
                <hr />
                <h4>Description</h4>
                <p className="desc">{eventData.description.text}</p>
              </div>
            </div>
          </div>

        );
      })}
    </div>
    )
  }

}

function mapStateToProps({ Eventbrite }) {
  return { Eventbrite }
}

export default connect(mapStateToProps)(EventbriteList)