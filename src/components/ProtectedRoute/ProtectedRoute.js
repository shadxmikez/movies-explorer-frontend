import React from 'react';
import { Navigate } from 'react-router-dom';
import { ISLOGGEDIN_CONSTANTS, ROUTES } from '../../utils/constants';

const { homePathname } = ROUTES;

const ProtectedRoute = ({ component: Component, ...props }) => {
	const loggedIn = localStorage.getItem(ISLOGGEDIN_CONSTANTS);
	return loggedIn ? <Component {...props} /> : <Navigate to={homePathname} replace />;
};

export default ProtectedRoute;