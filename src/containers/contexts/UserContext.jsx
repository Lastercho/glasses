import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    token: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});
