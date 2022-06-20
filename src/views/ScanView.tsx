import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

const ScanView = () => {
    const customData = require('../data/infosTicket.json');
    const listInfosTicket = (element: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
          return (
            <View>
              <View style={styles.headPage}>
               <Text style={styles.name}>{element.name} {element.lastName}</Text>
               <Text style={styles.id}>id : {element.ticketId}</Text>
              </View>
              <Text style={styles.email}>{element.email}</Text>
              <View style={styles.entitleContainer}>
                <Text style={styles.entitleText}>
                  Purchase Date
                </Text>
                <Text style={styles.entitleText}>
                  Purchase Place
                </Text>
              </View>
              <View>
                <Text style={styles.purchaseDate}>{element.purchaseDate}</Text>
              </View>
            </View>

          );
      };
  return <><View style={styles.headerPage}><Text style={styles.headerText}>Order Details</Text></View><View>{listInfosTicket(customData)}</View></>;
};

const styles = StyleSheet.create({
  headerPage:{
    borderBottomWidth:2,
    paddingTop:15,
    paddingBottom:15,
    alignItems:'center',
  },
  headerText:{
    color:'black',
    fontSize: 18,
  },
  headPage:{
    flexDirection:'row',
      flexWrap:'wrap',
  },
  name:{
    fontSize: 35,
    color: "black",
    marginTop : 15,
    marginLeft : 15
  },
  id:{
    color:'grey',
    flex:1,
    textAlign:'right',
    marginRight: 7,
    marginTop: 15,
  },
  email:{
    color:"grey",
    marginTop: 7,
    marginLeft: 15,
  },
  entitleContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  entitleText:{
    fontSize : 10,
  },
});

export default ScanView;