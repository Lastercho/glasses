import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.jsx';
import { Outlet, Navigate } from 'react-router-dom';

export default function AuthGuard() {
    const { token } = useContext(UserContext);
    

        if (token === null || token === undefined) {
            return <Navigate to="/login" />;
        }
    

    return <Outlet />;
}