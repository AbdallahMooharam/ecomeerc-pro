import React, { useState } from 'react';
import PersonalDataForm from '../compo/PersonalDataForm';
import Wallet from '../compo/Wallet';
import Orders from '../compo/Orders';
// لا داعي لاستيراد OrderRequest بعد الآن

const Profile = () => {
    const [activeTab, setActiveTab] = useState('personalData');

    const renderContent = () => {
        switch (activeTab) {
            case 'personalData':
                return <PersonalDataForm />;
            case 'wallet':
                return <Wallet />;
            case 'orders':
                return <Orders />;
            default:
                return <PersonalDataForm />;
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-5">
            <nav className="bg-gray-800 text-white p-4 lg:col-span-1">
                <h2 className="text-lg font-bold mb-4">Menu</h2>
                <ul>
                    <li
                        className={`mb-2 cursor-pointer hover:text-blue-400 ${activeTab === 'personalData' ? 'font-bold' : ''}`}
                        onClick={() => setActiveTab('personalData')}
                    >
                        Personal Data
                    </li>
                    <li
                        className={`mb-2 cursor-pointer hover:text-blue-400 ${activeTab === 'wallet' ? 'font-bold' : ''}`}
                        onClick={() => setActiveTab('wallet')}
                    >
                        Wallet
                    </li>
                    <li
                        className={`mb-2 cursor-pointer hover:text-blue-400 ${activeTab === 'orders' ? 'font-bold' : ''}`}
                        onClick={() => setActiveTab('orders')}
                    >
                        Orders
                    </li>
                    {/* تم إزالة رابط Order Request */}
                </ul>
            </nav>
            <div className="w-full p-4 bg-gray-100 lg:col-span-4 mt-12">
                <h1 className="text-2xl font-bold mb-4">Profile Dashboard</h1>
                {renderContent()}
            </div>
        </div>
    );
};

export default Profile;
