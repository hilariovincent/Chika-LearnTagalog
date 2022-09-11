import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    
  }


});
