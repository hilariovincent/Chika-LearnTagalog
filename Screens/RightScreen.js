import React,{useEffect,useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import { styles} from '../styles';
import { Flashcard } from './Flashcard';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


function FlashcardMenu({navigation}) {
  const [searchInput, setSearchInput] = useState(null);  

  const DATA = [
    {"id": "1","title": "Greetings, Goodbyes, and Repetition"},
    {"id" : "2","title": "Questions, Shopping, and Courtesy"},
    {"id" : "3", "title" :"Expression of likes/dislikes/discomfort"},
    {"id" : "4", "title" :"Directions, Introductions, Pronouns"},
    {"id" : "5", "title" :"Question Words, Numbers"},
    {"id" : "6", "title" :"Time Words/ Questions"},
    {"id" : "7", "title" :"Get to know your peers"},
    {"id" : "8", "title" :"Adjectives"}
  ];

  return (
    <View style={styles.screenContainer}>
       <Text style={styles.heading}>Bokabularyo</Text>
       {/* <TextInput 
        value={searchInput} 
        onChangeText={(val)=>setSearchInput(val)}
        placeholder="Enter Vocabulary Set Name" 
        placeholderTextColor={"#000000"} 
        style={styles.searchBar}/> */}

        
        <FlatList
            data={DATA}
            keyExtractor = {item => item.id}
            renderItem={({item}) => 
              <TouchableOpacity 
              style={styles.flashcardButton}
              onPress={() => {
                navigation.navigate('Flashcards',
                  {itemId: item.id,
                  otherParam: ''});
              }}
              >
                <Text style={styles.flashcardTitle}>{item.title}</Text>                
              </TouchableOpacity>  
            }
        />
        
     </View>    
  );
}

const Stack = createNativeStackNavigator();

export function RightScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={FlashcardMenu} options={{ headerShown: false }}/>
      <Stack.Screen name="Flashcards" component={Flashcard}/>
    </Stack.Navigator>
  );
}
  
