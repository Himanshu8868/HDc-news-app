import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({
  country = 'us',
  pageSize = 20,
  category = 'science',
  setProgress,
  apikey,
  headline,
  mode,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null); // Add error state

  const fetchNews = useCallback(async () => {
    try {
      setProgress(10);
      setError(null); // Reset error before fetching

      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${apikey}&page=1&pageSize=${pageSize}`;
      
      let data = await fetch(url);
      setProgress(40);

      if (!data.ok) {
        throw new Error('Failed to fetch news. Please check your connection. Or Request reached limit');
      }
      
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      
      setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(error.message); // Set error message
      setLoading(false);
      setProgress(100);
    }
  }, [country, category, apikey, pageSize, setProgress]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const fetchMoreData = useCallback(async () => {
    try {
      if (articles.length >= totalResults) return;

      setProgress(10);
      setError(null); // Reset error before fetching more data

      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${apikey}&page=${page + 1}&pageSize=${pageSize}`;
      
      let data = await fetch(url);
      setProgress(30);

      if (!data.ok) {
        throw new Error('Failed to load more news. Please check your connection.Or your API is Retch a Limit');
      }
      
      let parsedData = await data.json();
      setArticles((prevArticles) => prevArticles.concat(parsedData.articles || []));
      setPage((prevPage) => prevPage + 1);
      
      setProgress(100);
    } catch (error) {
      console.error('Error fetching more data:', error);
      setError(error.message); // Set error message
      setProgress(100);
    }
  }, [country, category, apikey, page, pageSize, setProgress, totalResults, articles.length]);

  const textColor = mode === 'dark' ? 'white' : 'black';

  return (
    <div className={`container my-3 ${mode}`}>
      <h1 className="text-center mb-5 " style={{ color: textColor, marginTop:'50px'}}>
        {headline}
      </h1>

      {error && ( // Show error message if error state is set
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {loading && (
        <div className="d-flex justify-content-center my-4">
          <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm me-2" aria-hidden="true"></span>
            Loading...
          </button>
        </div>
      )}

      <div>
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loading ={false}
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
                  title={element.title ? element.title.slice(0, 100) : '.....'}
                  description={element.description ? element.description.slice(0, 100) : '.....'}
                  Imageurl={element.urlToImage}
                  NewsUrl={element.url}
                  mode={mode}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  apikey: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default News;
