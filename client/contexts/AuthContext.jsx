import React, { createContext, useCallback, useEffect, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const storedDate = JSON.parse(localStorage.getItem('user_data'));

    useEffect(() => {
        if (storedDate) {
            const { userToken, user } = storedDate;
            setToken(userToken);
            setUserData(user);
            setisAuthenticated(true);
        }
    }, [])

    const login = (newToken, newData) => {
        localStorage.setItem(
            'user-data',
            JSON.stringify({ userToken: newToken, user: newData })
        );

        setToken(newToken);
        setUserData(newData);
        setisAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('user-data');
        setToken(null);
        setUserData(null);
        setisAuthenticated(false);
    }


    return (
        <AuthContext.Provider value={(token, isAuthenticated, login, logout, userData)}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useCallback(AuthContext);
