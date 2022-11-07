import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageize: 5,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    console.log("constructor from news");
    this.state = {
      articles: [],
      page: 1,
      loading: false,

    }
  }
  async componentDidMount() {
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbb2ef303dce434c87ca8488d40b1e9b&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ loading: false })

    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handleNextClick = async () => {
    console.log("Next")

    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbb2ef303dce434c87ca8488d40b1e9b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ loading: false })

    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
  handlePrevClick = async () => {
    console.log(this.state.articles.length)
    console.log("Previous");

    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbb2ef303dce434c87ca8488d40b1e9b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ loading: false })

    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NEWS-Monkey Top headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((el) => {
            return (
              <div className="col-md-4" key={el.url}>
                <NewsItem title={el.title} description={el.description} imageUrl={el.urlToImage} newsUrl={el.url} author={el.author} date={el.publishedAt} source={el.source.name}/>
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page * this.props.pageSize >= this.state.totalResults} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News