import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div >
                <div className="card" style={{ width: "18rem;" }}>
                    <span style={{zIndex:1, left: '90%'}}className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}<span className='visually-hidden'>unread messages</span></span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} className="btn btn-dark btn-sm" target="_blank">Read More</a>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem