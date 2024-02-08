import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    return (
        <div className="header">
            <div className='headers'>
                <div className="header-left">
                    <Link to="/" className="home-link">
                        <FontAwesomeIcon size='2x' icon={faHome} style={{ color: "#f1f1f1" }} />
                    </Link>
                </div>
                <div className="header-right">
                    <button onClick={toggleMenu} className={`menu-button ${isMenuOpen ? 'open' : ''}`}>
                        <FontAwesomeIcon size='2x' icon={faBars} />
                    </button>
                    {isMenuOpen && (
                        <div className="dropdown-menu" onBlur={closeMenu} tabIndex={0}>
                            <Link
                                to="/portfolio"
                                className="menu-item"
                                onClick={closeMenu}
                            >
                                {t('Projects')}
                            </Link>
                            <Link
                                to="/contacts"
                                className="menu-item"
                                onClick={closeMenu}
                            >
                                {t('Contact us')}
                            </Link>
                            {/* Добави повече линкове, ако е необходимо */}
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Header;
