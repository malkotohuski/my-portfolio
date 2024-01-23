// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // Add English translations here
        },
    },
    bg: {
        translation: {
            // Add Bulgarian translations here
        },
    },
};

i18next.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources,
});

export default i18next;
