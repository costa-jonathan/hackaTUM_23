import React, { useState, useRef } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ActivityCard } from './ActivityCard';

const EndlessScrollableList = ({ activityArr }) => {
  const [data, setData] = useState(activityArr);
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <ActivityCard 
        title={item.title} 
        subtitle={item.subtitle}
        index={item.src} />
      </View>
    );
  };


  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default EndlessScrollableList;
