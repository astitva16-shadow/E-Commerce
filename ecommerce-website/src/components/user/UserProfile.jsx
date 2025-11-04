import React from 'react';

const UserProfile = () => {
    // Placeholder user data
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St, Anytown, USA",
        phone: "123-456-7890",
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
        </div>
    );
};

export default UserProfile;