import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Alert, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (

    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={require('./assets/favicon.png')}/>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Email'
          placeholderTextColor={'white'}
          
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder='Password'
        placeholderTextColor={'white'}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.forgotButton}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style = {styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center'
    
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 80
  },
  inputView: {
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput:{
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    height: 50,
    width: "100%",
    color: 'white',
    borderRadius:20,
    borderWidth: 2,
    paddingLeft: 10,
  },
  forgotButton:{
    color:'white',
    height:30,
    marginBottom:30
  },
  loginButton:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"darkslateblue",
    color: 'white',
  }
});

