import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useNavContext } from '../context';
import './topbar.css';

import withActiveNav from '../withActiveNav';
import NavRenderProps from '../ NavRenderProps';

const Topbar = () => {
    const { activeNav, setActiveNav } = useNavContext();

    return (
        <nav>
            <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>    );
};

export default withActiveNav(Topbar);