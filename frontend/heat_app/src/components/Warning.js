import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { danger_color, fontVerySmall } from '../styles/globalstyles';

const WarningComponent = ({ types }) => {
  const getWarningMessage = (type) => {
    switch (type) {
      case 'highHeartRate':
        return 'Warning: Heart rate is too high!';
      case 'hotTemperature':
        return 'Warning: Temperature outside is too hot!';
      case 'farFromHome':
        return 'Warning: You are far away from home!';
      default:
        return null;
    }
  };

  return (
    <>
      {types.length > 0 ? (
        types.map((type, index) => {
          const message = getWarningMessage(type);
          if (message) {
            return (
              <View key={index} style={styles.container}>
                <Text style={styles.text}>{message}</Text>
              </View>
            );
          }
          return null;
        })
      ) : (
        null
      )}
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: danger_color, // Yellow color for warning
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 50,
  },
  text: {
    color: 'white', // Deep Orange color for text
    fontWeight: 'bold',
    fontSize: fontVerySmall,
  },
});

export default WarningComponent;
