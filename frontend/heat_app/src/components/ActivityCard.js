import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { activityCard } from "../styles/globalstyles";
import { Feather } from "@expo/vector-icons";
import { styles } from "../styles/globalstyles";
import { Backgammon, BaresRares, Eisbach, Elefant, Optiver } from "./ActivityImage";

export const ActivityCard = ({ title, subtitle, index } ) => {

  const path1 = '../assets/Eisbach.jpeg'

  return (
  <View>
    <View style={activityCard.outer}>
          <View style={activityCard.imgBox}>
            {index == 0 && <Eisbach />}
            {index == 1 && <Elefant />}
            {index == 2 && <BaresRares />}
            {index == 3 && <Backgammon />}
            {index == 4 && <Optiver />}
          </View>
          <View style={activityCard.titleBox}>
            <Text style={activityCard.title}>{title}</Text>
            <Feather name={"sun"} color={'white'} size={20}/>
          </View>
          <View style={activityCard.subtitleBox}>
            <Text style={activityCard.subtitle}>{subtitle} </Text>
        </View>
    </View>
  </View>
  );
};
