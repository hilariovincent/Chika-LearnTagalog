import React from 'react'
import {View, Text, StyledSheet, ActivityIndicator} from 'react-native'
import { styles,StyledText} from '../styles';
import { auth } from '../firebase'

export default class LoadingScreen extends React.Component{
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render(){
    return (
      <View style={styles.screenContainer}>
          <Text>
            Loading Screen
          </Text>
          <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  } 
}
  
