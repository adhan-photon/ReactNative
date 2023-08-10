import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

interface PropsTextCustom {
  value: string;
  style?: StyleProp<TextStyle>;
  // style?: object;
}

const TextCustom = ({value, style}: PropsTextCustom) => {
  return <Text style={style}>{value}</Text>;
};

export default TextCustom;
