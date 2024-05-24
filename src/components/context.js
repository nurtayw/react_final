import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const useNavContext = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <NavContext.Provider value={{ activeNav, setActiveNav }}>
            {children}
        </NavContext.Provider>
    );
};