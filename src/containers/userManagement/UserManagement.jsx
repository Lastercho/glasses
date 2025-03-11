import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const UserManagement = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            <button
                                onClick={() => setActiveTab('login')}
                                className={`${
                                    activeTab === 'login'
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Вход
                            </button>
                            <button
                                onClick={() => setActiveTab('register')}
                                className={`${
                                    activeTab === 'register'
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Регистрация
                            </button>
                        </nav>
                    </div>
                    <div className="mt-6">
                        {activeTab === 'login' ? <Login /> : <Register />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement; 