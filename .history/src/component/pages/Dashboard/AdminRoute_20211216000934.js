import React from 'react';

const AdminRoute = () => {
const  {user} = useAuth();
    
    return (
         user.email ? children : <Navigate to="/login" />
    );
};

export default AdminRoute;