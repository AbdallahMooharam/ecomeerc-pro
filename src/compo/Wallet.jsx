import React from 'react';

const Wallet = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Wallet</h2>
            <p>Your current balance: <span className="font-bold">$100.00</span></p>
            <button className="bg-blue-500 text-white p-2 rounded mt-4">Add Funds</button>
        </div>
    );
};

export default Wallet;
