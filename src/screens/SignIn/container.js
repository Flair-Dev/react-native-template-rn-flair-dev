/**
 * @format
 * @flow
 */

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import SignInScreen from './screen';
import actions from '../../redux/actions';
import withStatusBar from '../../hocs/withStatusBar';
import {compose} from 'redux';
import {selectError} from '../../redux/selectors/errors';
import {selectLoading} from '../../redux/selectors/loadings';

const mapStateToProps = createStructuredSelector({
  signInError: selectError(actions.signIn),
  signUpError: selectError(actions.signUp),

  signInLoading: selectLoading(actions.signIn),
  signUpLoading: selectLoading(actions.signUp),
});

const mapDispatchToProps = {
  signIn: actions.signIn.request,
  signUp: actions.signUp.request,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStatusBar,
)(SignInScreen);
