import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getTasks }         from '../actions';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.searchChange = this.searchChange.bind(this);
  }
  componentWillMount() {
    this.props.getTasks();
  }

  searchChange(e) {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  render(){
    return (
      <div>
        <div style={{ marginTop: "100px" }} ></div>
        <h1 style={{ marginLeft: "75px" }}>Search Results for Tasks</h1>
        <form >
          <input type="text" placeholder="Search" onChange={this.searchChange} value={this.state.search} />
        </form>
        { this.props.tasks.filter((taskData) => {
          console.log(this.state.search)
          return taskData.title.toUpperCase().includes(this.state.search.toUpperCase()) || taskData.description.toUpperCase().includes(this.state.search.toUpperCase())
        }).map(function(taskData) {
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
