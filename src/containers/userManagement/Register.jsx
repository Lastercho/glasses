import { useState } from 'react';
import axios from 'axios';
import '../../css/register.css';
import {useNavigate} from "react-router";

export default function Register ()  {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        address: {
            street: '',
            city: '',
            country: '',
            postal_code: ''
        }
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', formData);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            setSuccess('Registration successful!');
            setError('');
            console.log('Registration successful:', response.data);
            navigate('/')
        } else {
            setError('Token is missing in the response');
        }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration error');
            setSuccess('');
        }
    };
   
    return (
        <div className="register-container">
            <div className="register-card">
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-user-info">
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">
                            User name
                        </label>
                        <input
                            name="username"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Write your username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete='username'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="form-input"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete='email'
                        />
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="form-input"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete='new-password'
                        />
                    </div>
                    <div className="address-section">
                        <h3 className="address-title">
                            Address
                        </h3>

                        <div className="address-fields">
                            <section>
                            <div className="form-group">
                                <label htmlFor="street" className="form-label">
                                    Street
                                </label>
                                <input
                                    name="address.street"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Street and number"
                                    value={formData.address.street}
                                    onChange={handleChange}
                                    autoComplete='street-address'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city" className="form-label">
                                    City
                                </label>
                                <input
                                    name="address.city"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="City"
                                    value={formData.address.city}
                                    onChange={handleChange}
                                    autoComplete='address-level2'
                                />
                            </div>
                            </section>
                            <section>
                            <div className="form-group">
                                <label htmlFor="country" className="form-label">
                                    Country
                                </label>
                                <input
                                    name="address.country"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Country"
                                    value={formData.address.country}
                                    onChange={handleChange}
                                    autoComplete='country-name'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="postal_code" className="form-label">
                                    Postal Code
                                </label>
                                <input
                                    name="address.postal_code"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Postal Code"
                                    value={formData.address.postal_code}
                                    onChange={handleChange}
                                    autoComplete='postal-code'
                                />
                            </div>
                            </section>
                        </div>
                    </div>

                    {error && (
                        <div className="error-message">
                            <div className="message-content">
                                <svg className="message-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <p className="message-text error-text">{error}</p>
                            </div>
                        </div>
                    )}

                    {success && (
                        <div className="success-message">
                            <div className="message-content">
                                <svg className="message-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <p className="message-text success-text">{success}</p>
                            </div>
                        </div>
                    )}

                    <div>
                        <button type="submit" className="submit-button">
                            <span className="button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
