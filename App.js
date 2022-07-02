import React from 'react';
import {View,Image, Text,StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//where the icons are from linked here: https://docs.expo.dev/guides/icons/
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container,CustomText} from './styles';

// required variable for react navigation bottom tab 
const Tab = createBottomTabNavigator();


{/* Home Screen */}
function HomeScreen() {
  return (
    <View style={[styles.home , {flexDirection: "column"}]}>
        {/* Header */}
        <View style={{flex:1, backgroundColor: '#FFE662', alignItems: 'center'}}>

        </View>

        {/* Middle portion */}
        <View style={{flex:5, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./assets/favicon.png')} />
          <Text style={{fontSize: 30}}>Home Screen</Text>
        </View>

      </View>
  );
}

function LeftScreen() {
  return (
    <Container color='#FFE662'>
        <CustomText>Left Menu</CustomText>
    </Container>
  );
}

function RightScreen() {
  return (
    <Container color='#FFE662'>
        <CustomText>Right Menu</CustomText>
    </Container>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        // code similar to documentation https://reactnavigation.org/docs/tab-based-navigation/
        screenOptions={({route}) => ({
          /**
             * this function assigns an icon to the nav bar using option tabBarIcon
             * returns an icon based on the if statements 
             * icons are from MaterialCommunityIcons (part of vector icons included in expo)
             */
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            /**
             * checks route name and assigns an icon whether it is currently clicked or not
             */
            if (route.name === 'Left') {
              iconName = focused
                ? 'gamepad-circle'
                : 'gamepad-circle-outline';
            } else if (route.name === 'Right'){
              iconName = focused
                ? 'card'
                : 'card-outline';
            } else if (route.name === 'Home') {
              iconName = focused 
                ? 'home'
                : 'home-outline'
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
          },
          //assigns colors to icons
          tabBarActiveTintColor: '#F6412D',
          tabBarInactiveTintColor: '#FF5607',
          //gets rid of default header by react navigation 
          headerShown: false
        })}
        initialRouteName="Home"
      >
        //screens
        <Tab.Screen name = "Left" component = {LeftScreen}  />
        <Tab.Screen name = "Home" component={HomeScreen} />
        <Tab.Screen name = "Right" component={RightScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#f9f6ee',
    flex: 1,
    padding: 0,
  },

});