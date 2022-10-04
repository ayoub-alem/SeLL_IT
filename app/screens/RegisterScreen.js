import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
import auth from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const [error, setError] = useState('');
  const { logIn } = useAuth();

  const handleRegister = async (userInfo) => {
    const result = await auth.register(userInfo);
    if (result.ok) {
      setError('');
      logIn(result.headers['x-auth-token']);
    } else setError(result.data.error);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validationSchema}
        styles={styles.appForm}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCorrect={false}
          icon='account'
          name='name'
          placeholder='Name'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton buttonStyles={styles.submitButton} title='Register' />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 15,
  },
  submitButton: {
    marginTop: 50,
  },
});

export default RegisterScreen;
