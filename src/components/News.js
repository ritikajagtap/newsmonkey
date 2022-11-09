import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageize: 5,
    category: 'general',
    apiKey: ''
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string
  }
  constructor(props) {
    super(props);
    console.log("constructor from news");
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0
    }

    document.title = `${this.props.category} - NewsMonkey`
  }
  async updateNews() {
    this.props.setProgress(0);
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbb2ef303dce434c87ca8488d40b1e9b&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.props.setProgress(30);
    
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json()
    this.setState({ loading: false })
    this.props.setProgress(80);
    
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }
  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ loading: false })

    console.log(parsedData);
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults })
  };
  render() {
    return (<>
      <div className="cotnainer" style={{backgroundColor:"#191970", width:"100%"}}>
        <h1 className='text-center mb-3' style={{color:"white"}}>NEWS-Monkey Top headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll style={{margin: "12px"}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">


            <div className="row" >
              {this.state.articles.map((el) => {
                return (
                  <div className="col-md-4"  key={el.url}>
                    <NewsItem title={el.title} description={el.description} imageUrl={el.urlToImage} newsUrl={el.url} author={el.author} date={el.publishedAt} source={el.source.name} />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
    )
  }
}

export default News