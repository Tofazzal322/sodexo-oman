import React from 'react';
import { useSelector } from 'react-redux';

const FacilityManagementBanner = () => {
  const books = useSelector((state)=>state?.service?.allServices)
  console.log(books);
    return (
         <div className="facility-banner-bg">
      <div className="food-banner-main">
        <div className="food-banner-title ">
            <h1 className="title-1 fw-bold ">
              
          Facilities Management Services
                  </h1>
                  
              </div>
             <div className="horizontal-line"></div>
      </div>
    </div>
    );
};

export default FacilityManagementBanner;