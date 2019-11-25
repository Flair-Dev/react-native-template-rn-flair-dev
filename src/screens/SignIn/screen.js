/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Platform,
} from 'react-native';
import TextInput from '../../components/TextInput';
import i18n from '../../locales';
import styles from './styles';
import Button from '../../components/Button';

type Props = {
  signIn: Object => void,
  signUp: Object => void,
  signInLoading: boolean,
  signUpLoading: boolean,
  signInError: Object,
};

type State = {
  fields: {
    signIn: {
      email: string,
      password: string,
    },
    signUp: {
      email: string,
      vat: string,
      password: string,
    },
  },
  screen: 'signIn' | 'signUp',
};

const isIOS = Platform.OS === 'ios';

const initialState = {
  fields: {
    signIn: {
      email: '',
      password: '',
    },
    signUp: {
      email: '',
      vat: '',
      password: '',
    },
  },
};

class SignInScreen extends Component<Props, State> {
  state = {
    ...initialState,
    screen: 'signIn',
  };

  onSubmit = () => {
    const {signIn, signUp} = this.props;
    const {fields, screen, accept} = this.state;
    if (screen === 'signIn') {
      const {email, password} = fields[screen];
      signIn({
        email,
        password,
      });
    } else if (accept) {
      const {email, password} = fields[screen];
      signUp({
        email,
        password,
      });
    }
  };

  handleChange = (inputField: 'password' | 'email' | 'vat') => (
    text: string,
  ) => {
    const {screen} = this.state;
    this.setState(ps => ({
      fields: {
        ...ps.fields,
        [screen]: {
          ...ps.fields[screen],
          [inputField]: text,
        },
      },
    }));
  };

  renderInputs = () => {
    const {screen} = this.state;
    const {signInError} = this.props;
    return (
      <>
        <TextInput
          key={screen + 'email'}
          type="Auth"
          autoFocus={screen === 'signUp'}
          icon="user-circle"
          error={
            screen === 'signIn' &&
            signInError &&
            ((signInError.identity && signInError.identity[0]) ||
              signInError.message)
          }
          containerStyle={styles.input}
          placeholder={i18n.t(`SignInScreen.placeholders.${screen}.email`)}
          onChangeText={this.handleChange('email')}
        />
        {screen === 'signUp' && (
          <TextInput
            key={screen + 'vat'}
            type="Auth"
            icon="file"
            containerStyle={styles.input}
            placeholder={i18n.t(`SignInScreen.placeholders.${screen}.vat`)}
            onChangeText={this.handleChange('vat')}
          />
        )}
        <TextInput
          key={screen + 'password'}
          type="Auth"
          icon="password"
          error={
            screen === 'signIn' &&
            signInError &&
            signInError.password &&
            signInError.password[0]
          }
          secureTextEntry={true}
          containerStyle={styles.input}
          placeholder={i18n.t(`SignInScreen.placeholders.${screen}.password`)}
          onChangeText={this.handleChange('password')}
        />
      </>
    );
  };

  renderButton = () => {
    const {screen} = this.state;
    const {signInLoading, signUpLoading} = this.props;
    return (
      <Button
        text={`SignInScreen.button.${screen}`}
        onPress={this.onSubmit}
        width="100%"
        type="light"
        loading={signInLoading || signUpLoading}
      />
    );
  };

  renderSignIn = () => {
    return (
      <>
        {this.renderInputs()}
        {this.renderButton()}
      </>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={isIOS ? 'padding' : 'height'}
          keyboardVerticalOffset={-100}>
          <View style={styles.container}>
            <View style={styles.contentWrapper}>
              {this.renderSignIn()}
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default SignInScreen;
