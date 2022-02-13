import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)
    // const [totalPages, setTotalPages] = useState(0)

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const updateNews = async (pageNo)=> {
        props.setProgress(10);
        setLoading(true);
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + pageNo}&pageSize=${props.pageSize}`);
        props.setProgress(50);
        const data = await res.json();

        setLoading(false);
        setTotalNews(data.totalResults)
        setArticles(data.articles)
        // setTotalPages(Math.ceil(totalNews / props.pageSize))
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(0);
    }, [])
    

    const fetchMoreData = async () => {
        setPage(page + 1);
        setLoading(true);
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`);
        const data = await res.json();

        setLoading(false);
        setTotalNews(data.totalResults)
        setArticles(articles.concat(data.articles))
        // setTotalPages(Math.ceil(totalNews / props.pageSize))
    }


        return (
            <>
                <h1 className="text-center" style={{ margin: '40px 0 25px 0' }}>NewsMonkey - Top  <span>{capitalizeFirstLetter(props.category)}</span> Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalNews}
                    loader={<Spinner />}
                >
                    <div className="container" style={{marginBottom: '30px'}}>
                        <div className="row">
                            {articles.map(article => (
                                <div className="col-md-4" key={article.url}>
                                    <NewsItem title={article.title ? article.title : ""} description={article.description ? article.description.slice(0, 88) : ""} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
                                </div>
                            ))}
                            {/* {articles.length === totalNews && !loading && (<div className='container'>
                                <h1 className='text-center my-3'>End</h1>
                            </div>)} */}
                            
                        </div>
                    </div>
                </InfiniteScroll>
            </ >
        )
}

export default News;

News.defaultProps = {
    pageSize: 18
}

News.propTypes = {
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}