import React from 'react';

const PersonalDataForm = () => {
    return (
        <form className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Personal Data</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input className="border border-gray-300 p-2 w-full" type="text" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input className="border border-gray-300 p-2 w-full" type="email" />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded">Update Data</button>
        </form>
    );
};

export default PersonalDataForm;
