import React from 'react';
import { Footer } from '../components/Footer';
import { View, Text, SafeAreaView } from 'react-native';
import BrowserContainer from '../components/BrowserContainer';
import { styles } from '../styles/globalstyles';
import { Openweather } from '../components/Openweather';

function MapScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Hitze Helfer Karten</Text>
            </View>
            <BrowserContainer />
            <Footer />
      </SafeAreaView>
    )
}

export default MapScreen;