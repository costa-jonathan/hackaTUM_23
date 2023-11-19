import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { footer } from "../styles/globalstyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useNavigationState } from '@react-navigation/native';
import { main_color } from "../styles/globalstyles";


export const Footer = () => {
  const navigationState = useNavigationState((state) => state);
  var navigation = useNavigation();


  const handleIconPress = (screen) => {
    navigation.navigate(screen);
  };

  const getIconColor = (screen) => {
    return screen === navigationState.routeNames[navigationState.index] ? main_color : "black";
  };

  return (
    <View style={footer.wrap}>
      <View style={footer.iconWrap}>
        <TouchableOpacity onPress={() => handleIconPress("Activities")}>
        <Feather style={[footer.icon, { color: getIconColor("Activities") }]} name="dribbble" size={45} color={"black"} />
        </TouchableOpacity>
      </View>
      <View style={footer.iconWrap}>
        <TouchableOpacity onPress={() => handleIconPress("Home")}>
        <Feather style={[footer.icon, { color: getIconColor("Home") }]} name="home" size={45} color={"black"} />
        </TouchableOpacity>
      </View>
      <View style={footer.iconWrap}>
        <TouchableOpacity onPress={() => handleIconPress("Map")}>
        <Feather style={[footer.icon, { color: getIconColor("Map") }]} name="map" size={45} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
