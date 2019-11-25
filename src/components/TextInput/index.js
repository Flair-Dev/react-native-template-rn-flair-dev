/**
 * @format
 * @flow
 */

import React, {useState, useRef} from 'react';
import {Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import Icon from '../../utils/icon';
import styles from './styles';

type Props = TextInput.propTypes & {
  icon?: string,
  containerStyle?: View.propTypes.style,
  type: 'Auth' | 'Area' | 'Default',
  error: string,
};

const Input = ({icon, containerStyle, type, error, ...props}: Props) => {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const focus = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };
  let style = type + 'Input';
  if (isFocused) {
    style = 'focused' + style;
  }
  const placeholderStyle = 'placeholder' + type;

  const defaultProps = {
    style: styles[style],
    selectionColor: styles[style].color,
    placeholderTextColor: styles[placeholderStyle].color,
    ref: inputRef,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };

  if (type === 'Auth') {
    return (
      <TouchableWithoutFeedback onPress={focus}>
        <View style={{width: '100%'}}>
          {!!error && <Text style={styles.error}>{error}</Text>}
          <View
            style={[
              styles.container,
              {opacity: isFocused ? 1 : 0.3},
              containerStyle,
            ]}>
            {!!icon && (
              <View style={styles.iconWrapper}>
                <Icon name={icon} style={styles.icon} />
              </View>
            )}
            <TextInput {...props} {...defaultProps} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View>
      {!!error && <Text style={styles.errorBottom}>{error}</Text>}
      <TextInput {...props} {...defaultProps} multiline={type === 'Area'} />
    </View>
  );
};

Input.defaultProps = {
  type: 'Default',
  error: '',
};

export default Input;
