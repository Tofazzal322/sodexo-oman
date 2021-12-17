import React,{ useEffect, useState } from 'react';
import Insights from '../InspiredThinking/Insights';
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
        <div className=''>
           
            <FoodServiceBanner></FoodServiceBanner>
            <OurFoodServices></OurFoodServices>
            <FoodExperience></FoodExperience>
            <div className='bg-warning p-4 mt-'>
                <Insights></Insights>
            </div>
        </div>
    );
};

export default FoodServices;