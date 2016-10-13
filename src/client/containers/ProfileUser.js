 import React             from 'react';
 import { connect }       from 'react-redux';
 import { fetchUser }     from '../actions'
 import ProfileUserReview from '../components/ProfileUserReview'

 class UserProfile extends React.Component {
  componentWillMount() {
    this.props.fetchUser(this.props.params.email)
  }

  render() {
    if (Object.keys(this.props.user).length) {
      return (
        <div>
          <div className="profile-bg">
            <img src={ this.props.user.image } className="profile-img" alt="" />
            <div style={{ 'marginTop': '40px' }}></div>
            <h2>{this.props.user.firstName + ' ' + this.props.user.lastName}</h2>
            <div style={{ 'marginTop': '40px' }}></div>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating star-on">star</i>
            <i className="material-icons star-rating">star</i>
            <div style={{ 'marginTop': '40px' }}></div>
              <div className="row">
                <div className="col-md-4 offset-md-1">
                  <span title="Rates"><i className="material-icons profile-icon">attach_money</i></span>
                  <p>$30/hr</p>
                </div>
                <div className="col-md-2 hidden-sm-down" style={{ 'textAlign': 'center' }}>
                  <div className="vr"></div>
                </div>
                <div className="col-md-4">
                  <span title="Volunter Badges"><i className="material-icons profile-icon">stars</i></span>
                </div>
              </div>
          </div>

          <div style={{ 'marginTop': '40px' }}></div>

          <div className="profile-panel">
            <h3>Description</h3>
            <hr />
            <p>{this.props.user.selfDescription}</p>
          </div>

          <div style={{ 'marginTop': '40px' }}></div>

          <div className="container-fluid profile-panel">

            <h3>Reviews</h3>
            <hr />
            { this.props.user.reviews ? ( this.props.user.reviews.map((review, key) => {
              return (
                <ProfileUserReview review={ review } key={ key } />
              )
            }) ) : (<div></div>) }
          </div>
        </div>
      );
    } else {
      return <div style={{ 'marginTop': '120px', 'marginLeft': '20px', 'fontSize': '15px' }}>Loading...</div>
    }
  }
}

var mapStateToProps = function({ user }) {
  return { user };
};

export default connect(mapStateToProps, { fetchUser })(UserProfile);