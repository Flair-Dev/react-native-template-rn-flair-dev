/**
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../../utils/icon';
import styles from './styles';
import T from '../T';

type Props = {
  title: string,
  icon: string,
  children: any,
  error?: ?string,
};

const InspectionFormRow = ({title, icon, children, error}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Icon name={icon} style={styles.icon} />
        <T text={title} style={styles.title} />
      </View>
      <View>
        {children}
        {!!error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

InspectionFormRow.defaultProps = {
  error: null,
};

export default InspectionFormRow;
