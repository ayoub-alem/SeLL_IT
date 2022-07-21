import React from 'react';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';
const SubmitButton = ({ title, buttonStyles, textStyles }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      textStyles={textStyles}
      buttonStyles={buttonStyles}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
