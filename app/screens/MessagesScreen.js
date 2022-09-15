import React, { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { ListItem, ListItemDeleteAction } from '../components/lists';
import Screen from '../components/Screen';

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
    description:
      'D2jkdsjsnsnsnsnsnsuehueheheuheuhenssnsmnsshbsshhshuejhejhesjhheshes',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D3',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        style={styles.flatList}
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
  flatList: {
    padding: 0,
  },
});

export default MessagesScreen;
