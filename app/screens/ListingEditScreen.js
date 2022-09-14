import React from 'react';
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
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';

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

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <AppForm
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
            images: [],
          }}
          onSubmit={(values) => console.log(location)}
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
