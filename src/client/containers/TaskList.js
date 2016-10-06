import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getTasks }         from '../actions';

class TaskList extends Component {
  componentWillMount() {
    this.props.getTasks();
  }

  render(){
    return (
      <div>
        <div style={{ marginTop: "100px" }} ></div>
        <h1 style={{ marginLeft: "75px" }}>Search Results for Tasks</h1>
        { this.props.tasks.map(function(taskData) {
          return (
            <div className="result" key={taskData._id}>
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/howto-banner.jpg" alt="" className="result-img img-fluid" style={{ width: '100%'}} />
                  <a href={'mailto:'+taskData.owner}>
                  <button style={{ width: '100%' }} className="btn btn-info btn-main-custom">Send Email</button>
                  </a>
                </div>
                <div className="col-md-9">
                  <h3 style={{ marginTop: '20px', color: '#00a4d3' }}>{ taskData.title }</h3>
                  <div style={{ marginTop: '5px' }}></div>
                  <hr />
                  <h4>Description</h4>
                  <p className="desc">{ taskData.description }</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

var mapStateToProps = function ({ tasks }) {
  return { tasks }
};

export default connect (mapStateToProps, { getTasks })(TaskList);
