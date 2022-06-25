import React from 'react';
import Swiper from 'react-native-swiper';
import {SafeAreaView, View,Image, Text,StyleSheet} from 'react-native';

import { Container,Home,HomeText ,CustomText} from './styles';

export default function App() {
  return (
    <Swiper 
    loop={false}
    index={1} 
    showsPagination={false}
    showsButtons={true}
    >
      <Container color='goldenrod'>
        <CustomText>Left Menu</CustomText>
      </Container>

      {/* Home Screen */}
      <View style={[styles.home , {flexDirection: "column"}]}>
        <View style={{flex:2, backgroundColor: 'goldenrod', alignItems: 'center'}}>

        </View>
        <View style={{flex:5, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./assets/favicon.png')} />
          <Text style={{fontSize: 30}}>Home Screen</Text>
        </View>  
        <View style={{flex:1, backgroundColor:'goldenrod', flexDirection:"row"}}>
          <View style={styles.navBarView}>
            <Image source={require('./assets/games.png')} style={[styles.navBarImg]} />
          </View>
          <View style={styles.navBarView}>
            <Image source={require('./assets/favicon.png')} style={[styles.navBarImg]}/>
          </View>
          <View style={styles.navBarView}>
            <Image source={require('./assets/flash.png')} style={[styles.navBarImg]}/>
          </View>
          
        </View>
      </View>

      
      <Container color='goldenrod'>
        <CustomText>Right Menu</CustomText>
      </Container>
    </Swiper>
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