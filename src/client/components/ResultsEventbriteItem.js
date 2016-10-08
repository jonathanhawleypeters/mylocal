import React, { Component } from 'react';

export default class ResultsYelpItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnFavorite: false
    };
  }

  toggleHeart() {
    this.setState({
      btnFavorite: !this.state.btnFavorite
    })
  }

  render() {
    return (
      <div className="result" key={ this.props.eventData.id }>
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <img src={ !!this.props.eventData.logo ? this.props.eventData.logo.url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="result-img img-fluid" style={{ width: '100%'}} />
            <a href={ this.props.eventData.url }>
              <button style={{ width: '100%' }} className="btn btn-info btn-more-info">More Info</button>
            </a>
          </div>
          <div className="col-xl-8 col-lg-7">
            <h3 style={{ marginTop: '20px' }}>{ this.props.eventData.name.text }</h3>
            <div style={{ marginTop: '5px' }}></div>
            <hr />
            <h4>Description</h4>
            <p className="desc">{ this.props.eventData.description.text }</p>
          </div>
          <div className="col-md-1 text-xs-right">
            <i className={ this.state.btnFavorite ?  'material-icons favorite favorite-on' : 'material-icons favorite'} onClick={ this.toggleHeart.bind(this) }>favorite</i>
          </div>
        </div>
      </div>
    );
  }
}