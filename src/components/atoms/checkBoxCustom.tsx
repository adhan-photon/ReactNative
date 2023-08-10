import React from 'react';
import {CheckBox} from 'react-native';

interface PropsCheckBoxCustom {
  isSelected: boolean;
  setSelection: Function;
}

const CheckBoxCustom = ({isSelected, setSelection}: PropsCheckBoxCustom) => {
  return <CheckBox value={isSelected} onValueChange={setSelection} />;
};

export default CheckBoxCustom;
