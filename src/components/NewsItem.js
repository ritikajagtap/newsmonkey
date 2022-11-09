import React from 'react'

const NewsItem= (props) => {


        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='container my-3'>
                <div className="card" style={{ width: "14rem;", backgroundColor:"black", color:"white"}}>
                    <div className="container">
                        
                    </div>
                    <span style={{zIndex:1, left: '90%'}}className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
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

export default NewsItem