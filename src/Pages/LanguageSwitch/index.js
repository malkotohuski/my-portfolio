import React from 'react';


const LanguageSwitch = ({ changeLanguage, t }) => {
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
        },
        flagImage: {
            width: '50px',
            height: '50px',
        },
        languageText: {
            marginTop: '10px',
        },
    };

    return (
        <div>
            <div style={styles.languageSwitchContainer}>
                <div
                    style={styles.languageButton}
                    onClick={() => changeLanguage('en')}
                >
                    <img
                        src={require('../../images/engl-flag.png')} // Replace with the path to your English flag image
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
                        src={require('../../images/bulg-flag.png')} // Replace with the path to your Bulgarian flag image
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
