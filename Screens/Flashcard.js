import react, {useEffect, useRef, useState} from "react";
import { View, Text, Button, TouchableOpacity, Animated } from "react-native";
import { styles } from "../styles";
import { obj } from "./Vocabulary";
import { AntDesign } from '@expo/vector-icons';
import { Audio } from "expo-av";

export function Flashcard({ route, navigation}) {
    const {itemId, otherParam} = route.params; 

    const SET = obj.vocabulary[itemId - 1].Set;
    const animate = useRef(new Animated.Value(0));
    const [flip, setFlip] = useState(false);
    const [word, setWord] = useState(SET[0]);
    const [sound, setSound] = useState();
    
    
    async function playSound(){
        const {sound} = await Audio.Sound.createAsync(require('../assets/audio1.m4a'));
        setSound(sound);

        await sound.playAsync();
    }

    useEffect(() => {
        return sound 
        ? () => {
            sound.unloadAsync();
        } : undefined;
    }, [sound]); 

    let i = 0;

    const handleFlip = () => {
        Animated.timing(animate.current, {
            duration: 450,
            toValue: flip ? 0 : 180,
            useNativeDriver: true
        }).start(() => {
            setFlip(!flip);
        })
    };

    const interpolateFront = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg' , '180deg'],
    });

    const interpolateBack = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg' , '360deg'],
    });

    const nextCard = () => {
        const wordId = SET.indexOf(word) + 1;
        if (wordId === SET.length) {
            setWord(SET[SET.length - 1]);
        } else {
            setWord(SET[wordId]);
        }
    }

    const prevCard = () => {
        const wordId = SET.indexOf(word) - 1;
        if (wordId === -1) {
            setWord(SET[0]);
        } else {
            setWord(SET[wordId]);
        }
    }


    return (
        <View style={styles.screenContainer}>
            <Animated.View 
            style={[
                {transform: [{rotateY : interpolateFront}]}, 
                styles.hidden]}>
                <TouchableOpacity 
                style={styles.flashcardBack}
                onPress={handleFlip}
                >
                    <Text style={styles.vocabWord}>
                        {word.Tag}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View
            style={[
                {transform: [{rotateY : interpolateBack}]}, 
                styles.hidden,]}>
               <TouchableOpacity 
               style={styles.flashcardFront}
               onPress={handleFlip}
               >
                    <Text style={styles.vocabWord}>
                        {word.Eng}
                    </Text>
                </TouchableOpacity>  
            </Animated.View>

            <View style = {styles.iconView}>
                <TouchableOpacity onPress={prevCard}>
                    <AntDesign name="leftcircle" size={40} color="#FF5607" />
                </TouchableOpacity>
                <TouchableOpacity onPress={playSound}>
                    <AntDesign name="sound" size={40} color="#FF5607"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={nextCard}>
                    <AntDesign name="rightcircle" size={40} color="#FF5607" />  
                </TouchableOpacity>
            </View>    
        </View>
    );
};