import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import { changePassword }      from '../actions';
import { browerHistory, Link } from 'react-router'


class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      oldPassword: '',
      newPassword: '',
      confNewPassword: ''
    }
  }

  onFormsSubmit({ oldPassword, newPassword, confNewPassword }) {
    console.log("i'm the onformsubmit")
    this.props.changePassword({ oldPassword, newPassword });
  }

  renderAlert(){
    if (this.props.errorMessage){
      this.props.changeInPassword = false;
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  onOldPasswordChange(event) {
    this.setState({
      oldPassword: event.target.value
    })
  }

  onNewPasswordChange(event) {
    this.setState({
      newPassword: event.target.value
    })
  }

  onConfNewPasswordChange(event) {
    this.setState({
      confNewPassword: event.target.value
    })
  }

  render() {
    if (this.props.changeInPassword) {
      // var oldPassword = this.state.oldPassword
      // var newPassword = this.state.newPassword
      // var confNewPassword = this.state.confNewPassword
      this.onFormsSubmit({ oldPassword: this.state.oldPassword, newPassword: this.state.newPassword, confNewPassword: this.state.confNewPassword})
    }
    return (
        // note latest redux form gives warning message on spread operator, but still works
        // rolled back to redux 5.33, since 6.05 uses a different format.
      <form>
        <div className="password-box">
          <input type="password" style={{ "borderRadius":"5px", "width":"250px", "border":"1px solid #ddd", "display":"block", "outline":"none", "padding":"7px", "marginTop":"10px" }} placeholder="Current Password.." 
            onChange={ this.onOldPasswordChange.bind(this) } 
          />
        </div>
        <div className="password-box">
          <input type="password" style={{ "borderRadius":"5px", "width":"250px", "border":"1px solid #ddd", "display":"block", "outline":"none", "padding":"7px", "marginTop":"10px" }} placeholder="New Password.." 
            onChange={ this.onNewPasswordChange.bind(this) } 
          />
        </div>
        <div className="password-box">
          <input type="password" style={{ "borderRadius":"5px", "width":"250px", "border":"1px solid #ddd", "display":"block", "outline":"none", "padding":"7px", "marginTop":"10px" }} placeholder="Confirm New Password.." 
            onChange={ this.onConfNewPasswordChange.bind(this) } 
          />
        </div>
        {this.renderAlert()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, { changePassword })(ChangePassword);