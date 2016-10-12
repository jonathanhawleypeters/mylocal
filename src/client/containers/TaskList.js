import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getTasks, doTask } from '../actions';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.searchChange = this.searchChange.bind(this);
    this.handleDoTask = this.handleDoTask.bind(this);
  }
  componentWillMount() {
    var longitude = localStorage.getItem('longitude')
    var latitude = localStorage.getItem('latitude')
    this.props.getTasks(this.props.location.query.q, [longitude, latitude]);
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops)
    this.setState({
      search: nextprops.searchTerms.query
    });
  }

  searchChange(e) {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  handleDoTask(e) {
    console.log(e.target.value) //task id
    var longitude = localStorage.getItem('longitude')
    var latitude = localStorage.getItem('latitude')
    this.props.doTask(e.target.value, [longitude, latitude])
  }

  render(){
    const DOTASK = this.handleDoTask;
    return (
      <div className="results">
        <div style={{ marginTop: "100px" }} ></div>
        <h1 className="searchresults-main" >Search Results for Tasks</h1>
        <form >
          <input type="text" placeholder="Filter" style={{float: "right", marginRight: "100px"}} onChange={this.searchChange} value={this.state.search} />
        </form>
        <div className="clearfloat"></div>

        { this.props.tasks.filter((taskData) => {
          return taskData.title.toUpperCase().includes(this.state.search.toUpperCase()) || taskData.description.toUpperCase().includes(this.state.search.toUpperCase()) ||
            taskData.category.toUpperCase().includes(this.state.search.toUpperCase())
        }).map(function(taskData) {
          return (
            <div className="result" key={taskData._id}>
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/howto-banner.jpg" alt="" className="result-img img-fluid" />
                  <a href={'mailto:'+taskData.owner}>
                  <button style={{ width: '100%' }} className="btn btn-info btn-main-custom">Send Email</button>
                  </a>
                </div>
                <div className="col-md-9">
                  <h3 style={{ marginTop: '20px', color: '#00a4d3' }}>{ taskData.title }</h3>
                  <div style={{ marginTop: '5px' }}></div>
                  <hr />
                </div>
                <div className="col-md-6">
                  <h4>Description</h4>
                  <p >{ taskData.description }</p>
                </div>
                <div className="col-md-3">
                  <h4>Details</h4>
                  <table>
                    <tbody>
                      <tr><td>Category: </td><td>{taskData.category}</td></tr>
                      <tr><td>Status: </td><td>{ taskData.completed ? String.fromCharCode(10004): String.fromCharCode(10008) }</td></tr>
                      <tr><td>Paid: </td><td>{ taskData.volunteer ? "No" : "Yes" }</td></tr>
                      <tr><td>{taskData.assignedTo?"Assigned to: " + taskData.assignedUser[0].firstName + ' ' + taskData.assignedUser[0].lastName:<button onClick={DOTASK} value={taskData._id}>Do this task</button>}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

var mapStateToProps = function ({ tasks, searchTerms }) {
  return { tasks, searchTerms }
};

export default connect (mapStateToProps, { getTasks, doTask })(TaskList);
