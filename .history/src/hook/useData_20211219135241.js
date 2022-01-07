import React, { useEffect } from 'react';

const useData = () => {
    useEffect(() => {
  fetch('')
            .then(res => res.json())
        .then(data=>setData)
},[])
    return (
        <div>
            
        </div>
    );
};

export default useData;