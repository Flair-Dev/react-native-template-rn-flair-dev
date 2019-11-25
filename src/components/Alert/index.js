/**
 * @format
 * @flow
 */

import React from 'react';
import {compose} from 'redux';
import Icon from '../../utils/icon';
import {BackHandler, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import T from '../T';
import Button from '../Button';

type Props = {};

type State = {
  show: boolean,
  options: Object,
};

class Alert extends React.PureComponent<Props, State> {
  backHandler = undefined;

  state = {
    show: false,
    options: {},
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.show && !prevState.show) {
      this.backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          this.close();
          return true;
        },
      );
    }
    if (!this.state.show && prevState.show && this.backHandler) {
      this.backHandler.remove();
    }
  }

  show = (options: Object) => {
    this.setState({
      show: true,
      options,
    });
  };

  close = () => {
    this.setState({
      show: false,
      options: null,
    });
  };

  render() {
    const {show, options} = this.state;
    return (
      show && (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.close}>
            <View style={styles.background} />
          </TouchableWithoutFeedback>
          <View style={styles.alertWrapper}>
            {!!options.icon && <Icon name={options.icon} style={styles.icon} />}
            <T text={options.title} style={styles.title} />
            <View style={styles.buttonsWrapper}>
              {options.buttons.map(button => (
                <Button
                  width={140}
                  text={button.text}
                  onPress={compose(
                    button.onPress ? button.onPress : () => {},
                    this.close,
                  )}
                  type={button.type}
                />
              ))}
            </View>
          </View>
        </View>
      )
    );
  }
}

export default Alert;
