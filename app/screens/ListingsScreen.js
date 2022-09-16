import React, { useEffect, useState } from 'react';
import listingsApi from '../api/listings';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';



const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const loadListings = async () => {
    const { data } = await listingsApi.getListings();
    setListings(data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen>
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
});

export default ListingsScreen;
