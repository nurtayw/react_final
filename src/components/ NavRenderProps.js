import React from 'react';
import { useNavContext } from './context';

const NavRenderProps = ({ children }) => {
    const { activeNav, setActiveNav } = useNavContext();

    return children({ activeNav, setActiveNav });
};

export default NavRenderProps;