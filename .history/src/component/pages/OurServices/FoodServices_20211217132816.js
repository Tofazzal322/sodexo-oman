import React,{ useEffect, useState } from 'react';
import FoodServiceBanner from './FoodServicesSection/FoodServiceBanner';

const FoodServices = () => {
    const [foodServices, setFoodServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/food-services')
        .then(res=>res.json())
        .then(data=>setFoodServices(data))

    },[])
    return (
        <div className='container-full-height'>
            {/* <h2> Food Services ({foodServices.length})</h2> */}
            <FoodServiceBanner></FoodServiceBanner>
            
        </div>
    );
};

export default FoodServices;