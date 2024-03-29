import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

const AppFormField = ({ name, width, ...otherProps }) => {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
