import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  CheckBox,
} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  const [username, onChangeUsername] = React.useState('username');
  const [password, onChangePassword] = React.useState('password');
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://download.logo.wine/logo/Chase_Bank/Chase_Bank-Logo.wine.png',
          }}
        />
      </View>
      <View style={styles.middle}>
        <View style={styles.formLogin}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 13, marginRight: 5}}>Remember me</Text>
              <CheckBox value={isSelected} onValueChange={setSelection} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 13, marginRight: 5}}>User Token</Text>
              <CheckBox value={isSelected} onValueChange={setSelection} />
            </View>
          </View>
          <Button title="Sign in" />
          <Text style={styles.forgotIdPassword}>
            Forgot User ID or Password?
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text>@2023 Copyright</Text>
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
    display: 'flex',
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
  input: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  forgotIdPassword: {
    color: 'blue',
    fontSize: 13,
    textAlign: 'center',
  },
  formLogin: {
    margin: 10,
    gap: 15,
  },
});

export default ViewBoxesWithColorAndText;
