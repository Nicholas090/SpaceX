import React, { Component, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View , Pressable} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from "../navigations/AppNavigation";
// @ts-ignore
import ParticleEffectButton from 'react-particle-effect-button'


  type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

    export  const HomeScreen: React.FC<Props> = ({ navigation }) => {

      const [state, setState] = useState({hidden: false})

     const onPressInfo = () => {
        navigation.navigate('InfoScreen')
      } 
     const onPressCapsules = () => {
        navigation.navigate('CapsulesScreen')
      }
      const onPressRockets = () => {
        navigation.navigate('RocketScreen')  
        butonAnimation      
      }
      const butonAnimation = () => {
        setState({hidden: true})
      }

    return (
      <View style={Styles.wrap}>    
        <LinearGradient colors={['rgba(8, 8, 5, 0.829)', 'transparent']} style={Styles.gradient}>      
        <View style={Styles.buttonsContainer}> 
         <View style={Styles.infoContainer}>
          <Pressable style={Styles.pressebaleWrap} onPress={onPressInfo}>
            <Text style={Styles.pressebaleText}>Информация о компании</Text>          
          </Pressable>
         </View>
          <View style={Styles.capsuleContainer}>
            <Pressable style={Styles.pressebaleWrap} onPress={onPressCapsules}>  
            <Text style={Styles.pressebaleText}>Информация о капсулах</Text>           
            </Pressable>
          </View>
          <View style={Styles.rocketContainer}>
         <Pressable style={Styles.pressebaleWrap} onPress={onPressRockets}>  
            <Text style={Styles.pressebaleText}>Информация о ракетах</Text>           
          </Pressable>         
          </View>
        </View>
       </LinearGradient>
      </View>

        )
  };

  const Styles = StyleSheet.create({
    gradient: {
      height: '130%'
    },
    wrap: {
      width: '100%',
      height: '100%'
    },
    background: {
      flex: 1,
      backgroundColor: "green",
      top: 111
    },
    infoButton: {
      fontFamily: 'ProximaThin',
      fontSize: 17,
      color: '#fff',
      textAlign: 'center'
    },
    capsuleButton: {
      fontFamily: 'ProximaThin',
      fontSize: 17,
      color: '#fff',
      textAlign: 'center'
    },
    infoWrap: {
      backgroundColor: "#21365edc",
      padding: 20,
      borderRadius: 30,
    },
    pressebaleWrap: {
      backgroundColor: "#0077B5",
      padding: 20,
      borderRadius: 8,
    },
    infoContainer: {
      paddingTop: 40,
      width: '65%',
     
    },
    capsuleContainer: {
      marginTop: 50,
      width: '65%',
    },
    buttonsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    rocketButton: {
      fontFamily: 'ProximaThin',
      fontSize: 17,
      color: '#fff',
      textAlign: 'center'
    },
    rocketContainer: {
      marginTop: 50,
      width: '65%',
    },
    rocketWrap: {
      backgroundColor: "#0077B5",
      padding: 20,
      borderRadius: 8,
      
    },
    pressebaleText: {
      textAlign: 'center',
      color: '#fff' ,
      fontWeight: '500' ,
      fontSize: 18,
      fontFamily: 'ProximaBold'
    }
  });
  