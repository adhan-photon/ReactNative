import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextInputCustom from '../atoms/textInputCustom';
import TextCustom from '../atoms/textCustom';
import ButtonCustom from '../atoms/buttonCustom';
import CheckBoxCustom from '../atoms/checkBoxCustom';

const FormLogin = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isSelectedRememberMe, setSelectedRememberMe] = React.useState(false);
  const [isSelectedToken, setSelectedToken] = React.useState(false);

  return (
    <View style={styles.formLogin} nativeID="form-login">
      <TextInputCustom
        onChangeText={onChangeUsername}
        value={username}
        placeholder="username"
        secureTextEntry={false}
      />
      <TextInputCustom
        onChangeText={onChangePassword}
        value={password}
        placeholder="********"
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
          <TextCustom
            style={{fontSize: 13, marginRight: 5}}
            value="Remember me"
          />
          <CheckBoxCustom
            isSelected={isSelectedRememberMe}
            setSelection={setSelectedRememberMe}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextCustom
            style={{fontSize: 13, marginRight: 5}}
            value="User Token"
          />
          <CheckBoxCustom
            isSelected={isSelectedToken}
            setSelection={setSelectedToken}
          />
        </View>
      </View>
      <ButtonCustom title="Sign in" />
      <TextCustom
        style={styles.forgotIdPassword}
        value="Forgot User ID or Password?"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FormLogin;
