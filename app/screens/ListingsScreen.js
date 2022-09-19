import React, { useEffect, useState } from 'react';
import listingsApi from '../api/listings';
import { FlatList, StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadListings = async () => {
    const res = await listingsApi.getListings();
    if (!res.ok) {
      setError(true);
      return setLoading(false);
    }

    setError(false);
    setLoading(false);
    setListings(res.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <View style={styles.errorContainer}>
          <AppText style={{ textAlign: 'center' }}>
            Couldn't retrieve the listing
          </AppText>
          <AppButton onPress={() => console.log('pressed')} title='Retry' />
        </View>
      )}

      {<ActivityIndicator visible={loading} />}
      <FlatList
        style={styles.flatList}
        data={listings}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate('ListingDetails', item)}
          ></Card>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: colors.light,
    padding: 20,
  },
  errorContainer: {
    backgroundColor: colors.light,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
