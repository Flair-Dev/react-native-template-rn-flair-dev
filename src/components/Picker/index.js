/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  Modal,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from '../../utils/icon';
import styles from './styles';
import T from '../T';
import Loading from '../Loading';

type Props = {
  options: Array<Object>,
  value: string,
  placeholder: string,
  onValueChange: Object => void,
  emptyListTitle: string,
  loading: boolean,
  multiselect?: boolean,
  displayValue?: Function,
  values: Array<Object>,
  pickerType?: string,
  search?: boolean,
};

const renderOption = (onItenPress: Function, displayValue) => ({
  item,
}: Object) => {
  return (
    <TouchableOpacity style={styles.option} onPress={() => onItenPress(item)}>
      <Text style={styles.optionText}>
        {displayValue ? displayValue(item) : item.name}
      </Text>
    </TouchableOpacity>
  );
};

const OptionsList = ({
  data,
  onItemPress,
  loading,
  emptyListTitle,
  displayValue,
}) => {
  return loading && (!data || !data.length) ? (
    <View style={styles.loadingWrapper}>
      <Loading />
    </View>
  ) : (
    <FlatList
      data={data}
      renderItem={renderOption(onItemPress, displayValue)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={
        <View style={styles.emptyListWrapper}>
          <T text={emptyListTitle} style={styles.emptyText} />
        </View>
      }
    />
  );
};

const Picker = ({
  options,
  multiselect,
  value,
  placeholder,
  onValueChange,
  emptyListTitle,
  loading,
  displayValue,
  values,
  pickerType,
  search,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [filteredOptions, filterOptions] = useState(null);
  const [isSearching, setSearching] = useState(false);
  const close = () => {
    setVisible(false);
    if (isSearching) {
      setSearching(false);
    }
  };

  const onPress = (item: Object) => {
    onValueChange(item);
    close();
  };

  const open = () => {
    setVisible(true);
  };

  const onSearch = (text: string) => {
    if (text && !isSearching) {
      setSearching(true);
    } else if (!text && isSearching) {
      setSearching(false);
    }
    if (options) {
      filterOptions(
        options.filter(option => {
          const val = displayValue ? displayValue(option) : option;
          return val.toLowerCase().includes(text.toLowerCase());
        }),
      );
    }
  };

  return (
    <>
      {!(multiselect || pickerType === 'Area') ? (
        <TouchableWithoutFeedback onPress={open}>
          <View style={styles.container}>
            {value ? (
              <Text style={styles.value}>{value}</Text>
            ) : (
              <Text style={styles.placeholder}>{placeholder}</Text>
            )}
            <View style={styles.iconWrapper}>
              <Icon name="chevron-down" style={styles.icon} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View>
          <TouchableWithoutFeedback onPress={open}>
            <View style={styles.areaContainer}>
              {value && !multiselect ? (
                <Text style={styles.value}>
                  {displayValue ? displayValue(value) : value}
                </Text>
              ) : (
                <Text style={styles.placeholder}>{placeholder}</Text>
              )}
            </View>
          </TouchableWithoutFeedback>
          {values && values.length > 0 && pickerType !== 'Area' && (
            <View style={styles.chipsWrapper}>
              {values.map(item => {
                return (
                  <View style={styles.chip}>
                    <Text style={styles.chipText} numberOfLines={1}>
                      {displayValue ? displayValue(item) : item.name}
                    </Text>
                    <TouchableWithoutFeedback
                      onPress={() => onValueChange(item)}>
                      <Icon name="cancel-circle" style={styles.closeIcon} />
                    </TouchableWithoutFeedback>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      )}
      <Modal visible={visible} transparent>
        <View style={styles.screen}>
          <TouchableWithoutFeedback onPress={close}>
            <View style={styles.background} />
          </TouchableWithoutFeedback>
          <View style={styles.contentWrapper}>
            <View style={styles.header}>
              {search ? (
                <View style={styles.searchInputWrapper}>
                  <Icon name="search" style={styles.searchIcon} />
                  <TextInput
                    style={styles.searchInput}
                    placeholderTextColor={styles.placeholder.color}
                    placeholder={placeholder}
                    onChangeText={onSearch}
                    autoFocus={search}
                  />
                </View>
              ) : (
                <Text style={styles.headerText}>{placeholder}</Text>
              )}
            </View>
            <OptionsList
              data={
                multiselect
                  ? options
                    ? isSearching && filteredOptions
                      ? filteredOptions.filter(
                          el => !values.find(val => val.id === el.id),
                        )
                      : options.filter(
                          el => !values.find(val => val.id === el.id),
                        )
                    : null
                  : isSearching
                  ? filteredOptions
                  : options
              }
              onItemPress={onPress}
              loading={loading}
              emptyListTitle={emptyListTitle}
              displayValue={displayValue}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

Picker.defaultProps = {
  values: [],
};

export default Picker;
