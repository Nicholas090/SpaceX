import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View , Pressable} from "react-native";
import GetService from "../API/api";
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from "../navigations/AppNavigation";


  type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

    export  const HomeScreen: React.FC<Props> = ({ navigation }) => {

     const onPressInfo = () => {
        navigation.navigate('InfoScreen')
      } 
     const onPressCapsules = () => {
        navigation.navigate('CapsulesScreen')
      }
      const onPressRockets = () => {
        navigation.navigate('RocketScreen')
      }

    return (
      <View style={Styles.wrap}>    
        <LinearGradient colors={['rgba(8, 8, 5, 0.829)', 'transparent']} style={Styles.gradient}>      
        <View style={Styles.buttonsContainer}> 
         <View style={Styles.infoContainer}>
          <Pressable style={Styles.infoWrap} onPress={onPressInfo}>
            <Text style={Styles.infoButton}>Информация о компании</Text>          
          </Pressable>
         </View>
          <View style={Styles.capsuleContainer}>
            <Pressable style={Styles.capsuleWrap} onPress={onPressCapsules}>  
            <Text style={Styles.capsuleButton}>Информация о капсулах</Text>           
            </Pressable>
          </View>
          <View style={Styles.rocketContainer}>
            <Pressable style={Styles.rocketWrap} onPress={onPressRockets}>  
            <Text style={Styles.rocketButton}>Информация о ракетах</Text>           
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
    capsuleWrap: {
      backgroundColor: "#21365edc",
      padding: 20,
      borderRadius: 30,
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
      backgroundColor: "#225dcadc",
      padding: 20,
      borderRadius: 30,
    }
  });
  