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

    const customData = require('../data/eventsList.json');
    const listEvents = () => {
        return customData.map((element: {
          id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; place: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; qttMax: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; qttReserved: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; qttScanned: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
}) => {
          return (
            <TouchableOpacity
             style={styles.buttons}
             onPress={(scannerLaunch) => launchScanner(element.id)}>
              <View style={styles.headButton}>
                <Text style={styles.name}>{element.name}</Text>
                <Text style={styles.id}>id : {element.id}</Text>
              </View>
              <View style={styles.innerButton}>
                <Text style={styles.date}>Le {element.date} à {element.place}</Text>
              </View>
              <View style={styles.footerButton}>
                <Text style={styles.qttMax}>Qtt max : {element.qttMax}</Text>
                <Text style={styles.qttReserved}>Qtt reservé : {element.qttReserved}</Text>
                <Text style={styles.qttScanned}>Qtt scanné : {element.qttScanned}</Text>
              </View>
            </TouchableOpacity >
          );
        });
      };
  return <><View style={styles.headerPage}><Text>AirDev Tickets Scanner Home Page{}</Text></View><View style={styles.mainContainer}><ScrollView style={styles.container} contentContainerStyle={styles.justifyCont}>{listEvents()}</ScrollView></View></>;
  
};

const styles = StyleSheet.create({
  headerPage:{
    borderWidth:2,
    paddingTop:15,
    paddingBottom:15,
    alignItems:'center'

  },
    mainContainer:{
      flex:1,
    },
    container:{
      flex:1,
      flexDirection:'column',
    },
    justifyCont:{
      justifyContent: 'flex-start',
    },
    buttons:{
      width:'100%',
      backgroundColor:'white',
      borderWidth:1,
      flex:1,
    },
    headButton:{
      flexDirection:'row',
      flexWrap:'wrap',
    },
    innerButton:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginTop:15,
      marginBottom:15,
      marginLeft:15,
    },
    footerButton:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'center',
      marginLeft:15,
    },
    name: {
      fontSize:20,
      fontWeight: "bold",
      color:'black',
      marginLeft: 15,
      marginTop: 5,
    },
    id: {
      color:'grey',
      flex:1,
      textAlign:'right',
      marginRight: 7,
      marginTop: 5,
    },
    date: {
      color:'black',
      flex:1,
    },
    qttMax: {
      color:'black', 
      flex:1,
    },
    qttReserved: {
      color:'black',
      flex:1,
    },
    qttScanned: {
      color:'black',
      flex:1,
    },

});
export default HomeView;

function launchScanner(id: any): void {
    throw new Error('Function not implemented.');
}
