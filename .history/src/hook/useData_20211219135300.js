import React, { useEffect } from 'react';

const useData = () => {
    const [data]
    useEffect(() => {
  fetch('')
            .then(res => res.json())
        .then(data=>setData(data))
},[])
    return (
        <div>
            
        </div>
    );
};

export default useData;