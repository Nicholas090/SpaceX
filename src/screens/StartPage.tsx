import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../navigations/AppNavigation";





    type Props = NativeStackScreenProps<RootStackParamList, 'HelloPage'>

    export const StartPage:React.FC<Props> = ({ navigation }) =>  {

       const onPressStart = () => {
         navigation.navigate('HomeScreen')
      }

      const image = require('../../assets/photos/SpaceX-NASA-Launch-04.jpg');

      // if () {
      //     return (
      //    <Loading/>
      //   );       
      // } 
     
      
         
    return (
        <View style={Styles.container}>
          
           <ImageBackground  source={image} style={Styles.image} >
               
                <View style={Styles.buttonContainer}>
                   <TouchableOpacity style={Styles.wrap} onPress={onPressStart} >
                       <Text style={Styles.start}>Get started</Text>
                   </TouchableOpacity>
                </View>
                
            </ImageBackground>
          
        </View>
        )
     }
  

  const Styles = StyleSheet.create({
    container: {
      overflow: 'hidden'
      },
    buttonContainer:{
        alignItems: 'center',
        top: '70%'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    start: {
      fontFamily: 'ProximaBold',
        fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    },
    wrap: {
        backgroundColor: "#000000",
        padding: 20,
        borderRadius: 30,
        shadowOpacity: 5,
        opacity: 0.8
    }
  });
                   