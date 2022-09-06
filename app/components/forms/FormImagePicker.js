import React from 'react';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => setFieldValue(name, [...imageUris, uri]);
  const handleRemove = (imageUri) =>
    setFieldValue(
      name,
      imageUris.filter((uri) => imageUri !== uri)
    );
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
