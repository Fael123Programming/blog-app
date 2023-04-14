import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  FlatList, 
  SafeAreaView,
  View
} from 'react-native';
import {
  getPosts
} from './services';

import Post from './components/Post';

export default function App() {
  const [posts, setPosts] = useState([]);

  // Use as of DidMount.
  useEffect(() => { 
    getPosts((data) => setPosts(data)); 
  }, []);

  const renderItem = ({item}) => <Post id={item.id} title={item.title} body={item.body}/>

  const separator = () => <View style={styles.separator}></View>

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={post => post.id}
        ItemSeparatorComponent={separator}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderWidth: 1,
    padding: 2,
    margin: 2
  },
  list: {
    flex: 1,
    marginTop: 30
  }
});
