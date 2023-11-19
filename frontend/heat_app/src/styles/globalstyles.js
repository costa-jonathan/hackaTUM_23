import { StyleSheet, Dimensions, Platform } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const os = Platform.OS;
export const borderRadius = 10;

export const main_color = '#c93600'//'#d30f47'//'#b59469'//'#ff6482'//'#FFE9B1';
export const danger_color = '#d70015';
export const warning_color = '#ff9f0a';

export const fontLarge = windowHeight / 28;
export const fontSmall = windowHeight / 40;


export const styles = StyleSheet.create({
    text: {
        fontSize: fontSmall
    },
    header: {
      fontSize: fontLarge,
      fontWeight: 'bold'
    },
    headerContainer: {
      alignSelf: 'center',
      marginVertical: windowHeight / 50
    },
    image: {
      width: 'auto',
      height: windowHeight / 4.5,
      borderRadius: 10
    }
    
 });

 export const footer = StyleSheet.create({
   text: {
     fontSize: fontSmall,
   },
   navWrapper: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-evenly"
   },
   wrap: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingBottom: windowHeight / 50,
    paddingTop: windowHeight / 80,
    width: windowWidth,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  iconWrap: {
   marginHorizontal: windowWidth / 30,
   overflow: 'visible',
  },

  icon: {
    color: main_color
  },

 });

 export const activityCard = StyleSheet.create({
   outer: {
    display: 'flex',
    alignSelf: "center",
    backgroundColor: main_color,
    height: windowHeight / 2.5,
    borderRadius: 10,
    width: windowWidth / 1.1
   },

   inner: {
    backgroundColor: main_color,
    height: windowHeight / 2.8,
    borderRadius: 10,
   },
   imgBox: {
    flex: 0.65
   },
   titleBox: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth / 30,
   },
   subtitleBox: {
    flex: 0.2,
    paddingHorizontal: windowWidth / 30,
   },
   title: {
    fontSize: fontLarge,
    fontWeight: 'bold',
    color: 'black'
   },
   subtitle: {
    fontSize: fontSmall,
    color: 'black'
   }

 });