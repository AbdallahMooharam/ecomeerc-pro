import React from 'react';

const Orders = () => {
    const orderList = [
        { id: 1, item: 'Product 1', status: 'Shipped' },
        { id: 2, item: 'Product 2', status: 'Processing' },
        { id: 3, item: 'Product 3', status: 'Delivered' },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Orders</h2>
            <ul>
                {orderList.map(order => (
                    <li key={order.id} className="mb-2">
                        {order.item} - <span className="font-bold">{order.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
