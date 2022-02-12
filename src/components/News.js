import PropTypes from 'prop-types'
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

// const buttonStyle = { 
//     display: `${this.state.loading === true ? 'none' : 'block'}` 
// }
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

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }


    async componentDidMount() {
        this.setState({ loading: true });
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        const data = await res.json();

        this.setState({
            totalNews: data.totalResults,
            articles: data.articles,
            totalPages: Math.ceil(this.state.totalNews / this.props.pageSize),
            loading: false
        })
    }

    handlePrevClick = async () => {
        this.setState({ loading: true });
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
        const data = await res.json();

        this.setState({
            articles: data.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    handleNextClick = async () => {
        this.setState({ loading: true });
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
        const data = await res.json();

        this.setState({
            articles: data.articles,
            page: this.state.page + 1,
            loading: false
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center my-5">NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.loading ? <Spinner /> : this.state.articles.map(article => (
                        <div className="col-md-4" key={article.url}>
                            <NewsItem title={article.title ? article.title : ""} description={article.description ? article.description.slice(0, 88) : ""} imageUrl={article.urlToImage} newsUrl={article.url} page={this.state.page} totalPages={this.state.totalPages} />
                        </div>
                    ))}
                    {this.state.page === this.state.totalPages && (<div className='container'>
                        <h1 className='text-center'>End</h1>
                    </div>)}
                </div>

                <div className="container d-flex justify-content-around my-3">
                    <button disabled={this.state.page <= 1} className="btn-primary btn" style={{ display: `${this.state.loading === true ? 'none' : 'block'}` }} onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page === this.state.totalPages} className="btn-primary btn" style={{ display: `${this.state.loading === true ? 'none' : 'block'}` }} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div >
        )
    }
}

export default News