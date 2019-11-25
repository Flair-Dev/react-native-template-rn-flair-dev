/**
 * @format
 */

import {AppRegistry, UIManager, Platform} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

console.disableYellowBox = true;

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

AppRegistry.registerComponent(appName, () => App);
