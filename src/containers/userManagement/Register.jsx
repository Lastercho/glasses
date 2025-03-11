import { useState } from 'react';
import axios from 'axios';
import '../../css/register.css';

const Register = () => {
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
            setSuccess('Успешна регистрация!');
            setError('');
            console.log('Registration successful:', response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Грешка при регистрацията');
            setSuccess('');
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div>
                    <h2 className="register-title">
                        Регистрация
                    </h2>
                    <p className="register-subtitle">
                        Създайте нов акаунт и започнете да използвате нашите услуги
                    </p>
                </div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-user-info">
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">
                            Потребителско име
                        </label>
                        <input
                            name="username"
                            type="text"
                            required
                            className="form-input"
                            placeholder="Изберете потребителско име"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Имейл адрес
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="form-input"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Парола
                        </label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="form-input"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="address-section">
                        <h3 className="address-title">Адрес
                        </h3>

                        <div className="address-fields">
                            <section>
                            <div className="form-group">
                                <label htmlFor="street" className="form-label">
                                    Улица
                                </label>
                                <input
                                    name="address.street"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Улица и номер"
                                    value={formData.address.street}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city" className="form-label">
                                    Град
                                </label>
                                <input
                                    name="address.city"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Град"
                                    value={formData.address.city}
                                    onChange={handleChange}
                                />
                            </div>
                            </section>
                            <section>
                            <div className="form-group">
                                <label htmlFor="country" className="form-label">
                                    Държава
                                </label>
                                <input
                                    name="address.country"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Държава"
                                    value={formData.address.country}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="postal_code" className="form-label">
                                    Пощенски код
                                </label>
                                <input
                                    name="address.postal_code"
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="Пощенски код"
                                    value={formData.address.postal_code}
                                    onChange={handleChange}
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
                            Регистрация
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register; 