import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

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
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dbb2ef303dce434c87ca8488d40b1e9b&page=${this.state.page}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json()

    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handleNextClick   = async () =>   {
    console.log("Next")
    
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dbb2ef303dce434c87ca8488d40b1e9b&page=${this.state.page+1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json()

    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
   handlePrevClick  = async () =>    {
    console.log(this.state.articles.length)
    console.log("Previous");
    
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dbb2ef303dce434c87ca8488d40b1e9b&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json()

    console.log(parsedData);
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NEWS-Monkey Top headlines</h2>
        <div className="row">
          {this.state.articles.map((el) => {
            return (
              <div className="col-md-4" key={el.url}>
                <NewsItem title={el.title} description={el.description} imageUrl={el.urlToImage} newsUrl={el.url} />
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
          <button  disabled={this.state.page * 20 >= this.state.totalResults} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News