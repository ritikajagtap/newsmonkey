import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


const News  = (props) => {
  
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState([true])
  const[page, setPage] = useState(1)
  const[totalResults, settotalResults] = useState(0)
  // document.title = `${props.category} - NewsMonkey`

  const updateNews = async() => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=dbb2ef303dce434c87ca8488d40b1e9b&page=${page}&pageSize=${props.pageSize}`
    props.setProgress(30);
    
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json()
    props.setProgress(80);
    
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }
  useEffect(() => {
     updateNews();
  })

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }
  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }
  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`
    setloading(true)

    let data = await fetch(url);
    let parsedData = await data.json()
    setloading(false)

    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults);
  };
    return (<>
      <div className="cotnainer" style={{backgroundColor:"#191970", width:"100%"}}>
        <h1 className='text-center mb-3' style={{color:"white"}}>NEWS-Monkey Top headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll style={{margin: "12px"}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">


            <div className="row" >
              {articles.map((el) => {
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

News.defaultProps = {
  country: 'in',
  pageize: 5,
  category: 'general',
  apiKey: ''
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string
}
export default News