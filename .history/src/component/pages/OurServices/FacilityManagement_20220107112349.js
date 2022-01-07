import React from 'react';
import FacilityManagementBanner from './FacilityManagementBanner';
import OurFoodServices from "./FoodServicesSection/OurFoodServices";
import SoftHardFacilities from "./SoftHardFacilities";

const FacilityManagement = () => {
  return (
    <div className="container-fluid">
      <FacilityManagementBanner></FacilityManagementBanner>

      <h1 className='text-center'>Strategic Facilities Services</h1>
      <p>
        We provide end-to-end strategic facilities management solutions and
        services to a wide range of industries and market sectors.
      </p>

      <OurFoodServices></OurFoodServices>

      <div>
        <h1 className='text-center'>Soft and Hard Facilities Services</h1>
        <SoftHardFacilities></SoftHardFacilities>
      </div>
    </div>
  );
};

export default FacilityManagement;