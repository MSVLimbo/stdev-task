import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translations from './translations.json';
import LanguageDetector from 'i18next-browser-languagedetector';

if (!localStorage.getItem('i18nextLng') || !localStorage.getItem('translation')) {
    localStorage.setItem('i18nextLng', 'en');
    localStorage.setItem('translation', JSON.stringify(translations.en.translation));
}

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init(
        {
            keySeparator: false,
            nsSeparator: false,
            debug: false,
            fallbackLng: 'en',
            load: 'languageOnly',
            interpolation: {
                escapeValue: false, // not needed for react as it escapes by default
            },
            resources: {...translations},
        },
        // eslint-disable-next-line consistent-return
        err => {
            if (err) {
                return console.log('something went wrong loading', err);
            }
        },
    );

window.addEventListener('translation', () => {
    const newTranslation = localStorage.getItem('translation') || '';
    const newLang = localStorage.getItem('i18nextLng') || '';
    if (newTranslation !== 'undefined') {
        i18n.addResourceBundle(newLang, 'translation', JSON.parse(newTranslation), false, false);
        i18n.changeLanguage(newLang);
    }
});
export default i18n;
