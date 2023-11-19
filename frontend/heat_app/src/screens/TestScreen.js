import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ChatComponent from '../components/ChatComponent';
import { styles, windowHeight, windowWidth } from '../styles/globalstyles';

const TestScreen = () => {
  return (        
    <View style={styles_i.container}>
        <View style= {styles.headerContainer}>
            <Text style={styles.header}>KI-Assistent</Text>
        </View>
        <ChatComponent/>
    </View>
  );
};

const styles_i = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:windowHeight*0.1,
    paddingBottom:windowHeight*0.1,
  },
});

export default TestScreen;
