import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        console.log("constructor from news");
        this.state={
            articles:[],
            loading: false
        }
    }
    async componentDidMount()
    {
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dbb2ef303dce434c87ca8488d40b1e9b"
        let data = await fetch(url);
        let parsedData = await data.json()

        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
            <h2>NEWS-Monkey Top headlines</h2>
            <div className="row">
            { this.state.articles.map((el)=>{
                return(
                    <div className="col-md-4" key={el.url}>
                    <NewsItem  title={el.title} description={el.description} imageUrl={el.urlToImage} newsUrl={el.url}/>
                    </div>
                )
            })}
            </div>
      </div>
    )
  }
}

export default News