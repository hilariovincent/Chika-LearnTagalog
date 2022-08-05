import React,{isValidElement,useState} from 'react';
import {SafeAreaView,Image, Text,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//where the icons are from linked here: https://docs.expo.dev/guides/icons/
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles} from '../styles';

  
export function RightScreen() {
    return (
        <SafeAreaView style={styles.screenContainer}>
          <FlatList
            data={[
              {title: 'Greetings, Goodbyes, and Repetition' },
              {title: 'Questions, Shopping, and Courtesy'}
            ]}
    
            renderItem={({item}) => 
              <TouchableOpacity style={styles.flashcard}>
                <Text>{item.title}</Text>
              </TouchableOpacity>  
            }
          />
        </SafeAreaView>
          
          
        
        
      );
}
  
