import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="container-full-height">
      <h2> News Room {news.length} </h2>
      <div className="food-banner-bg">
        <div className="food-banner-main">
          <div className="food-banner-title ">
            <h1 className="title-1 fw-bold ">
              Two Sodexo women recognised in WiHTL Women to Watch and Role Models index
            </h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
          </div>
          <main>
              <div>
                  
              </div>
          </main>
    </div>
  );
};

export default News;