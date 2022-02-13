
const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source })=> {

    return (
      <>
        <div className="card my-3"> 
          <div className='d-flex justify-content-end position-absolute' style={{right: '0'}}>
            <span className="badge round-pill bg-danger" >{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : `https://cbc.iclei.org/wp-content/uploads/2016/10/news2.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5>{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-dark">By {author ? author : 'Unknown'} at {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </>
    )
}

export default NewsItem