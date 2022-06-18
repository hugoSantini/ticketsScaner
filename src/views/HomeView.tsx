import React from 'react';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HomeView = () => {

    const customData = require('../src/data/eventsList.json');
    const listEvents = () => {
        return customData.map((element: {id: String, name : String, date : String, place : String, qttMax: String, qttReserved: String, qttScaned: String;}) => {
          return (
            <TouchableOpacity
             style={styles.buttons}
             onPress={(scannerLaunch) => launchScaner(element.id)}>
                <Text style={styles.name}>{element.name}</Text>
                <Text style={styles.id}>{element.id}</Text>
                <Text style={styles.date}>{element.date}</Text>
                <Text style={styles.place}>{element.place}</Text>
                <Text style={styles.qttMax}>{element.qttMax}</Text>
                <Text style={styles.qttReserved}>{element.qttReserved}</Text>
                <Text style={styles.qttScaned}>{element.qttScaned}</Text>
            </TouchableOpacity >
          );
        });
      };
  return <View style={styles.container}>{listEvents()}</View>;
};

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    buttons:{

    },
    name: {

    },

    id: {
        
    },

    date: {
        
    },
    place: {
        
    },
    qttMax: {
        
    },
    qttReserved: {
        
    },
    qttScaned: {
        
    },

});
export default HomeView;

function launchScaner(id: any): void {
    throw new Error('Function not implemented.');
}
