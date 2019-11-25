/**
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import {createStructuredSelector} from 'reselect';
import {View} from 'react-native';
import styles from './styles';
import {selectLoading} from '../../redux/selectors/loadings';
import Loading from '../Loading';

type Props = {
  loading: boolean,
};

const globalLoadingActions = [];

const GlobalLoading = ({loading}: Props) => {
  return (
    loading && (
      <View style={styles.container}>
        <View style={styles.loadingWrapper}>
          <Loading type="light" />
        </View>
      </View>
    )
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(globalLoadingActions),
});

export default connect(mapStateToProps)(GlobalLoading);
