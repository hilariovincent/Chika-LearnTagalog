import React,{isValidElement,useState} from 'react';
import {View,Button,Modal,Image, Text,StyleSheet, Switch,TouchableOpacity,Pressable,colors} from 'react-native';
//where the icons are from linked here: https://docs.expo.dev/guides/icons/
import { styles,StyledText} from '../styles';
import * as ImagePicker from 'expo-image-picker';
import SwitchSelector from 'react-native-switch-selector';
import imagesOn from '../assets/pika.png';
import imagesOff from '../assets/favicon.png';
{/* Home Screen */}
export function HomeScreen() {

    const[modalVisible, setModalVisible] = useState(false);
    const[image,setImage] = useState(null);

    const handlePickAvatar = async() =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect:[4,3],
            quality:1,
        });

        if(!result.cancelled){
            setImage(result.uri);
        }

    }

    let[flag, setFlag] = React.useState(true);
    let toggleSwitch = () => setFlag(previousState => !previousState);
    let imageUri = flag ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///9dxOUwJygfEhMnHR51cXGtq6stJCXT0tIXAgY7MzMAAAD19fUMAAAaCQsiFhc2Li5mYWKcmZktFQ4tGBRUpL5OkamJhoXHxsUmGx1/e3ssEQguGxlYtNFIgJMTAADg3+BaVVVOR0g2PkPr6+uopqZQmrNBOju5t7eRjo/Y19dYUlNrZmdFdIbs7Ox7d3dgz/I0NTm5G9qUAAADG0lEQVR4nO3de1faMBiA8fJSCBBavG1cxlZEkJub+v2/3EA9s4FkViAHUp/fv4Y0jx5rLRCiCAAAAAAAAAAAAAAAAABetE+9AN9m+urUS/DrsiNJ/dSL8GmRiojunXoZ/swT2UiWp16IL8vXQFHp5NRL8aPdV9IXacWipJxn1HEs6bSjZg0t8ezUi/FhnkkyXzZVa/Pr2CzjCXWk9SJqbAqjK61LebKZNKK3wmhZ0lNN9K+wxCgMH4XhozB8FIaPwvBRGD4Kw0dh+L5YYePWaeTp+O3aynHE1ZHujRmFrX7sUH04zuF2TDPXIWN9nHu4RuGFkuGNxVDiy6McbddVR+LURiTxUjj8dW/xe+ixMH5o9CxST4XX354qO56+33gs7HetX0i8Fe4GVioUHoDCw1FI4aEoPByFFB6KwsNRSOGhgi78M3HIrzzkwoHO7JL8ayFDLtTi0n98HxV44c21xVD6g/dRYRf++GmZ6+nXsOSFFQrfUFgYhRS6UfiKwsNRSKEbha/Os7A3dRmVo7Chqy75p94DLqxXRfVtRLJRSQrVrDvY1Y3LUxjXrHOlJSq0v7qGQgoNFBZGIYV5FFJooLAwCinMo5BCA4WFUUhhHoUUGigsjEIK8yik0EBhYRRSmEchhQYKC6OQwjwKKTRQWBiFFOZRSKGBwsIopDCPQgoNFBa2uyOdxf2+r2S3TbZTuLBO5qtQPd9ZPKut91tcjG3UVqGyzXX3vPV+fNVyTOajUJQoK9kqtA8TSYxC1yhzTwXXIcXH3pc1bd2Gci3/4WxL56hmNTfzKnFOltuZtOecLDvSzrHmHrS2TShfNPKPmTiHGd915yjjQ3tGzmHHCfxqu+yesfl43013QynUcTb4eJRNKIXjjlTHe51cQymMLlOJ49EeDwymMFpURWXzzz9uXXhRD8L8dnMVYL/E+3+hKOfbes+L2uwxpRsfN5lG2rlL+bmR/Qqjei0Qg9b6QjeZfjowHPX1NXrz8z/BcHSzPf9ahOIxlX7rOP9Onae2lurq1Ivwa6Dtd04AAAAAAAAAAAAAAAAAoIT+AnSoJFZJqd3oAAAAAElFTkSuQmCC' : 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fpObCJieNZ1SF_aiP06tOih5EccKPerH1wTNQy9KvU54hvTcC2Pld4y7oCtQVe-sTOQ&usqp=CAU'


    return (
        
        <View style={[styles.HomeContainer, { flexDirection: "column", backgroundColor: "white"}]}>
            <View style={styles.rect}></View>
            <View style={{marginTop:40, alignItems: "center" }}>
                   <Text style={[styles.text]}>First Last</Text>
            </View>
            <View style={{marginTop:-25, alignItems: "center" }}>
                   <TouchableOpacity style = {styles.avatarPlaceholder} onPress={handlePickAvatar}>
                    {image && <Image source={{uri: image}} style={styles.avatar} />}
                    </TouchableOpacity>
            </View>
            <View style={{marginTop:15, alignItems: "center" }}>
                <SwitchSelector
                style={{width:250}}
                initial={0}
                textColor={"black"} //'#7a44cf'
                fontSize={23}
                selectedColor={"black"}
                backgroundColor={"#E1E2E6"}
                buttonColor={"#C6C1C1"}
                borderColor={"white"}
                hasPadding
                options={[
                    { label: "Stats", value: "S" }, 
                    { label: "Progress", value: "P" }
                ]}
                onPress={ () => toggleSwitch()}
                />
            </View>
            <View style={{marginTop:40, alignItems: "center" }}>
            <View style={styles.rect2}>
                <Image source={{uri: imageUri}} style={{width:350, height:350}}/>
            </View>
            </View>

        </View>
    );
  }
  
  