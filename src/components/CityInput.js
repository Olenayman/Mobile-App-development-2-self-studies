import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import PrimaryButton from './PrimaryButton';

const CityInput = ({ value, onChangeText, onClear, onSubmit }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder="Enter city"
      returnKeyType="done"
      onSubmitEditing={onSubmit}
      mode="outlined"
    />
    <PrimaryButton
      title="Clear"
      onPress={onClear}
      disabled={!value}
      mode="outlined"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
});

export default CityInput;