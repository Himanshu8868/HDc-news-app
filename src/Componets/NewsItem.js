import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description , Imageurl , NewsUrl } = this.props; 
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>

  <img src={Imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href= {NewsUrl} target='blank' className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
