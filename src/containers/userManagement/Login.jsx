import { useState } from 'react';
import axios from 'axios';
import '../../css/login.css';
import {useNavigate} from "react-router";

export default function Login () {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

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
            console.log(response.data);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setSuccess('Успешен вход!');
                navigate('/');
            } else {
                setError('Token is missing in the response');
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Възникна грешка при входа');
            } else if (error.request) {
                setError('Няма отговор от сървъра. Моля, опитайте отново по-късно.');
            } else {
                setError('Възникна грешка при входа');
            }
            setSuccess('');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
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
                            autoComplete="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
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
                            autoComplete="current-password"
                        />
                    </div>

                    {error && (
                        <div className="error-message">
                            <div className="message-content">
                                <p className="message-text error-text">{error}</p>
                            </div>
                        </div>
                    )}

                    {success && (
                        <div className="success-message">
                            <div className="message-content">
                                <p className="message-text success-text">{success}</p>
                            </div>
                        </div>
                    )}

                    <div>
                        <button type="submit" className="submit-button">
                            <span className="button-icon">
                            </span>
                            SIGN IN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
