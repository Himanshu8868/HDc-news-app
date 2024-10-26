import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, Imageurl, NewsUrl, author, date ,source } = this.props;

    // Define the styling object based on the Mode prop
    // const textColor = this.props.Mode === 'dark' ? 'white' : 'black';

    return (
      <>
        <div>
          <div
            className="card">
            <img
              src={
                !Imageurl ? 'https://g.foolcdn.com/editorial/images/794361/golden-bull-and-bear-statues-in-front-of-a-global-map.jpg' : Imageurl}
              className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">{title}   <span className="position-absolute top-0 start-90 display-flex text-align-center flex-direction-wrap translate-middle badge rounded-pill bg-danger"> {source} </span>     {/*Shown Source of the page */}
              </h5>

              <p className="card-text">{description}..</p>

              <p className="card-text">
                <small className="text-body-secondary"> by {author ? author : "unknown"} on {new Date(date).toGMTString()}
                </small>
              </p>


              <a href={NewsUrl}
                target="_blank" rel="noreferrer" className="btn btn-info btn-sm">  Read More </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;