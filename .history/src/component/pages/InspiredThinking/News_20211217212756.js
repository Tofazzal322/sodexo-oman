import React, { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(''
        .then(res=>res.json()))
    },[])

    return (
        <div className='container-full-height'>
            <h2> News Room </h2>
        </div>
    );
};

export default News;