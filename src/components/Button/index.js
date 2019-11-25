/**
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from '../../utils/icon';
import styles from './styles';
import T from '../T';
import Loading from '../Loading';

type Props = {
  text: string,
  onPress?: () => void,
  type: 'dark' | 'light' | 'grey' | 'red' | 'yellow' | 'light_blue' | 'green',
  width?: string | number,
  paddingVertical?: string | number,
  borderRadius?: number,
  icon?: string,
  iconBackground: boolean,
  disabled: boolean,
  loading: boolean,
};

const typeStyles = {
  dark: {container: styles.darkBtnContainer, text: styles.darkBtnText},
  light: {container: styles.lightBtnContainer, text: styles.lightBtnText},
  grey: {container: styles.greyBtnContainer, text: styles.lightBtnText},
  yellow: {container: styles.yellowBtnContainer, text: styles.darkBtnText},
  red: {container: styles.redBtnContainer, text: styles.darkBtnText},
  cyan: {container: styles.cyanBtnContainer, text: styles.darkBtnText},
  light_blue: {
    container: styles.light_blueBtnContainer,
    text: styles.lightBtnText,
  },
  disabled: {container: styles.disabledBtnContainer},
  green: {container: styles.greenBtnContainer, text: styles.darkBtnText},
};

const Button = ({
  text,
  onPress,
  width,
  type,
  paddingVertical,
  borderRadius,
  icon,
  disabled,
  loading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        disabled ? typeStyles.disabled.container : typeStyles[type].container,
        {width, paddingVertical, borderRadius},
      ]}>
      {!loading ? (
        <>
          {icon && (
            <View style={styles.iconWrapper}>
              <Icon
                name={icon}
                style={styles.icon}
                color={typeStyles[type].text.color}
              />
            </View>
          )}
          <T text={text} style={typeStyles[type].text} />
        </>
      ) : (
        <Loading type="dark" />
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  paddingVertical: 12,
  width: 180,
  type: 'dark',
  borderRadius: 8,
  iconBackground: true,
  disabled: false,
  loading: false,
};

export default Button;
