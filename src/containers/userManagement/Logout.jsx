import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../contexts/UserContext.jsx';

export default function Logout() {
    const { userLogoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        userLogoutHandler();
        navigate(-1);
    }, [userLogoutHandler, navigate]);

    return null;
}