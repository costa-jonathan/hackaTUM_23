import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler'; // Import Swipeable from gesture-handler
import { main_color, windowHeight, windowWidth } from "../styles/globalstyles";

const ContainerList = () => {
  const [containers, setContainers] = useState([
    { id: 11, text: 'Bleiben Sie heute nicht langer als 20 Minuten in der Sonne.', icon: 'ios-sunny', isChecked: false },
    { id: 21, text: 'Legen Sie Ihre Medikamente in den Kühlschrank.', icon: 'ios-bulb', isChecked: false },
    { id: 31, text: 'Trinken Sie mindestens zwei Liter Wasser heute.', icon: 'ios-water', isChecked: false },
    { id: 41, text: 'Gehen Sie mit Bello vor 10:30 spazieren.', icon: 'ios-paw', isChecked: false },
    // Add more containers as needed
  ]);

  const toggleCheck = (containerId) => {
    const updatedContainers = containers.map((container) => {
      if (container.id === containerId) {
        return { ...container, isChecked: !container.isChecked };
      }
      return container;
    });

    setContainers(updatedContainers);
  };

  const deleteContainer = (containerId) => {
    const updatedContainers = containers.filter((container) => container.id !== containerId);
    setContainers(updatedContainers);
  };

  const renderContainerIcon = (container) => {
    const iconColor = container.isChecked ? 'grey' : main_color;

    return (
      <TouchableOpacity>
        <Text style={{ textDecorationLine: container.isChecked ? 'line-through' : 'none' }}>
          <Ionicons name={container.icon} size={icon_size} color={iconColor} />
        </Text>
      </TouchableOpacity>
    );
  };

  const renderContainerText = (container) => {
    // Apply text strike-through style if the task is checked
    const textStyle = {
      fontSize: text_size_containers,
      flex: 1,
      marginLeft: 10,
      textDecorationLine: container.isChecked ? 'line-through' : 'none',
      color: container.isChecked ? 'grey' : 'black',
    };

    return <Text style={textStyle}>{container.text}</Text>;
  };

  const renderContainer = (container) => {
    const iconColor = container.isChecked ? main_color : 'black';

    const renderRightActions = (_, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });

      return (
        <TouchableOpacity onPress={() => deleteContainer(container.id)}>
          <View style={styles.deleteContainer}>
            <Ionicons name="ios-trash" size={icon_size} color="white" />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable renderRightActions={renderRightActions}>
        {/* Wrap the entire container with TouchableOpacity */}
        <TouchableOpacity style={styles.todoTouchable} onPress={() => toggleCheck(container.id)}>
          <View key={container.id} style={styles.smallContainer}>
            {renderContainerText(container)}
            <View style={styles.iconContainer}>
              {renderContainerIcon(container)}
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <>
    {/* // <View style={styles.container}> */}
      <Text style={styles.headerText}>Denk heute an Folgendes:</Text>
        {containers.map(renderContainer)}

    {/* // </View> */}
    </>
  );
};

const text_size_containers = windowHeight / 40;
const icon_size = windowHeight / 30;

const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    padding: 20,
  },
  headerText: {
    fontSize: text_size_containers * 1.2,
    fontWeight: 'bold',
    marginBottom: windowHeight / 50,
    marginHorizontal: windowWidth / 40
  },
  scrollView: {
    // flex: 0.5,
  },
  todoTouchable: {
    marginHorizontal: windowWidth / 40
  },
  smallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    minHeight: 70,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    flexWrap: 'wrap', // Allow container to wrap onto multiple lines
    backgroundColor: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  addButtonContainer: {
    backgroundColor: main_color,
    padding: 10,
    height: 48,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: text_size_containers,
    height: '100%',
  },
});

export default ContainerList;
