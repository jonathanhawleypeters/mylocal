 import React from 'react';

export default class UserProfile extends React.Component {
  componentDidMount() {
    $('.long-review').hide();

    $('.short-review').on('click', function() {
      $(this).hide();
      $(this).next().show()
    })

    $('.long-review').on('click', function() {
      $(this).hide();
      $(this).prev().show()
    })
  }

  render() {
    return (
      <div>
        <div className="profile-bg">
          <img src="/img/user.png" className="profile-img" alt="" />
          <div style={{ 'marginTop': '40px' }}></div>
          <h2>Yasser Mahmud</h2>
          <div style={{ 'marginTop': '40px' }}></div>
          <i className="material-icons star-rating star-on">star</i>
          <i className="material-icons star-rating star-on">star</i>
          <i className="material-icons star-rating star-on">star</i>
          <i className="material-icons star-rating star-on">star</i>
          <i className="material-icons star-rating">star</i>
          <div style={{ 'marginTop': '40px' }}></div>
            <div className="row">
              <div className="col-md-2 offset-md-2">
                <div><i className="material-icons profile-icon">location_on</i></div>
                <p>yasser.mahmud@gmail.com</p>
              </div>
              <div className="col-md-1 hidden-sm-down" style={{ 'textAlign': 'center' }}>
                <div className="vr"></div>
              </div>
              <div className="col-md-2">
                <div><i className="material-icons profile-icon">attach_money</i></div>
                <p>$30/hr</p>
              </div>
              <div className="col-md-1 hidden-sm-down" style={{ 'textAlign': 'center' }}>
                <div className="vr"></div>
              </div>
              <div className="col-md-2">
                <i className="material-icons profile-icon">stars</i>
              </div>
            </div>
        </div>

        <div style={{ 'marginTop': '40px' }}></div>

        <div className="profile-panel">
          <h3>Description</h3>
          <hr />
          <p>Full Stack Software Engineer. I am free in the evenings and weekends for freelance work. You can book my expertise in Javascript on a per hour basis. For tailor solutions, leave me a message and I will contact you.</p>
          <p>I am also avaliable for voluteer work so if you have a good cause, I'm willing to hear</p>
        </div>

        <div style={{ 'marginTop': '40px' }}></div>

        <div className="container-fluid profile-panel">
          <div className="row">
            <div className="col-md-6">
              <h3>Completed Jobs</h3>
              <hr />
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
                  <img src="http://placehold.it/80x80" alt="" className="img-fluid" />
                </div>
                <div className="col-xl-6 col-lg-10 col-md-9 col-sm-9 col-xs-8">
                  <h5>Help re-style my website</h5>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm">star</i>
                  <div>
                    <p className="short-review">"He did an awesome Job, I was impressed..."</p>
                    <p className="long-review">"He did an awesome Job, I was impressed by the design, Will hire again."</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Volunteer Work</h3>
              <hr />
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
                  <img src="http://placehold.it/80x80" alt="" className="img-fluid" />
                </div>
                <div className="col-xl-6 col-lg-10 col-md-9 col-sm-9 col-xs-8">
                  <h5>Clean The Lawn</h5>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <i className="material-icons star-rating star-sm star-on">star</i>
                  <div>
                    <p className="short-review">"I am an old lady. He helped..."</p>
                    <p className="long-review">"I am an old lady. He helped me clean my lawn. I didn't know that fullstack engineers cleaned lawns"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    );
  }
}



//         <div style={{ 'marginTop': '40px' }}></div>
// <div className="profile-panel">
//           <h3>Reviews</h3>
//           <hr />
//           <div className="row container-fluid">
//             <div className="col-lg-10 offset-lg-1">
//               <div className="review">
//                 <div className="col-md-3 col-lg-2 container-fluid review-profile">
//                   <img src="http://placehold.it/100x100" className="profile-img" alt="" />
//                   <div className="review-username">Username</div>
//                 </div>
//                 <hr className="review-line-sm" />
//                 <div className="col-md-9 col-lg-10 review-content">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//                   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//                   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//                   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 </div>
//                 <div className="clearfix"></div>
//               </div>
//             </div>
//           </div>
//         </div>