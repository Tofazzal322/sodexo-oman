import React,{ useEffect, useState } from 'react';

const FoodServices = () => {
    const [foodServices, setFoodServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/food-services')
        .then(res=>res.json())
        .then(data=>setFoodServices(DataView))

    },[])
    return (
        <div>
            <h2> Food Services</h2>
        </div>
    );
};

export default FoodServices;