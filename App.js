import React from 'react';
import Swiper from 'react-native-swiper';
import {TouchableOpacity, View,Image, Text,StyleSheet} from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Container,Home,HomeText ,CustomText} from './styles';

// required variable for react navigation 
const Stack = createNativeStackNavigator();


{/* Home Screen */}
function HomeScreen({navigation}) {
  return (
    <View style={[styles.home , {flexDirection: "column"}]}>
        {/* Header */}
        <View style={{flex:2, backgroundColor: 'goldenrod', alignItems: 'center'}}>

        </View>

        {/* Middle portion */}
        <View style={{flex:5, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./assets/favicon.png')} />
          <Text style={{fontSize: 30}}>Home Screen</Text>
        </View>

        {/* Navigation Bar */}
        <View style={{flex:1, backgroundColor:'goldenrod', flexDirection:"row"}}>
          {/* Button to Left Screen */}
          <View style={styles.navBarView}>
            <TouchableOpacity onPress={() => {navigation.navigate('Left')}}>
              <Image source={require('./assets/games.png')} style={[styles.navBarImg]} />
            </TouchableOpacity> 
          </View>

          <View style={styles.navBarView}>
            <Image source={require('./assets/favicon.png')} style={[styles.navBarImg]}/>
          </View>

          {/* Button to Right Screen */}
          <View style={styles.navBarView}>
            <TouchableOpacity onPress={() => {navigation.navigate('Right')}}>
              <Image source={require('./assets/flash.png')} style={[styles.navBarImg]}/>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
  );
}

function LeftScreen(navigation) {
  return (
    <Container color='goldenrod'>
        <CustomText>Left Menu</CustomText>
    </Container>
  );
}

function RightScreen(navigation) {
  return (
    <Container color='goldenrod'>
        <CustomText>Right Menu</CustomText>
    </Container>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName="Home"
      >
        <Stack.Screen name = "Left" 
          component = {LeftScreen}
        />
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Right" component={RightScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#f9f6ee',
    flex: 1,
    padding: 0,
  },

  navBarImg: {
    height: 50,
    width: 50,
  },

  navBarView: {
    flex:1 , 
    justifyContent: 'center', 
    alignItems: 'center',
  }

});