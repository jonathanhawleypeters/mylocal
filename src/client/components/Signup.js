import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Signup extends Component {

  onFormSubmit( formProps ) {
    this.props.signupUser(formProps);
  }

  render() {
    const { handleSubmit, fields: {firstName, lastName, email, password, address} } = this.props;

    return (
        // note latest redux form gives warning message on spread operator, but still works
        // rolled back to redux 5.33, since 6.05 uses a different format.
        <div className="main-bg">
          <div className="main-bg-text">
            <h1 className="main-bg-text-search">We Find, You Choose</h1>
            <h1 className="main-bg-text-search-blue">Please Sign up for free!</h1>
              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
                <fieldset className="form-group">
                  <label>First Name:</label>
                  <input {...firstName} className="form-control" className="inputBox" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Last Name:</label>
                    <input {...lastName} className="form-control" className="inputBox" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Email:</label>
                    <input {...email} className="form-control" className="inputBox" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Password:</label>
                    <input {...password} type="password" className="form-control" className="inputBox" />
                </fieldset>
                 <fieldset className="form-group">
                  <label>Address:</label>
                    <input {...address} className="form-control" className="inputBox" />
                </fieldset>
              <button action="submit" className="btn btn-primary">Sign up</button>
              </form>
          <div className="divider"></div>
          </div>
        </div>
    );
  }
}
function validate(formProps){
  // to do validate - all inputs required?
  const errors = {};
}

export default reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'email', 'password', 'address'],
  validate
}, null, actions)(Signup);


