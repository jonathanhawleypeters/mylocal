import React               from 'react';
import { connect }         from 'react-redux';
import { fetchRestaurant } from '../actions';

class Profile extends React.Component {
  componentWillMount() {
    this.props.fetchRestaurant(this.props.params.id)
  }
  render() {
    if (!this.props.restaurant.id) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <div className="profile-bg">
            <img src={ !!this.props.restaurant.image_url ? this.props.restaurant.image_url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="profile-img" />
            <div style={{ 'marginTop': '40px' }}></div>
            <h2>{ this.props.restaurant.name }</h2>
            <div style={{ 'marginTop': '40px' }}></div>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 1 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 2 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 3 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 4 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 5 ? 'star-on' : '' }` }>star</i>
            <div style={{ 'marginTop': '40px' }}></div>
            <div>
              <i className="material-icons">location_on</i>
              { this.props.restaurant.location.display_address.join(', ') }
            </div>
          </div>
          <div style={{ 'marginTop': '40px' }}></div>
          <div className="profile-panel">
            <h3>Description</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div style={{ 'marginTop': '40px' }}></div>
          <div className="profile-panel">
            <h3>Reviews</h3>
            <hr />
            <div className="row container-fluid">
              <div className="col-md-8 offset-md-2">
                <div className="review">
                  <div className="col-md-2 container-fluid review-profile">
                    <img src="http://placehold.it/100x100" className="profile-img" alt="" />
                    <div className="review-username">Username</div>
                  </div>
                  <hr className="review-line-sm" />
                  <div className="col-xs-10 review-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

var mapStateToProps = function({ restaurant }) {
  return { restaurant };
}

export default connect(mapStateToProps, { fetchRestaurant })(Profile);