import React, { Component }    from 'react';
import { reduxForm }           from 'redux-form';
import * as actions            from '../actions';
import { browerHistory, Link } from 'react-router'


class ChangePassword extends Component {

  onFormSubmit( {confOldPassword, oldPassword, newPassword}) {

    this.props.changePassword({ oldPassword, newPassword });
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
    const { handleSubmit, fields: { confOldPassword, oldPassword, newPassword } } = this.props;
    return (
        // note latest redux form gives warning message on spread operator, but still works
        // rolled back to redux 5.33, since 6.05 uses a different format.
        <div className="main-banner" style={{ textAlign:"center" }}>
          <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2" style={{ marginTop:'250px' }}>
            <h3 style={{marginTop:15+"px", fontFamily:"Julius Sans One"}}>Change Password</h3>
            <hr />
            <form onSubmit={ handleSubmit(this.onFormSubmit.bind(this)) } >
              <div className="form-group">
                <input { ...oldPassword } type="password" style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Current Password" required />
              </div>
              <div className="form-group">
                <input { ...confOldPassword } type="password" style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Confirm Password.." required />
              </div>
              <div className="form-group">
                <input { ...newPassword } type="password" style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="New Password.." required />
              </div>
              {this.renderAlert()}
              <button action="submit" className="btn btn-primary" style={{ marginTop:'5px', width:'100%', border:'none', outline:'none', padding:'16px', backgroundColor:'lightgreen', color:'white', fontSize:'20px' }}>Change Password</button>
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
  form: 'changepassword',
  fields: ['oldPassword', 'confOldPassword', 'newPassword']
}, mapStateToProps, actions)(ChangePassword);