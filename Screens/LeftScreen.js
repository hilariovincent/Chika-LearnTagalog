import React,{isValidElement,useState} from 'react';
import {View,Image, Text,StyleSheet, Switch} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//where the icons are from linked here: https://docs.expo.dev/guides/icons/
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles} from '../styles';
import imagesOn from '../assets/pika.png';

export default class LeftScreen extends React.Component{
  render(){
    return (
      <View style={styles.screenContainer}>
          <Text>
            games coming soon...
          </Text>
      </View>
    );
  } 
}
  
