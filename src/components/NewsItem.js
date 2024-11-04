import React from 'react';
const NewsItem = (props) => {

  let { title, description, Imageurl, NewsUrl, author, date, source } = props;

  // Define the styling object based on the Mode prop
  // const textColor = this.props.Mode === 'dark' ? 'white' : 'black';

  return (
    <div
      className="card my-3">
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        right: '0',
        position: 'absolute'
      }}>
        <span className="badge rounded-pill bg-danger"> {source} </span>     {/*Shown Source of the page */}
      </div>

      <img src={
        !Imageurl ? 'https://g.foolcdn.com/editorial/images/794361/golden-bull-and-bear-statues-in-front-of-a-global-map.jpg' : Imageurl}
        className="card-img-top" alt="..." />
      <div className="card-body ">
        <h5 className="card-title">{title ? title : "No Tilte avaliable"}    </h5>
        <p className="card-text text-danger">{description ? description : "description Unavaliable"}..</p>

        <p className="card-text">
          <small className="text-body-dark"> by {author ? author : "unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>

        <a href={NewsUrl}
          target="_blank" rel="noreferrer" className="btn btn-info btn-sm">  Read More </a>
      </div>
    </div>
  );
}

export default NewsItem;



