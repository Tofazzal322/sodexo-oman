import React from 'react';
import OurFoodServices from './FoodServicesSection/OurFoodServices';
import PropertyManagementBanner from './PropertyManagment/PropertyManagementBanner';

const PropertyServices = () => {
    return (
        <div className='container-full-height'>
           
            <PropertyManagementBanner></PropertyManagementBanner>
            <OurFoodServices></OurFoodServices>
            <FoodExperience></FoodExperience>
            <div className='blue-bg p-4 mt-5 '>
                <Insights></Insights>
            </div>
        </div>
    );
};

export default PropertyServices;