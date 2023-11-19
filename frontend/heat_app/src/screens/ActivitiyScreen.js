import React from 'react';
import { Button, View, Text, SafeAreaView, Image } from 'react-native';
import { Footer } from '../components/Footer';
import { Greetings } from '../components/Greetings';
import { ActivityCard } from '../components/ActivityCard';
import EndlessScrollableList from '../components/EndlessScrollableList';
import { styles } from '../styles/globalstyles';

function ActivitiyScreen({ navigation }) {

  let activityArr = [
    {title: 'Bares für Rares', subtitle: 'Diese deutsche Kultsendung sollte man sich nie entgehen lassen', src: 2, key: 0},
    {title: 'Backgammon', subtitle: 'Dieser englische Brettspielklassiker ist ein Spaß für jung und alt, egal ob mit den Enkeln oder Freunden.', src: 3, key: 1},
    {title: 'Optiver Challenge', subtitle: 'Lust auf eine Knobelaufgabe die es in sich hat? Dann versuch dich an der Optiver Challenge!', src: 4, key: 2},
    {title: 'Eisbach', subtitle: 'nutzen sie die erfrischende Kälte des Eisbach um sich abzukühlen', src: 0, key: 3},
    {title: 'Elefantenhaus', subtitle: 'Beobachten sie die Tierwelt im Zoo', src: 1, key: 4},
    {title: 'Bares für Rares', subtitle: 'Diese deutsche Kultsendung sollte man sich nie entgehen lassen', src: 2, key: 9},
    {title: 'Backgammon', subtitle: 'Dieser englische Brettspielklassiker ist ein Spaß für jung und alt, egal ob mit den Enkeln oder Freunden.', src: 3, key: 5},
    {title: 'Optiver Challenge', subtitle: 'Lust auf eine Knobelaufgabe die es in sich hat? Dann versuch dich an der Optiver Challenge!', src: 4, key: 6},
    {title: 'Eisbach', subtitle: 'nutzen sie die erfrischende Kälte des Eisbach um sich abzukühlen', src: 0, key: 7},
    {title: 'Elefantenhaus', subtitle: 'Beobachten sie die Tierwelt im Zoo', src: 1, key: 8},
  ]

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Zu dem heutigen Wetter passen die folgenden Aktivitäten</Text>
        </View>
        
       <EndlessScrollableList activityArr={activityArr} />
       
        <Footer />
      </SafeAreaView>
    );
  }

export default ActivitiyScreen;