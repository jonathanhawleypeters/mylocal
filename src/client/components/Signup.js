import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Signup extends React.Component {

  onFormSubmit( formProps ) {
    this.props.signupUser(formProps);
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

    // Form properties
    const { handleSubmit, fields: {firstName, lastName, email, password, address} } = this.props;

    // note latest redux form gives warning message on spread operator, but still works
    // rolled back to redux 5.33, since 6.05 uses a different format.

    return (
      <div className="main-banner" style={{ 'textAlign': 'center' }}>
        <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2" style={{ 'marginTop': '130px' }}>
          <h3 style={{ 'fontFamily': 'Julius Sans One', 'color': 'white' }}>Sign Up</h3>
          <hr />
          <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} style={{ 'marginTop': '20px' }}>
            <div className="form-group">
              <input {...firstName} type="text" style={{ 'border-radius': '5px', 'display': 'block', 'width': '90%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="First Name.." required />
            </div>
            <div className="form-group">
              <input {...lastName} type="text" style={{ 'border-radius': '5px', 'display': 'block', 'width': '90%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Last Name.." required />
            </div>
            <div className="form-group">
              <input {...email} type="email" style={{ 'border-radius': '5px', 'display': 'block', 'width': '90%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Email.." required />
            </div>
            <div className="form-group">
              <input {...password} type="password" style={{ 'border-radius': '5px', 'display': 'block', 'width': '90%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Password.." required />
            </div>
            <div className="form-group">
              <Autocomplete
                {...address}
                style={{ 'border-radius': '5px', 'display': 'block', 'width': '90%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }}
                types={['address']}
                placeholder="Street Address.."
              />
            </div>
            <button action="submit" style={{ 'border-radius': '5px', 'marginTop': '5px', 'width': '100%', 'border': 'none', 'outline': 'none', 'padding': '16px', 'backgroundColor': 'lightgreen', 'color': 'white', 'fontSize': '20px' }}>Submit</button>
            <div style={{ 'marginTop': '15px' }}><a href="#" style={{ 'color': 'white', 'textDecoration': 'none' }}>Don't have an account? <strong>Signup</strong>...</a></div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(formProps){
  // to do validate - all inputs required?
  const errors = {};
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'email', 'password', 'address'],
  validate
}, mapStateToProps, actions)(Signup);