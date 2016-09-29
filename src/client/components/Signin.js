import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Signin extends Component {

  onFormSubmit( {email, password}) {
    // log in user
    this.props.signinUser({email, password});
  }

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: {email, password} } = this.props;

    return (
        // note latest redux form gives warning message on spread operator, but still works
        // rolled back to redux 5.33, since 6.05 uses a different format.
        <div style={{textAlign:"center", marginTop: 200+"px"}}>
          <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2">
            <h3 style={{marginTop:15+"px", fontFamily:"Julius Sans One"}}>Sign In</h3>
            <hr />
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
                <fieldset className="form-group">
                  <label>Email:</label>
                  <input {...email} className="form-control" className="inputBox" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Password:</label>
                    <input {...password} type="password" className="form-control" className="inputBox" />
                </fieldset>
                {this.renderAlert()}
              <button action="submit" className="btn btn-primary">Sign in</button>
              </form>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);