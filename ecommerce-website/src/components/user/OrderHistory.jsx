import React from 'react';

const OrderHistory = () => {
    // Placeholder data for order history
    const orders = [
        {
            id: 1,
            date: '2023-10-01',
            total: '$50.00',
            status: 'Delivered',
        },
        {
            id: 2,
            date: '2023-09-15',
            total: '$75.00',
            status: 'Pending',
        },
        {
            id: 3,
            date: '2023-08-20',
            total: '$30.00',
            status: 'Cancelled',
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Order ID</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">Total</th>
                        <th className="py-2 px-4 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className="py-2 px-4 border-b">{order.id}</td>
                            <td className="py-2 px-4 border-b">{order.date}</td>
                            <td className="py-2 px-4 border-b">{order.total}</td>
                            <td className="py-2 px-4 border-b">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;