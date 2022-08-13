import React from "react";
import { StyleSheet } from "react-native";
import { 
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic 
} from '@expo-google-fonts/nunito'
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"

export const styles = StyleSheet.create({

  text:{
    fontSize:40,
  },

  home: {
    backgroundColor: '#f9f6ee',
    flex: 1,
    padding: 0,
  },
  screenContainer: {
    flex: 1, 
    backgroundColor: '#f9f6ee',
    justifyContent: 'center',
    
  },

  flashcard: {
    flex: 1, 
    backgroundColor: '#FFE662',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100, 
    borderColor: '#f9f6ee',
    borderWidth: .5,
    borderRadius: 25
  },

  HomeContainer:{
    flex: 1,
    padding:20,
  },

  avatar:{
    width: 181,
    height: 181,
    borderRadius: 200,
  },

  avatarPlaceholder: {
    width:181,
    height: 181,
    backgroundColor: "#E1E2E6",
    borderRadius: 200,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center"
  },
  rect:{
    top:0,
    left: 0,
    width: 610,
    height: 250,
    position: "absolute",
    backgroundColor: "rgba(240,213,118,1)"
  },
  rect2:{
    top:0,
    left: 0,
    width: 350,
    height: 350,
    alignItems: "center",
    backgroundColor: "#E1E2E6",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },


  
});

