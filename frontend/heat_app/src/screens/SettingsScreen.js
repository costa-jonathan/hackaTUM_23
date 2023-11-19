import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';;
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { windowHeight, windowWidth } from '../styles/globalstyles';

const SettingsScreen = () => {
    const handlePersonalInfoPress = () => {
      // Handle personal info button press
      console.log('Change Personal Info Pressed');
    };
  
    const handleAddPetPress = () => {
      // Handle add pet button press
      console.log('Add Pet Pressed');
    };
  
    const handleConnectSmartwatchPress = () => {
      // Handle connect smartwatch button press
      console.log('Connect Smartwatch Pressed');
    };
  
    const handleAddCalendarPress = () => {
      // Handle add calendar button press
      console.log('Add Calendar Pressed');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Einstellungen</Text>
        <View style={styles.settingbuttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={handlePersonalInfoPress}>
            <Text style={styles.buttonText}>Persoenliche Daten</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAddPetPress}>
            <Text style={styles.buttonText}>Fuege Dein Haustier hinzu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleConnectSmartwatchPress}>
            <Text style={styles.buttonText}>Verbinde Deine Smartwatch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAddCalendarPress}>
            <Text style={styles.buttonText}>Fuege deinen Kalender hinzu</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: windowHeight / 20,
      paddingHorizontal: windowWidth / 20,
    //   justifyContent: 'center',
    //   alignItems: 'center',
        
    },
    headerText: {
      fontSize: windowHeight / 25,
      fontWeight: 'bold',
      marginBottom: windowHeight / 30,
      alignSelf: 'flex-start',
    },
    button: {
      backgroundColor: '#3498db',
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: windowHeight / 35,
    },
    settingbuttoncontainer: {
        flex: 1,
        alignItems: 'center',
    }
  });
  
  export default SettingsScreen;