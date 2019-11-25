/**
 * @format
 * @flow
 */

import theme from '../../theme';

const Input = {
  ...theme.text.p1(),
  flex: 1,
};

const AuthInput = {
  ...Input,
  color: theme.colors.white,
  borderBottomWidth: 1.5,
  borderBottomColor: theme.colors.white,
  paddingBottom: 12,
};

const DefaultInput = {
  ...Input,
  paddingBottom: 8,
  borderBottomColor: theme.getColor('grey2'),
  borderBottomWidth: 2,
};

const AreaInput = {
  ...Input,
  top: 0,
  backgroundColor: theme.getColor('white'),
  paddingHorizontal: 12,
  paddingTop: 10,
  paddingBottom: 5,
  borderColor: theme.getColor('blue', 0.1),
  borderWidth: 2,
  textAlignVertical: 'top',
};

export default {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderAuth: {
    color: theme.colors.white,
  },
  placeholderDefault: {
    color: theme.getColor('blue', 0.3),
  },
  placeholderArea: {
    color: theme.getColor('blue', 0.4),
  },
  Input,
  AuthInput,
  DefaultInput,
  AreaInput,
  focusedDefaultInput: DefaultInput,
  focusedAuthInput: AuthInput,
  focusedAreaInput: AreaInput,
  iconWrapper: {
    width: 28,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 26,
    color: theme.colors.white,
  },
  errorBottom: {
    position: 'absolute',
    ...theme.text.l1('orange2'),
    top: null,
    bottom: -24,
  },
  error: {
    position: 'absolute',
    ...theme.text.l1('orange2'),
    top: 0,
  },
};
