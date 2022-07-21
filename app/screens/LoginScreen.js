import { Image, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppFormField, AppForm, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
