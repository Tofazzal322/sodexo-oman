import React,{ useEffect, useState } from 'react';

const FoodServices = () => {
    const [foodServices, setFoodServices] = useState([])
    useEffect(() => {
        fetch('')
        .then(res=>res.json)

    },[])
    return (
        <div>
            <h2> Food Services</h2>
        </div>
    );
};

export default FoodServices;