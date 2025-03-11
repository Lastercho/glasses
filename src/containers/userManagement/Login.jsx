import { useState } from 'react';
import axios from 'axios';
import '../../css/login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', formData);
            setSuccess('Успешен вход!');
            setError('');
            console.log('Login successful:', response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'Грешка при входа');
            setSuccess('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div>
                    <h2 className="login-title">
                        Вход в системата
                    </h2>
                    <p className="login-subtitle">
                        Добре дошли обратно! Моля, влезте в своя акаунт.
                    </p>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Имейл адрес
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="form-input"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Парола
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="form-input"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                        />
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
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Вход
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login; 