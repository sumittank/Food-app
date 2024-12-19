import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the auth token and navigate to the login page
        localStorage.removeItem('authToken');
        navigate('/login');
    }, [navigate]);

    return null; // No UI needed since it's just for redirecting
}

export default Logout;
