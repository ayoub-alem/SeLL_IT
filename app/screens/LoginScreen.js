import { Image, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import {
  AppFormField,
  AppForm,
  SubmitButton,
  ErrorMessage,
} from '../components/forms';
import authApi from '../api/auth';
import jwtDecode from 'jwt-decode';
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const authContext = useContext(AuthContext);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
  };

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='Invalid email and/or password'
          visible={loginFailed}
        />
        <AppFormField
          icon='email'
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          name='password'
          icon='lock'
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          textContentType='password'
          secureTextEntry
        />
        <SubmitButton title={'Login'} buttonStyles={styles.button} />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  screen: {
    paddingHorizontal: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
