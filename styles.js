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

  loginContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer:{
    width: '80%'
  },
  input:{
    color:'black',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  loginButtonContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  loginButton:{
    backgroundColor: "#0782f9",
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline:{
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlineText:{
    color:'black',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonText:{
    color:'black',
    fontWeight: '700',
    fontSize: 16,
  },

  text:{
    color:'black',
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
  },

  flashcardButton: {
    flex: 1, 
    backgroundColor: '#FFE662',
    justifyContent: 'center',
    height: 100, 
    borderColor: '#f9f6ee',
    borderWidth: .5,
    paddingLeft: 15, 
    marginTop: 10,
  },

  heading: {
    fontSize: 32,
    marginTop: 60, 
    marginLeft: 15, 
    fontWeight: 'bold'
  },

  searchBar: {
    height: 39,
    width: '90%',
    backgroundColor: '#ebebeb',
    borderRadius: 20, 
    alignSelf: "center",
    paddingLeft: 15,
    marginTop: 10 
  },

  flashcardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  }, 

  flashcardFront : {
    alignSelf: "center",
    height: 300,
    width: 400, 
    backgroundColor: '#FFE662', 
    top: 100
  }, 

  flashcardBack : {
    height: 300,
    width: 400, 
    backgroundColor: '#FFE662',
    position: "absolute",
    top: 100,
    alignSelf: "center"
  },

  hidden : {
    backfaceVisibility: 'hidden',
  },

  vocabWord : {
    fontSize: 27, 
    alignSelf: "center", 
    top: 140,
  }, 

  iconView :{
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    
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

  flashcardButton: {
    flex: 1, 
    backgroundColor: '#FFE662',
    justifyContent: 'center',
    height: 100, 
    borderColor: '#f9f6ee',
    borderWidth: .5,
    paddingLeft: 15, 
    marginTop: 10,
  },

  heading: {
    fontSize: 32,
    marginTop: 60, 
    marginLeft: 15, 
    fontWeight: 'bold'
  },

  searchBar: {
    height: 39,
    width: '90%',
    backgroundColor: '#ebebeb',
    borderRadius: 20, 
    alignSelf: "center",
    paddingLeft: 15,
    marginTop: 10 
  },

  flashcardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  }, 

  flashcardFront : {
    alignSelf: "center",
    height: 300,
    width: 400, 
    backgroundColor: '#FFE662', 
    top: 100
  }, 

  flashcardBack : {
    height: 300,
    width: 400, 
    backgroundColor: '#FFE662',
    position: "absolute",
    top: 100,
    alignSelf: "center"
  },

  hidden : {
    backfaceVisibility: 'hidden',
  },

  vocabWord : {
    fontSize: 27, 
    alignSelf: "center", 
    top: 140,
  }, 

  iconView :{
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    
  }


});

