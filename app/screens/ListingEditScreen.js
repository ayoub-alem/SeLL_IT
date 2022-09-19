import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' },
  { label: 'Furniture', value: 4, backgroundColor: 'red', icon: 'apps' },
  { label: 'Clothing', value: 5, backgroundColor: 'green', icon: 'email' },
  { label: 'Camera', value: 6, backgroundColor: 'blue', icon: 'lock' },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setuploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setuploadVisible(true);
    const response = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setuploadVisible(false);

    if (!response.ok) return alert('Could not save the listing');
    alert('Success');
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <AppForm
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
            images: [],
          }}
          onSubmit={(listing) => handleSubmit(listing)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name='images' />
          <AppFormField maxLength={255} name='title' placeholder='Title' />
          <AppFormField
            keyboardType='numeric'
            maxLength={8}
            name='price'
            placeholder='Price'
            width={120}
          />
          <AppFormPicker
            items={categories}
            name='category'
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder='Category'
          />
          <AppFormField
            maxLength={255}
            multiline
            name='description'
            numberOfLines={3}
            placeholder='Description'
          />
          <SubmitButton buttonStyles={styles.submitButton} title='Post' />
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    marginVertical: 20,
  },
  scroll: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default ListingEditScreen;
