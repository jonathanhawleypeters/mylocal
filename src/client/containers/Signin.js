import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { browerHistory, Link } from 'react-router'


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

                  <input {...email} className="form-control inputBox" style={{display:'block', width:'90 %', border: '1 px solid #ddd', outline:'none', padding:'7px', margin:'0 auto' }} placeholder="Email..." />
                </fieldset>
                <fieldset className="form-group">
                    <input {...password} type="password" className="form-control inputBox" style={{display:'block', width:'90 %', border: '1 px solid #ddd', outline:'none', padding:'7px', margin:'0 auto' }} placeholder="Password..." />
                </fieldset>
                {this.renderAlert()}
              <button action="submit" className="btn btn-primary" style={{marginTop:'5px', width:'100%', border:'none', outline:'none', padding:'16px', backgroundColor:'lightgreen', color:'white', fontSize:'20px'}}>Sign in</button>
              <div style={{ marginTop: 15+'px'}}><Link to="/signup">Don't have an account? <strong>Signup</strong>...</Link></div>
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