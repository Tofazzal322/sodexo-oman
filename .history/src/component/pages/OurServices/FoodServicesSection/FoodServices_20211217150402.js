import React,{ useEffect, useState } from 'react';
import Insights from '../../InspiredThinking/Insights';
import FoodExperience from './FoodExperience';
import FoodServiceBanner from './FoodServiceBanner';
import OurFoodServices from './OurFoodServices';

const FoodServices = () => {
    // const [foodServices, setFoodServices] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/food-services')
    //     .then(res=>res.json())
    //     .then(data=>setFoodServices(data))

    // },[])
    return (
        <div className=''>
           
            <FoodServiceBanner></FoodServiceBanner>
            <OurFoodServices></OurFoodServices>
            <FoodExperience></FoodExperience>
            <div className='blue-bg p-4 mt-5 '>
                <Insights></Insights>
            </div>
        </div>
    );
};

export default FoodServices;