import React from 'react';
import {useNavContext} from "./context";

const withActiveNav = (Component) => {
    return (props) => {
        const { activeNav, setActiveNav } = useNavContext();

        return (
            <Component
                {...props}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
            />
        );
    };
};

export default withActiveNav;