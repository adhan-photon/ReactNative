import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/atoms/header';
import TextCustom from './src/components/atoms/textCustom';
import FormLogin from './src/components/molecules/formLogin';

const ViewBoxesWithColorAndText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Header />
      </View>
      <View style={styles.middle}>
        <FormLogin />
      </View>
      <View style={styles.bottom}>
        <TextCustom value="@2023 Copyright" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#0f5ad4',
    padding: 20,
  },
  top: {
    alignItems: 'center',
  },
  middle: {
    backgroundColor: 'white',
    border: '2 solid white',
    borderRadius: 5,
  },
  bottom: {
    alignItems: 'center',
  },
});

export default ViewBoxesWithColorAndText;
