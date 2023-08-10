import React from 'react';
import {Button} from 'react-native';

interface PropsButtonCustom {
  title: string;
}

const ButtonCustom = ({title}: PropsButtonCustom) => {
  return <Button title={title} />;
};

export default ButtonCustom;
