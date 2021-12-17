import React, { useEffect, useState } from 'react';

const OurFoodServices = () => {

    const [ourFood, setOurFood] = useState([]);

    useEffect(() => {
        fetch('')
        .then(res=>res.json())
        .then(data=>setOurFood(data))
    },[])


    return (
        <div className='container'>
            <h1 className='text-center mt-5 title-1 fw-bold'> Our food services</h1>
            
            {
                ourFood.map
            }
        </div>
    );
};

export default OurFoodServices;