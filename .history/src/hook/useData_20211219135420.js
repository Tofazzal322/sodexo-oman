import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
  fetch('')
            .then(res => res.json())
        .then(data=>setData(data))
},[])
    return 
        

};

export default useData;