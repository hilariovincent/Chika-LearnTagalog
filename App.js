import {React,useCallback, useEffect, useState} from 'react';
import {View,Image, Text,StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//where the icons are from linked here: https://docs.expo.dev/guides/icons/
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from './styles.js';
import {HomeScreen} from './Screens/HomeScreen.js'
import LeftScreen from './Screens/LeftScreen.js'
import {RightScreen} from './Screens/RightScreen.js'
import LoadingScreen from './Screens/LoadingScreen.js'
import LoginScreen from './Screens/LoginScreen.js'
import RegisterScreen from './Screens/RegisterScreen.js'
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
  
function Home() {     
  return(
      <Tab.Navigator 
        // code similar to documentation https://reactnavigation.org/docs/tab-based-navigation/
        screenOptions={({route}) => ({
          
          /*
             * this function assigns an icon to the nav bar using option tabBarIcon
             * returns an icon based on the if statements 
             * icons are from MaterialCommunityIcons (part of vector icons included in expo)*/
             
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

        
             //checks route name and assigns an icon whether it is currently clicked or not
             
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
        <Tab.Screen name = "Left" component = {LeftScreen}  />
        <Tab.Screen name = "Home" component= {HomeScreen} />
        <Tab.Screen name = "Right" component={RightScreen}/>
      </Tab.Navigator>
  )
};

export default function App()
{

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown : false}} name = "Login" component={LoginScreen}/>
        <Stack.Screen options = {{headerShown : false}} name = "Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

