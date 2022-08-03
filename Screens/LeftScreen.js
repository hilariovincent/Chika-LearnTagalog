import React,{isValidElement,useState} from 'react';
import {View,Image, Text,StyleSheet, Switch} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//where the icons are from linked here: https://docs.expo.dev/guides/icons/
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container,CustomText} from '../styles';

export function LeftScreen() {
return (
    <Container color='#FFE662'>
        <CustomText>Left Menu</CustomText>
    </Container>
);
}
  
const styles = StyleSheet.create({
home: {
    backgroundColor: '#f9f6ee',
    flex: 1,
    padding: 0,
},

});