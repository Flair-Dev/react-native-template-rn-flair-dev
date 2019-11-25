/**
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

type Props = Text.propTypes & {
  text: string,
  params?: Object,
  additionalText?: string,
};

const T = ({text, params, additionalText, ...props}: Props) => {
  const i18n = useTranslation();
  return <Text {...props}>{i18n.t(text, params) + additionalText}</Text>;
};

T.defaultProps = {
  additionalText: '',
  params: undefined,
};

export default T;
