import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImg1 from "../../../images/NetZero_1584x568.jpg";
import bannerImg2 from "../../../images/VS_lady_cat_1280x443.jpg";
import bannerImg3 from "../../../images/HC_Header_Protecta1_1280x443.jpg";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerImg2} alt="First slide" />
        <Carousel.Caption>
          <h3>Vital Spaces</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerImg1} alt="Second slide" />

        <Carousel.Caption>
          <h3>Food waste</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerImg3} className="d-block w-100" alt="Third slide" />

        <Carousel.Caption>
          <h3>Protected</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
