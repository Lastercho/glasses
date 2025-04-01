import { createContext } from "react";

export const UserContext = createContext({
    id: '', // Changed `_id` to `id` for consistency
    email: '',
    username: '',
    token: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});
