import React, { Component } from 'react';
import Autocomplete         from 'react-google-autocomplete';
import { connect }          from 'react-redux';
import { addTask }          from '../actions';
import { browserHistory }   from 'react-router';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: {}
    };
    this.state.task = {
      title: '',
      description: '',
      category: '',
      hours: '',
      volunteer: false,
      dollarValue: '',
      location: '',
      image: '', //URL?
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onVolunteerChange = this.onVolunteerChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onVolunteerChange(event) {
    const task = this.state.task;
    task.volunteer = !this.state.task.volunteer;
    this.setState({
      task: task,
      location: this.state.location
    });
    console.log(':(')
  }

  onInputChange(event) {
    const task = this.state.task;
    task[event.target.name] = event.target.value;
    this.setState({
      task: task,
      location: this.state.location
    })
  }

  onLocationChange(locObj) {
    const task = this.state.task;
    task.location = locObj.formatted_address;
    this.setState({
      location: locObj,
      task: task
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.close();
    this.props.addTask( this.state.task, this.state.location);
    browserHistory.push("/search/tasks/?location=");
  }

  onCancel(event) {
    event.preventDefault();
    this.props.close()
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="addTaskForm">
        <div className={"form-column"}>
          <input
            className="inputBox"
            type="text"
            name="title"
            onChange={this.onInputChange}
            value={this.state.task.title}
            style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '10px auto 0 auto', 'font-size': '1.2rem' }}
            placeholder="Title.."
          />
          <textarea
            className="descBox"
            name="description"
            onChange={this.onInputChange}
            value={this.state.task.description}
            rows="3"
            style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '10px auto 0 auto', 'font-size': '1.2rem' }}
            placeholder="Description.."
          />
          <input
            className="inputBox"
            type="text"
            name="category"
            onChange={this.onInputChange}
            value={this.state.task.category}
            style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '10px auto 0 auto', 'font-size': '1.2rem' }}
            placeholder="Category.."
          />
          <input
            className="inputBox"
            type="number"
            name="hours"
            onChange={this.onInputChange}
            value={this.state.task.hours}
            style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '10px auto 0 auto', 'font-size': '1.2rem' }}
            placeholder="Hours.."
          />
        </div>
        <div className={"form-column"} style={{ 'marginTop': '30px' }}>
          <label className="custom-control custom-checkbox" style={{ 'marginTop': '10px' }}>
            <input type="checkbox" className="custom-control-input" onChange={this.onVolunteerChange} value={this.state.task.volunteer} />
            <span className="custom-control-indicator" style={{ 'box-shadow': 'none' }}></span>
            <span className="custom-control-description" style={{ 'color': '#b0b0b0', 'font-family': '"Josefin Sans", sans-serif' }}>Volunteer</span>
          </label>
          <input
            className="inputBox"
            type="number"
            min="1"
            step=".01"
            name="dollarValue"
            onChange={this.onInputChange}
            value={this.state.task.dollarValue}
            style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '10px auto 0 auto', 'font-size': '1.2rem' }}
            placeholder="Price.."
          />
          <Autocomplete
            className="inputBox"
            type="text"
            types={ ['address'] }
            name="location"
            onChange={this.onInputChange}
            onPlaceSelected={this.onLocationChange}
            value={this.state.task.location}
            style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '10px auto 0 auto', 'font-size': '1.2rem' }}
            placeholder="Location.."
          />

          <button action="submit" className="btn btn-info btn-more-info" style={{ 'marginRight': '10px' }}>Submit</button>
          <button onClick={this.onCancel} className="btn btn-outline-info btn-more-info">Cancel</button>
        </div>
      </form>

    )
  }
}


export default connect(null, { addTask })(TaskForm)



// <label style={{ 'color': '#b0b0b0', 'font-family': '"Josefin Sans", sans-serif', 'fontSize': '20px', 'display': 'inline' }}>Volunteer: </label>
// <input
//   className="inputBox"
//   type="checkbox"
//   name="volunteer"
//   onChange={this.onVolunteerChange} //This change handler is different
//   value={this.state.task.volunteer}
//   style={{ 'position': 'relative', 'top': '-7px' }}
// />