import React from 'react';
import FacilityManagementBanner from './FacilityManagementBanner';
import OurFoodServices from "./FoodServicesSection/OurFoodServices";

const FacilityManagement = () => {
  return (
    <div className="">
      <FacilityManagementBanner></FacilityManagementBanner>

      <h1>Strategic Facilities Services</h1>
      <p>
        We provide end-to-end strategic facilities management solutions and
        services to a wide range of industries and market sectors.
      </p>

      <OurFoodServices></OurFoodServices>

      <div>
              <h1>Soft and Hard Facilities Services</h1>
              
          </div>
          
    </div>
  );
};

export default FacilityManagement;