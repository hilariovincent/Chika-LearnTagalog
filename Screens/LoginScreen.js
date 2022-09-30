import React, {useEffect, useState} from 'react'
import {View, Text, StyledSheet, TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged , createUserWithEmailAndPassword} from "firebase/auth";
import { styles } from '../styles'

export default function LoginScreen({navigation}){ 

  /*
if (auth.currentUser) {
  navigation.navigate("Home");
} else {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate("Home");
    }
  });
} */

let [errorMessage, setErrorMessage] = React.useState("");
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')  

let SignInUser =()=>{
  if (email !== "" && password !== "") {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('Home');
        setErrorMessage("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setErrorMessage(error.message)
      });
  } else {
    setErrorMessage("Please enter an email and password");
  }
  }

  const handleSignUp = ({}) => {
    createUserWithEmailAndPassword(auth, email,password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
      navigation.navigate('Home');
    })
    .catch(error => alert(error.message))
    }
  return(
    <KeyboardAvoidingView
    style = {styles.loginContainer}
    behavior = "padding"
    >

      <View style ={styles.inputContainer}>
        <TextInput
          placeholderTextColor={'black'}
          placeholder="Email"
          value = {email}
          onChangeText ={text => setEmail(text) }
          style = {styles.input}
        />
        <TextInput
          placeholderTextColor={'black'}
          placeholder="Password"
          value = {password}
          onChangeText ={text => setPassword(text)}
          style = {styles.input}
          secureTextEntry
        />
      </View>

      <View style ={styles.loginButtonContainer}>
        <TouchableOpacity
          onPress={SignInUser}
          style ={styles.loginButton}
        >
          <Text style = {styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style ={[styles.loginButton, styles.buttonOutline]}
        >
          <Text style = {styles.buttonOutlineText}>
            Register
          </Text>
        </TouchableOpacity> 
      </View>


    </KeyboardAvoidingView>
  )
}

