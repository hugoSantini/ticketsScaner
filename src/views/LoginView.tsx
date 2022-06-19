import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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



const LoginView = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

  return(
    <><View>
          <Text
              style={styles.titre}> 
              AirDev Tickets Scanners
          </Text>
          <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)} />
          <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)} />
      </View>
      
      <View style={styles.flexBox}>
        <TouchableOpacity 
            style={styles.loginBtn}
            onPress={(login) => callLoggin(email,password)}
        >
              <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          </View>
</>
);};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      titre: {
        textAlign : 'center',
        marginTop: 30,
        marginBottom: 50,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
      },
      TextInput:{
        height: 50,
        padding: 10,
        marginLeft: 20,
        marginBottom: 50,
        marginRight: 20,
        borderWidth: 1,
    },
      loginBtn: {
        backgroundColor : 'grey',
        textAlign: 'center',
        alignItems: 'center',
        width: "60%",
        borderWidth: 1,
        padding : 15,
      },
      loginText: {

      },
      flexBox: {
        flex: 1,
        alignItems : "center",
      }
});
  
export default LoginView;

function callLoggin(email: string, password: string): void {
    throw new Error('Function not implemented.');
}

