// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
  //   static propTypes = {}
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;


    return (
      <>
        <div className="card my-3">
          <img src={imageUrl ? imageUrl : `https://cbc.iclei.org/wp-content/uploads/2016/10/news2.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            {title.length > 45 ? <h5>{title.slice(0, 45)}...</h5> : <h5>{title}</h5>}
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem