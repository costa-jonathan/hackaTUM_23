import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { main_color, windowHeight, windowWidth } from '../styles/globalstyles';
import {base_url} from "../http-common";

const fetchUserName = async (username) => {
  try {
    // Mock user name for example purposes
    // const response = 'Gudrun';
    // return response;

    // You can replace the URL with your actual endpoint for fetching the user's name
    //   const response = await fetch(base_url+"/api/users/firstname?username="+username);
    const response = await fetch("http://131.159.213.38:7030/api/users/firstname?username="+username);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching user name:', error);
    return null;
  }
};

const fetchTemperature = async (username) => {
  try {
    const response = await fetch("http://131.159.213.38:7030/api/users/TODO"+username);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching temperature:', error);
    return null;
  }
};

const generateRandomBpm = (bpm) => {
  if(bpm){
    return bpm < 200 ? bpm + Math.floor(Math.random() * 3) : 198;
  }
  // Generate a random BPM value between 70 and 80
  return Math.floor(Math.random() * (80 - 75 + 1) + 70);
};

export const Greetings = ({use}) => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [bpm, setBPM] = useState(use === "Gudrun02"?110:70);

  useEffect(() => {
    const fetchAndSetUserName = async () => {
      const fetchedName = await fetchUserName(use);
      if (fetchedName !== null) {
        setName(fetchedName);
      }
      setLoading(false);
    };

    const fetchAndSetTemperature = async () => {
      try {
        // const fetchedTemp = await fetchTemperature(use);
        let fetchedTemp = 41
        setCurrentTemperature(fetchedTemp)

      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    const bpmIntervalId = setInterval(() => {
      use === "Gudrun02" ? setBPM(generateRandomBpm(bpm)): setBPM(generateRandomBpm());
    }, 2000); // Update BPM every 2 seconds

    fetchAndSetUserName();
    fetchAndSetTemperature();

    // Clean up intervals on component unmount
    return () => {
      clearInterval(bpmIntervalId);
    };
  }, []); // Run once on component mount

  // Update time every second
  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timeIntervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.greetingText}>
            {loading ? 'Grias Di, Loading...' : `Grias Di, ${name || 'User'}!`}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.infoTextBig}>{formattedTime}</Text>
          {currentTemperature !== null && (
              <View style={styles.temperatureContainer}>
                <Text style={styles.infoTextBig}>{currentTemperature} °C</Text>
                <MaterialCommunityIcons name="weather-sunny" size={windowHeight / 25} color="#FFD700" />
              </View>
          )}
          {bpm !== null && (
              <View style={styles.bpmContainer}>
                <Text style={styles.infoTextBig}>{bpm}</Text>
                <MaterialCommunityIcons name="heart" size={windowHeight / 25} color="red" />
              </View>
          )}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: main_color,
    borderRadius: 10,
    margin: 10,
  },
  leftContainer: {
    flex: 0.7
  },
  rightContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
    backgroundColor: {}
  },
  greetingText: {
    fontSize: windowHeight / 25,
    fontWeight: 'bold',
    color: 'white',
  },
  infoTextBig: {
    fontSize: windowHeight / 30,
    color: 'white',
    marginBottom: 5,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bpmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Greetings;