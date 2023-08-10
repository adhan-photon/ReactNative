import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://download.logo.wine/logo/Chase_Bank/Chase_Bank-Logo.wine.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 100,
  },
});

export default Header;
