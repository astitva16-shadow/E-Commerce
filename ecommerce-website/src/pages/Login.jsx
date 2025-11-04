import React, { useState } from 'react';
import LoginForm from '../components/user/LoginForm';

const Login = () => {
    const [error, setError] = useState(null);

    const handleLogin = async (credentials) => {
        try {
            // Implement login logic here (e.g., API call)
            // If login fails, set error message
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Login to Your Account</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default Login;