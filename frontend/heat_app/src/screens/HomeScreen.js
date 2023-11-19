import React, { useState, useEffect } from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { Footer } from '../components/Footer';
import { Greetings } from '../components/Greetings';
import ContainerList from '../components/Reminders';
import Timeline from '../components/Timeline';
import WarningComponent from '../components/Warning'; // Import the WarningComponent
import { ScrollView } from 'react-native-gesture-handler';
import { windowWidth } from '../styles/globalstyles';
import { windowHeight } from '../styles/globalstyles';

function HomeScreen({ navigation, username }) {
    const [use, setUse] = useState(username)
    const[activeWarnings, setActiveWarnings] = useState(['highHeartRate', 'hotTemperature']);
    let activeWarnings2 = ['highHeartRate', 'hotTemperature'];
    const getUse = () => {
        return String(use);
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
     <ScrollView>
      <View style={{height: windowHeight / 4}}>
      <Greetings use={getUse()}/>
      </View>

      {/* Display warnings based on conditions */}
      { activeWarnings2.length != 0 && <View style={{ height: activeWarnings2.length >= 2 ? windowHeight/5 : windowHeight/8}}>
        <WarningComponent types={activeWarnings} />
      </View> }
      
      <View style={{height: windowHeight / 4}}>
        <>
          <Timeline />
       </>
      </View>
      <View style={{marginBottom: windowHeight / 10}}>
        <ContainerList />
      </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

export default HomeScreen;