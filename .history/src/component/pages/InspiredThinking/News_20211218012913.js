import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const News = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    fetch(`http://localhost:5000/news/${newsId}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="">
      {/* <h2> News Room {news.length} </h2> */}
      <div className="food-banner-bg">
        <div className="food-banner-main">
          <div className="food-banner-title ">
            <h1 className="title-1 fw-bold ">{news?.title}</h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <main className="container mt-5">
        <div className="mt-5">
          <h5>{news.paragraphTitle}</h5>
          <p className="mt-4 fw-bold text-danger">{news.date}</p>
          <p>{news.paragraph}</p>
          <p>{news.paragraph}</p>

          <img className="w-100" src={news?.newsImg1} alt="" />

          <p className="mt-5">{news.paragraph}</p>
          <img className="w-100" src={news?.newsImg2} alt="" />

          <p className="mt-5">{news.paragraph}</p>

          <div className="mt-5 text-center mb-5">
            <Link className="fs-5 back-to-list-btn" to="/LatestNews">
              {" "}
              Back to the list{" "}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;
