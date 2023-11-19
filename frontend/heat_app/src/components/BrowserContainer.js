import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import { windowHeight } from '../styles/globalstyles'

var map = new Map()
map.set(0, 'https://www.scribblemaps.com/maps/view/München-Morgen/vteskDktdO')
map.set(1, 'https://www.scribblemaps.com/maps/view/München-Mittag/PK2TaHh0ox')
map.set(2, 'https://www.scribblemaps.com/maps/view/München-Abend/Z9xnO1zzhA')
map.set(3, 'https://www.scribblemaps.com/maps/view/Trinkbrunnen-München/ko7SsggPwl')

const BrowserContainer = () => {
  const [radio, setRadio] = useState(3);

  const handleMapSelection = (index) => {
    setRadio(index);
    // console.log(radio)
  };

  const radio_props = [
    { label: 'Trinkwasserbrunnen', value: 3 },
    { label: 'Hitzekarte', value: 1 },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        { radio == 1 && <WebView source={{ uri: map.get(0) }} style={{ flex: 0.95 }} /> }
        { radio == 4 && <WebView source={{ uri: map.get(1) }} style={{ flex: 0.95 }} /> }
        { radio == 5 && <WebView source={{ uri: map.get(2) }} style={{ flex: 0.95 }} /> }
        { radio == 3 && <WebView source={{ uri: map.get(3) }} style={{ flex: 0.95 }} /> }
      <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', marginBottom: windowHeight / 9  }}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => handleMapSelection(value)}
          formHorizontal={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default BrowserContainer;
