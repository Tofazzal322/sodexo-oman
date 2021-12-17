import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="">
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
          <main className="container mt-5">
              <div className="mt-5">
                  <h5>
                      Sodexo is proud to announce that Aoife Wycherley and Deirdre Saunders have been recognised as role models in the third Women to Watch & Role Models for Inclusion in Hospitality, Travel & Leisure (HTL) Index 2021, produced by WiHTL in partnership with the MBS Group.
                  </h5>
                  <p>
                      The 2021 Index features 62 women and 13 advocates for change from across the hospitality, travel and leisure industry.
                  </p>
                  <p>
                      Aoife Wycherley joined Sodexo in 2011 as a buyer and over the last ten years has held a number of roles within Sodexo’s supply management team.  Since early 2020 Aoife took on a dual role of head of food procurement and head of supply chain, she is responsible for spend in the region of £150 million.
                  </p>
              </div>
          </main>
    </div>
  );
};

export default News;
