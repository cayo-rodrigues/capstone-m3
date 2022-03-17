import { createContext, useState, useContext } from "react";

const AuthenticatedContext = createContext();

export const AuthenticatedProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem("@ProWorkin:user") ? true : false
    );

    return (
        <AuthenticatedContext.Provider
            value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthenticatedContext.Provider>
    );
};

export const useAuthenticated = () => useContext(AuthenticatedContext);
