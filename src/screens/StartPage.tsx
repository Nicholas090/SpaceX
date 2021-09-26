import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {ImageBackground, ImageComponent, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../navigations/AppNavigation";
import Loading from "../loading/Loading";
import { IStartPageState } from "../types";




    type Props = NativeStackScreenProps<RootStackParamList, 'HelloPage'>

    export  class StartPage extends React.Component<Props> {

        onPressStart = () => {
          this.props.navigation.navigate('HomeScreen')
      }

       image = require('../../assets/photos/SpaceX-NASA-Launch-04.jpg');

      // if () {
      //     return (
      //    <Loading/>
      //   );       
      // } 
     render() {
         
    return (
        <View style={Styles.container}>
          
           <ImageBackground  source={this.image} style={Styles.image} >
               
                <View style={Styles.buttonContainer}>
                   <TouchableOpacity style={Styles.wrap} onPress={this.onPressStart} >
                       <Text style={Styles.start}>Get started</Text>
                   </TouchableOpacity>
                </View>
                
            </ImageBackground>
          
        </View>
        )
     }
  };

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
                   