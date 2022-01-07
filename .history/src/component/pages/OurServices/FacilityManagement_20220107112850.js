import React from 'react';
import FacilityManagementBanner from './FacilityManagementBanner';
import OurFoodServices from "./FoodServicesSection/OurFoodServices";
import SoftHardFacilities from "./SoftHardFacilities";
import StrategicFacilities from './StrategicFacilities';

const FacilityManagement = () => {
  return (
    <div className="container-fluid">
      <FacilityManagementBanner></FacilityManagementBanner>

      <h1 className="text-center mt-5 fw-bold title-1">
        Strategic Facilities Services
      </h1>
      <p className="text-center">
        We provide end-to-end strategic facilities management <br /> solutions
        and services to a wide range of industries and market sectors.
      </p>

      <StrategicFacilities></StrategicFacilities>

      <div>
        <SoftHardFacilities></SoftHardFacilities>
      </div>
    </div>
  );
};

export default FacilityManagement;