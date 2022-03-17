import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const handleUser = (userInfo) => {
        setUser({ ...userInfo });
        localStorage.setItem("@ProWorkin:user", JSON.stringify(userInfo));
    };

    return (
        <UserContext.Provider value={{ user, handleUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
