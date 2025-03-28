import { useState, useContext } from 'react';
import axios from 'axios';
import '../../css/login.css';
import { useNavigate } from "react-router";
import {UserContext} from "../contexts/UserContext.jsx";


export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);


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
            if (response.data.token) {
                userLoginHandler(response.data);
               

                navigate(-1);
            } else {
                setError('Token is missing in the response');
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Възникна грешка при входа');
            } else if (error.request) {
                setError('Няма отговор от сървъра. Моля, опитайте отново по-късно.');
            } else {
                setError('Възникна грешка при входа в системата');
            }
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
