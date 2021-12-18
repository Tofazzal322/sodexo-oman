import React from 'react';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const { jobsId } = useParams();
    console.log(object);
    return (
        <div>
            <h1> Job Apply form</h1>
        </div>
    );
};

export default JobApply;