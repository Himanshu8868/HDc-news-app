import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'science',
     apikey: ''
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired, // Ensure this prop is defined as required
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      error: null,
    };
  }

  fetchNews = async (page = 1) => {
    try {
      const { pageSize, country, category, setProgress } = this.props;

      setProgress(10); // Start loading bar

      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${this.props.apikey}&page=${page}&pageSize=${pageSize}`;

      this.setState({ loading: true, error: null });

      let data = await fetch(url);
      setProgress(40); // Update progress

      let parsedData = await data.json();
      console.log(parsedData);
    
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults,
        page,
        loading: false,
      });

      setProgress(100); // Complete loading
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({
        loading: false,
        error: 'Failed to fetch news 😫! Check Internet Connection🧐! Or Refresh the Page.'  
      });

      this.props.setProgress(100); // Complete loading on error
    }
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchMoreData = async () => {
    try {
      const { page, articles } = this.state;
      const { pageSize, country, category, setProgress} = this.props;

      setProgress(10); // Start loading bar

      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${this.props.apikey}&page=${page + 1}&pageSize=${pageSize}`;

      let data = await fetch(url);
      setProgress(30); // Update progress

      let parsedData = await data.json();
      console.log(parsedData);
    
      this.setState({
        articles: articles.concat(parsedData.articles || []),
        page: page + 1,
        loading: false,
      });

      setProgress(100); // Complete loading
    } catch (error) {
      console.error('Error fetching more data:', error);
      this.setState({ loading: false, error: 'Failed to fetch more news.' });
      this.props.setProgress(100); // Complete loading on error
    }
  };

  render() {
    const { articles, loading, error } = this.state;
    const textColor = this.props.Mode === 'dark' ? 'white' : 'black';

    return (
      <div className={`container my-3 ${this.props.Mode}`}>
        <h1 className="text-center mb-5" style={{ color: textColor }}>
          {this.props.headline}
        </h1>

        {loading && (
          <div className="d-flex justify-content-center my-4">
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm me-2" aria-hidden="true"></span>
              Loading...
            </button>
          </div>
        )}

        {error ? (
          <h2 className="text-center" style={{ color: textColor }}>
            {error}
          </h2>
        ) : (
          <InfiniteScroll
            dataLength={articles.length}
            next={this.fetchMoreData}
            hasMore={articles.length !== this.state.totalResults}
            loader={
              <div className="d-flex justify-content-center my-4">
                <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-grow spinner-grow-sm me-2" aria-hidden="true"></span>
                  Loading more...
                </button>
              </div>
            }
          >
            <div className="row">
              {articles.map((element, index) => (
                <div className="col-md-4 mb-4" key={`${element.url}-${index}`}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50):'.....'}
                    description={
                      element.description ? element.description.slice(0, 100) :'..... '
                    }
                    Imageurl={element.urlToImage}
                    NewsUrl={element.url}
                    mode={this.props.Mode}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
</div>
    );
  }
}


export default News;
