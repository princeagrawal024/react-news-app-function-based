import DateUtils from "../utils/dateUtils";
import '../styles/NewsItem.css'

const NewsItem= (props)=>{
    //this is the syntax of props types in class
    let { title, description, imageUrl, newsUrl, dateTime, author, sourceName } = props;
    return (
      <div className="my-3">
        <div className="card">
          
          <img src={imageUrl} className="card-img-top" alt="img failed to load" />
          
          <div className="card-body">
            <h5 className="card-title">{title} 
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {sourceName}
              <span className="visually-hidden">unread messages</span></span>
            </h5>
            <p ><i>By <strong>{author}</strong> on <strong>{DateUtils.formatDate(dateTime)}</strong></i></p> 
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">more...</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
