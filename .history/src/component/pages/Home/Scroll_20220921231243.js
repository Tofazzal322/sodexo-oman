import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
// import Iframe from "react-iframe";

const Scroll = () => {
    return (
        <div className="mb-2 p">
            <Row>
        <Col xs={2} className="latest-news">
          <div className="ps-3">
            <h6 className="latest-news-text ps-2">
              <small className="latest">Our</small>{" "}
              <small className="news">Services</small>
            </h6>
          </div>
        </Col>
        <Col xs={10} className="footer">
          <Marquee
            className="text-light marquee-text ms-0 ps-0 h-100"
            speed="200"
            delay="2"
            gradientWidth="200"
          >
            <span className="scroll-text">
              " SOCAT's various services offered as part of Site Management
              includes :- Catering <span className="nd-part">|</span>{" "}
              Housekeeping <span className="nd-part">|</span> Cleaning{" "}
              <span className="nd-part">|</span> Laundry{" "}
              <span className="nd-part">|</span> Pest Control{" "}
              <span className="nd-part">|</span> Preventive Maintenance{" "}
              <span className="nd-part">|</span> Manpower supply{" "}
              <span className="nd-part">|</span> Gardening & Landscaping "
              <span className="nd-part2">
                " The above services cover all different segments in the country
                including : Oil & Gas <span className="nd-part">|</span>{" "}
                Hospitals<span className="nd-part">|</span> Schools{" "}
                <span className="nd-part">|</span> Defense{" "}
                <span className="nd-part">|</span> Business Institutions "
              </span>
              </span>
              

          </Marquee>
        </Col>
      </Row>
        </div>
    );
};

export default Scroll;