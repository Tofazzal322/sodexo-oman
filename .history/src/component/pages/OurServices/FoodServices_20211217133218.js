import React,{ useEffect, useState } from 'react';
import FoodExperience from './FoodServicesSection/FoodExperience';
import FoodServiceBanner from './FoodServicesSection/FoodServiceBanner';
import OurFoodServices from './FoodServicesSection/OurFoodServices';

const FoodServices = () => {
    const [foodServices, setFoodServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/food-services')
        .then(res=>res.json())
        .then(data=>setFoodServices(data))

    },[])
    return (
        <div className='container-full-height mt-5'>
            {/* <h2> Food Services ({foodServices.length})</h2> */}
            <FoodServiceBanner></FoodServiceBanner>
            <OurFoodServices></OurFoodServices>
            <FoodExperience></FoodExperience>
        </div>
    );
};

export default FoodServices;