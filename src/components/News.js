import PropTypes from 'prop-types'
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = {
        pageSize: 18
    }

    static propTypes = {
        country: PropTypes.string,
        apiKey: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalNews: 0
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews(pageNo) {
        this.props.setProgress(10);
        this.setState({ loading: true });
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + pageNo}&pageSize=${this.props.pageSize}`);
        this.props.setProgress(50);
        const data = await res.json();

        this.setState({
            totalNews: data.totalResults,
            articles: data.articles,
            totalPages: Math.ceil(this.state.totalNews / this.props.pageSize),
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews(0);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.setState({ loading: true });
        const data = await res.json();

        this.setState({
            totalNews: data.totalResults,
            articles: this.state.articles.concat(data.articles),
            totalPages: Math.ceil(this.state.totalNews / this.props.pageSize),
            loading: false
        })
    }

    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '40px 0 25px 0' }}>NewsMonkey - Top  <span>{this.capitalizeFirstLetter(this.props.category)}</span> Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalNews}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map(article => (
                                <div className="col-md-4" key={article.url}>
                                    <NewsItem title={article.title ? article.title : ""} description={article.description ? article.description.slice(0, 88) : ""} imageUrl={article.urlToImage} newsUrl={article.url} page={this.state.page} totalPages={this.state.totalPages} author={article.author} date={article.publishedAt} source={article.source.name} />
                                </div>
                            ))}
                            {this.state.articles.length === this.state.totalNews && !this.state.loading && (<div className='container'>
                                <h1 className='text-center my-3'>End</h1>
                            </div>)}
                            
                        </div>
                    </div>
                </InfiniteScroll>
            </ >
        )
    }
}

export default News