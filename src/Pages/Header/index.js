
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            {/* Другите елементи на хедера тук */}

            <div className="header-right">
                <button onClick={toggleMenu} className={`menu-button ${isMenuOpen ? 'open' : ''}`}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {isMenuOpen && (
                    <div className="dropdown-menu">
                        <Link to="/category1" className="menu-item">
                            {t('Category 1')}
                        </Link>
                        <Link to="/category2" className="menu-item">
                            {t('Category 2')}
                        </Link>
                        {/* Добави повече линкове, ако е необходимо */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
