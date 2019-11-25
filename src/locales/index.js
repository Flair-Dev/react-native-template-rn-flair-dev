/**
 * @format
 * @flow
 */

import {I18nManager} from 'react-native';
import i18n from 'i18next';
import * as RNLocalize from 'react-native-localize';
// $FlowFixMe
import languages from './languages/*';

const fallback = {languageTag: 'en', isRTL: false};

const {languageTag, isRTL} =
  RNLocalize.findBestAvailableLanguage(Object.keys(languages)) || fallback;

I18nManager.allowRTL(isRTL);

const languageDetector = {
  type: 'languageDetector',
  detect: () => languageTag,
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n.use(languageDetector).init({
  fallbackLng: 'en',

  resources: Object.keys(languages).reduce((acc, cur) => {
    acc[cur] = {translation: languages[cur]};
    return acc;
  }, {}),

  debug: __DEV__,

  interpolation: {
    escapeValue: false,
  },
});

i18n.userLocale = languageTag;

export default i18n;
