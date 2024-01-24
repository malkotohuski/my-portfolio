import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    greeting: 'greeting',
                    English: 'English',
                    Bulgarian: 'Bulgarian',
                }
            },
            bg: {
                translation: {
                    greeting: 'Привет',
                    English: 'Английски',
                    Bulgarian: 'Български',
                }
            },
        }
    });

export default i18next;