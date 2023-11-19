import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { borderRadius, main_color, warning_color, danger_color, windowWidth, fontLarge, fontSmall  } from '../styles/globalstyles';

const Timeline = () => {
  const timelineStart = 4;
  const timelineEnd = 20.5;
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timeIntervalId);
  }, []);

  const getCurrentHour = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return (hours + minutes / 60)-0.25;
  };


  const getWidth = (startTime, endTime) => {
    return String((endTime - startTime)/(timelineEnd-timelineStart)*100)+ '%';
  };

  const getLeft = (startTime) => {
    return String((startTime-timelineStart)/(timelineEnd-timelineStart)*100) + '%';
  };

  return (
    <>
    <View style={styles.container}>
      <View style={[styles.currentTime, { left: getLeft(getCurrentHour()) }]}></View>

      {/* Black line above the time labels */}
      <View style={styles.timelineLine}></View>

      {/* Red overlay from 10:00 to 18:30 */}
      <View style={[styles.redOverlay, { width: getWidth(10, 19), left: getLeft(10), backgroundColor: warning_color }]}></View>
      {/* Red overlay from 10:00 to 18:30 */}
      <View style={[styles.redOverlay, { width: getWidth(11, 14), left: getLeft(11), backgroundColor: danger_color }]}></View>

      {/* Timeline labels with indicators */}
      <View style={styles.timelineLabels}>
        <View style={styles.timelineLabelContainer}>
          <View style={styles.indicator}></View>
          <Text style={styles.timelineLabel}>06<Text style={styles.sup}>.00</Text></Text>
          
        </View>
        <View style={styles.timelineLabelContainer}>
          <View style={styles.indicator}></View>
          <Text style={styles.timelineLabel}>09<Text style={styles.sup}>.00</Text></Text>
        </View>
        <View style={styles.timelineLabelContainer}>
          <View style={styles.indicator}></View>
          <Text style={styles.timelineLabel}>12<Text style={styles.sup}>.00</Text></Text>
        </View>
        <View style={styles.timelineLabelContainer}>
          <View style={styles.indicator}></View>
          <Text style={styles.timelineLabel}>15<Text style={styles.sup}>.00</Text></Text>
        </View>
        <View style={styles.timelineLabelContainer}>
          <View style={styles.indicator}></View>
          <Text style={styles.timelineLabel}>18<Text style={styles.sup}>.00</Text></Text>
        </View>
        <View style={styles.timelineLabelContainer}>
          <View style={styles.indicator}></View>
          <Text style={styles.timelineLabel}>21<Text style={styles.sup}>.00</Text></Text>
        </View>
      </View>
    </View>
     <View style={styles.legend}>
        <View style={styles.sublegend}>
          <View style={[styles.legendColor, { backgroundColor: warning_color }]}></View>
          <Text style={styles.legendText}>Vermeiden Sie direkte Sonne</Text>
        </View>
        <View style={styles.sublegend}>
          <View style={[styles.legendColor, { backgroundColor: danger_color }]}></View>
          <Text style={styles.legendText}>Bleiben Sie Zuhause</Text>
        </View>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
    maxHeight: 35,
  },
  timelineLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: windowWidth,
    height: 35,
    backgroundColor: '#f0f0f0'
  },
  timelineLabels: {
    position: 'absolute',
    top: 0,
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timelineLabelContainer: {
    alignItems: 'center',
    overflow: 'visible'
  },
  timelineLabel: {
    fontSize: fontLarge,
    color: 'black',
    marginTop: 2,
  },
  indicator: {
    width: 3,
    height: 35,
    backgroundColor: 'white',
  },
  redOverlay: {
    position: 'absolute',
    top: 0,
    height: 35,
    borderRadius: borderRadius-5,
  },
  currentTime: {
    backgroundColor: main_color,
    height: 35,
    width: 5,
    borderRadius: borderRadius-8,
  },
  legend: {
    paddingLeft: 20,
  },
  sublegend : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 20,
    height: 10,
    marginRight: 5,
    borderRadius: borderRadius-5,
  },
  legendText: {
    fontSize: fontLarge,
    color: 'black',
  },
  sup: {
    fontSize: 12, // Adjust font size as needed
    lineHeight: 20, // Adjust line height as needed
    verticalAlign: 'top', // Align text to the top
  }
});

export default Timeline;
