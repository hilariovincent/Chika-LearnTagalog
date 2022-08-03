import React,{isValidElement,useState} from 'react';
import {View,Image, Text,StyleSheet, Switch} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//where the icons are from linked here: https://docs.expo.dev/guides/icons/
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container,CustomText} from '../styles';

{/* Home Screen */}
export function HomeScreen() {

    const [isEnabled, setIsEnabled] = useState(true);
    const [ text, setText] = useState('Switch');

    const toggleSwitch = () => {
        if(isEnabled){
            setText('Stats')
        } else {
            setText('Progress')
        }
        setIsEnabled(previousState => !previousState)
    }

    return (
      <View style={[styles.home , {flexDirection: "column"}]}>
          
          <View style={{flex:1.5, backgroundColor: '#FFE662', alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Home Screen</Text>
          </View>
  
          {/* Middle portion */}
          <View style={{flex:5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontWeight: 'bold', margin:1}}>{text}</Text>
            <Switch
                trackColor={{false: 'grey', true:'tomato'}}
                thumbColor = {isEnabled ? 'tomato' : '#f4f3f4'}
                ios_backgroundColor = 'grey'
                onValueChange={toggleSwitch}
                value = {isEnabled}
            />
          </View>
  
        </View>
    );
  }
  
  
const styles = StyleSheet.create({
home: {
    backgroundColor: '#f9f6ee',
    flex: 1,
    padding: 0,
},

});