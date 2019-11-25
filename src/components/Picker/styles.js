/**
 * @format
 * @flow
 */

import theme from '../../theme';
const {colors, text} = theme;

const value = {
  ...text.p1('blue'),
  flex: 1,
};

const optionText = {
  ...value,
  flex: 0,
};

export default {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  areaContainer: {
    flex: 1,
    backgroundColor: theme.getColor('white'),
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: theme.getColor('blue', 0.1),
    borderWidth: 2,
  },
  iconWrapper: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: theme.colors.blue,
    fontSize: 16,
    opacity: 0.3,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.rgba.blue(0.3),
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    backgroundColor: colors.white,
    width: '90%',
    minHeight: '30%',
    maxHeight: '70%',
    borderRadius: 12,
  },
  option: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grey3,
  },
  value,
  optionText,
  chipsWrapper: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.getColor('blue', 0.1),
    paddingLeft: 12,
    marginBottom: 8,
    marginRight: 8,
    paddingVertical: 10,
    borderRadius: 20,
  },
  chipText: {
    ...optionText,
    maxWidth: 220,
  },
  closeIcon: {
    textAlign: 'center',
    width: 40,
    fontSize: 16,
    color: theme.getColor('blue', 0.7),
  },
  header: {
    height: 50,
    // alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey2,
  },
  searchInput: {
    flex: 1,
    ...text.p1(),
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  placeholder: {
    color: theme.getColor('blue', 0.3),
  },
  searchIcon: {
    fontSize: 16,
    color: colors.blue,
    marginRight: 12,
  },
  headerText: {
    ...text.b1('grey'),
    alignSelf: 'center',
  },
  emptyListWrapper: {
    paddingTop: 16,
    alignItems: 'center',
  },
  emptyText: {
    ...text.p1('grey'),
  },
  loadingWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
};
