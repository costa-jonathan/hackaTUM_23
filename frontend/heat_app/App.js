import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import ActivityScreen from './src/screens/ActivitiyScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import TestScreen from './src/screens/TestScreen'
import {useState} from "react";
import LoginComponent from "./src/components/Login"
import {validate} from "@babel/core/lib/config/validation/options";

const Drawer = createDrawerNavigator();

export default function App(){
console.log("RENDERED APP")

const Drawer = createDrawerNavigator();

const [isAuthenticated, setAuthenticated] = useState(true);
const [username, setUsername] = useState("");


const handleLogin = () => {
    setAuthenticated(true);
};
const [test,setTest] = useState("")

let username_ = ""

const getUserNameFromLogin = (value) => {
    setUsername("value")
    username_ = value
    setTest(username_)
}

const getTest = () => {
    return test;
}


  return (
    <NavigationContainer>
        {isAuthenticated ? (
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen
                    name="Home"
                    options={{ headerShown: false }}
                >
                    {() => <HomeScreen username={getTest()}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Activities"  component={ActivityScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Einstellungen" component={SettingsScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="TEST - REMOVE" component={TestScreen} options={{ headerShown: false }}/>
            </Drawer.Navigator>

        ) : (
            <LoginComponent onLogin={handleLogin} passUserName={getUserNameFromLogin} />

        )}

    </NavigationContainer>
  );


}
