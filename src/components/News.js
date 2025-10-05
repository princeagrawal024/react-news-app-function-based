import NewsItem from "./NewsItem";
import React, { useState } from "react";
import dummyJsonArticles from "../response/usTopNews.json";
import defaultNewsImage from "../response/default-img.png";
import Loader from "./MyLoader";
import '../styles/News.css'

const News=(props)=>{
  const [articles, setArticles] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [defaultPageSize, setDefaultPageSize] = useState(9);
  const [totalArticles, setTotalArticles] = useState(32);
  const [totalPage, setTotalPage] = useState(1);
  const [showLoader, setShowLoader] = useState(false);

  React.useEffect(() => {
    loadPage(currentPage, defaultPageSize);
    calculateTotalPages();
  }, []);

  React.useEffect(() => {
    document.title = `Dainik Samachar: ${props.category}`;
    setPage(1);
    loadPage(1, defaultPageSize);
  }, [props.category]);

  let loadPage =async(pageNumber, pageSize)=> {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us";
    try {
      setShowLoader(true);
      props.setProgress(30);
      let pageParam = "&page=" + pageNumber;
      let pageSizeParam = "&pageSize=" + pageSize;
      let categoryParam = props.category ? "&category=" + props.category : "";
      let apiKeyParam = `&apiKey=${props.apiKey}`;
      url = url.concat(pageParam).concat(pageSizeParam).concat(categoryParam).concat(apiKeyParam);
      props.setProgress(50);
      let data = await fetch(url);
      props.setProgress(80);
      let parsedData = await data.json();
      props.setProgress(100);
        setArticles(parsedData.articles);
        setTotalArticles(parsedData.totalResults);
        setShowLoader(false);
    } catch {
      setArticles(dummyJsonArticles.articles);
      setShowLoader(false);
    }
  }

  let calculateTotalPages = () => {
    let totalPagesCalculated = Math.ceil(totalArticles / defaultPageSize);
    setTotalPage(totalPagesCalculated);
  };

  let handlePrevClick = () => {
    let previousPage = currentPage - 1;
    setPage(previousPage);
    loadPage(previousPage, defaultPageSize);
  };

  let handleNextClick = () => {
    let nextPage = currentPage + 1;
    setPage(nextPage);
    loadPage(nextPage, defaultPageSize);
    
  };


    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '40px 0px'}}>Top {props.category==="general" ? "" : props.category} Headlines</h1>
        <div>
          {showLoader&&<Loader/>}
        </div>
        <div className="row">
          { !showLoader &&
            articles.map((element)=>{
            return <div 
              className="col-md-4" key={element.url}> 
              <NewsItem 
                  title={element.title} 
                  description={element.description!=null ? element.description.slice(0,90).concat("...") : null} 
                  imageUrl={element.urlToImage ? element.urlToImage : defaultNewsImage } 
                  newsUrl={element.url}
                  dateTime={element.publishedAt}  
                  author={element.author!=null? element.author: `unknown`}
                  sourceName={element.source.name!=null? element.source.name: `unknown`}
              /> 
            </div>  
          })}
        </div>


    <div className="pagination-controls">
     <div className="left">
        <button type="button" disabled={currentPage <= 1} className="btn btn-primary btn-lg" onClick={handlePrevClick}>&larr; Previous</button>
    </div>

    <div className="center"><span className="displayPageNumber">Page {currentPage} of {totalPage}</span></div>

  <div className="right">
    <button type="button" disabled={currentPage >= totalPage} className="btn btn-primary btn-lg" onClick={handleNextClick}> Next &rarr;
    </button>
  </div>
</div>
      </div>
    );
  }

export default News;
