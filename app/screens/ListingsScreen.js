import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 900,
    image: require('../assets/couch.jpg'),
  },
];

const ListingsScreen = () => {
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
            image={item.image}
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
