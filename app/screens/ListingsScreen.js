import React, { useEffect } from 'react';
import listingsApi from '../api/listings';
import { FlatList, StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <View style={styles.errorContainer}>
            <AppText style={{ textAlign: 'center' }}>
              Couldn't retrieve the listing
            </AppText>
            <AppButton onPress={loadListings} title='Retry' />
          </View>
        )}
        {!loading && (
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
        )}
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  errorContainer: {
    backgroundColor: colors.light,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
