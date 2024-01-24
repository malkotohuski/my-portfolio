import React from 'react';
import { useTranslation } from 'react-i18next';
import engFlag from '../../images/engl-flag.png';
import bulgFlag from '../../images/bulg-flag.png';

const LanguageSwitch = () => {
    const { t, i18n } = useTranslation();

    const styles = {
        languageSwitchContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 60
        },
        languageButton: {
            alignItems: 'center',
            cursor: 'pointer',
            width: '120px',  // Фиксирана ширина на бутона
            textAlign: 'center',  // Центриране на текста
        },
        flagImage: {
            width: '50px',
            height: '50px',
            borderRadius: '25px'
        },
        languageText: {
            marginTop: '10px',
        },
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div style={styles.languageSwitchContainer}>
                <div
                    style={styles.languageButton}
                    onClick={() => changeLanguage('en')}
                >
                    <img
                        src={engFlag} // Replace with the path to your English flag image
                        alt="English Flag"
                        style={styles.flagImage}
                    />
                    <p style={styles.languageText}>{t('English')}</p>
                </div>
                <div style={{ margin: '60px' }} />
                <div
                    style={styles.languageButton}
                    onClick={() => changeLanguage('bg')}
                >
                    <img
                        src={bulgFlag} // Replace with the path to your Bulgarian flag image
                        alt="Bulgarian Flag"
                        style={styles.flagImage}
                    />
                    <p style={styles.languageText}>{t('Bulgarian')}</p>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitch;
