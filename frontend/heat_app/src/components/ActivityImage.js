import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { activityCard, styles } from "../styles/globalstyles";
import { Feather } from "@expo/vector-icons";

export const Eisbach = () => {
    return (
        <Image 
        source={require("../assets/Eisbach.jpeg")}
        style={styles.image}
        />
    );
}

export const Elefant = () => {
    return (
        <Image 
        source={require("../assets/Elefant.jpg")}
        style={styles.image}
        />
    );
}

export const BaresRares = () => {
    return (
        <Image 
        source={require("../assets/HorstLichter.jpg")}
        style={styles.image}
        />
    );
}

export const Optiver = () => {
    return (
        <Image 
        source={require("../assets/optiver.jpg")}
        style={styles.image}
        />
    );
}

export const Backgammon = () => {
    return (
        <Image 
        source={require("../assets/backgammon.png")}
        style={styles.image}
        />
    );
}