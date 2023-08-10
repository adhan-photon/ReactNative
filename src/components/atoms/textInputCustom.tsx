import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface PropsTextInput {
  onChangeText: Function;
  value: string;
  placeholder: string;
  secureTextEntry: boolean;
}

const TextInputCustom = ({
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
}: PropsTextInput) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={() => onChangeText()}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default TextInputCustom;
