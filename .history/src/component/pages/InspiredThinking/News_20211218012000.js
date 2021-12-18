import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const News = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news/${news}")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="">
      {/* <h2> News Room {news.length} </h2> */}
      <div className="food-banner-bg">
        <div className="food-banner-main">
          <div className="food-banner-title ">
            <h1 className="title-1 fw-bold ">
              Two Sodexo women recognised in WiHTL Women to Watch and Role
              Models index
            </h1>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <main className="container mt-5">
        <div className="mt-5">
          <h5>
            Sodexo is proud to announce that Aoife Wycherley and Deirdre
            Saunders have been recognised as role models in the third Women to
            Watch & Role Models for Inclusion in Hospitality, Travel & Leisure
            (HTL) Index 2021, produced by WiHTL in partnership with the MBS
            Group.
          </h5>
          <p className="mt-4">
            The 2021 Index features 62 women and 13 advocates for change from
            across the hospitality, travel and leisure industry.
          </p>
          <p>
            Aoife Wycherley joined Sodexo in 2011 as a buyer and over the last
            ten years has held a number of roles within Sodexo’s supply
            management team. Since early 2020 Aoife took on a dual role of head
            of food procurement and head of supply chain, she is responsible for
            spend in the region of £150 million.
          </p>
          <p>
            Aoife is passionate about responsible procurement and was
            instrumental in the launch of Sodexo’s supplier inclusion programme
            in 2015. The programme continues to this day, helping small, medium
            enterprises (SMEs) and voluntary, community and social enterprises
            (VCSEs) not only become part of Sodexo’s supply chain but providing
            them with valuable business advice and mentoring to help make their
            businesses a success.
          </p>

          <img
            className="w-100"
            src="https://uk.sodexo.com/files/live/sites/com-uk/files/News%20Room/Aoife%20Wycherley.jpg"
            alt=""
          />

          <p className="mt-5">
            Deirdre Saunders is divisional director for Sodexo Ireland with
            responsibility for more than half of Sodexo’s employees based in the
            Republic of Ireland and Northern Ireland and is a member of the
            Sodexo Ireland senior leadership team.
          </p>
          <img
            className="w-100"
            src="https://uk.sodexo.com/files/live/sites/com-uk/files/News%20Room/Deirdre%20Saunders.jpg"
            alt=""
          />

          <p className="mt-5">
            Diversity, equity and inclusion have long-been heralded by Sodexo as
            real differentiators and it endeavours to make these values part of
            its DNA and through its Social Impact Pledge it has committed to
            creating social contracts that support equity, inclusion and
            wellbeing.
          </p>

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
