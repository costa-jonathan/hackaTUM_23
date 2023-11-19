import { useState, useEffect } from "react";
import { View, Text } from "react-native";

export const Openweather = () => {
    const[weather, setWeather] = useState(0);
    const[loading, setLoading] = useState(true);

     useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://api.brightsky.dev/current_weather';
        const queryParams = {
          lat: '52.52',
          lon: '13.4',
        };

        const queryString = Object.keys(queryParams)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
          .join('&');

        const apiUrlWithParams = `${apiUrl}?${queryString}`;

        const response = await fetch(apiUrlWithParams, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setLoading(false);
         setWeather(result.weather.temperature);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


    return (
        <View style={{flex: 0.2}}>
           <Text> temperature: {weather}  </Text>
        </View>
    );
}

