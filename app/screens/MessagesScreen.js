import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'Tjddhdkjhdkhdkjdhkdjhkdhdkjhkjdhdkjhddhkdhdjhdgsfsgfs2',
    description: 'D2jkdsjsnsnsnsnsnsuehueheheuheuhenssnsmnsshbsshhshuejhejhesjhheshes',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = ({}) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          ></ListItem>
        )}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
});

export default MessagesScreen;
