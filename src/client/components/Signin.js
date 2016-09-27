import React, { Component } from 'react';
import { reduxForm } from 'redux-form';


class Signin extends Component {

  onFormSubmit( {email, password}) {
    // log in user
    console.log("onFormSubmit: ", email, password);
  }

  render() {
    const { handleSubmit, fields: {email, password} } = this.props;

    return (
        // note latest redux form gives warning message on spread operator, but still works
        // rolled back to redux 5.33, since 6.05 uses a different format.
        <div className="main-bg">
          <div className="main-bg-text">
            <h2 className="main-bg-text-hero">We Find, You Choose</h2>
            <h4 className="main-bg-text-hero-blue">Please Login</h4>
              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
                <fieldset className="form-group">
                  <label>Email:</label>
                  <input {...email} className="form-control" className="inputBox" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Password:</label>
                    <input {...password} className="form-control" className="inputBox" />
                </fieldset>
              <button action="submit" className="btn btn-primary">Sign in</button>
              </form>
          <div className="divider"></div>
          </div>
        </div>

    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);