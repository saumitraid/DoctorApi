import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute({ component: Component, role, ...rest }) {
  const { isAuthenticated, role: userRole, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Optional: Replace with a loader component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
}

export default PrivateRoute;