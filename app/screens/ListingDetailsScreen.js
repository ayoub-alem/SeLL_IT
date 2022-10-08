import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { ListItem, ListItemSeparator } from '../components/lists';
import ContactSellerForm from '../components/ContactSellerForm';

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <ScrollView style={styles.scrollView}>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title='Ayoub Alem'
            subTitle='5 Listings'
            ItemSeparatorComponent={ListItemSeparator}
          ></ListItem>
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    paddingVertical: 40,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },

  // scrollView: {
  //   paddingBottom: 40,
  // },
});

export default ListingDetailsScreen;
