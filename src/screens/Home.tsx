import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GetService from "../API/api";
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from "../navigations/AppNavigation";


  type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

    export  const HomeScreen: React.FC<Props> = ({ navigation }) => {

    //     const [state, setstate] = useState({   
    //         name: '',
    //         founder:  '',
    //         founded: null as any,
    //         employees:  null as any
    //     });

    //     const [capsules, setCapsules] = useState({
    //         capsule_serial: '' ,
    //         capsule_id: '',
    //         status: '',
    //         original_launch: '',
    //         details: ''
    //     });

    //     const GetServiceHome = new GetService;

    //     const UpdateInfo = () => {

    //     const  GetInfo  = GetServiceHome.getCompanyInfo().
    //             then((info) => {
    //                 console.log(info)
    //                 setstate(info)
    //             })
        
    // } 

    // const UpdateCapsules = () => {
    //     const GetCapusles = GetServiceHome.getOneCapsule('C112').
    //           then((info) => {
    //               console.log(info)
    //               setCapsules(info)
    //           })

    //     }

    // return (
    //   <View style={Styles.background}>
    //       <Button title="Инфо" onPress={UpdateInfo} />
    //     <Text>{state.name}</Text>
    //     <Text>{state.founded}</Text>
    //     <Text>{state.founder}</Text>
    //     <Text>{state.employees}</Text>
    //     <Button title="Капсулы" onPress={UpdateCapsules} />
    //     <Text>{capsules.capsule_serial}</Text>
    //     <Text>{capsules.capsule_id}</Text>
    //     <Text>{capsules.status}</Text>
    //     <Text>{capsules.original_launch}</Text>
    //     <Text>{capsules.details}</Text>
    //   </View>
    // );
      

     const onPressInfo = () => {
        navigation.navigate('InfoScreen')
      } 
     const onPressCapsules = () => {
        navigation.navigate('CapsulesScreen')
      }

    return (
      <View style={Styles.wrap}>    
        <LinearGradient colors={['rgba(8, 8, 5, 0.829)', 'transparent']} style={Styles.gradient}>      
        <View style={Styles.buttonsContainer}> 
         <View style={Styles.infoContainer}>
          <TouchableOpacity style={Styles.infoWrap} onPress={onPressInfo}>
            <Text style={Styles.infoButton}>Информация о компании</Text>          
          </TouchableOpacity>
         </View>
          <View style={Styles.capsuleContainer}>
            <TouchableOpacity style={Styles.capsuleWrap} onPress={onPressCapsules}>  
            <Text style={Styles.capsuleButton}>Информация о капсулах</Text>           
            </TouchableOpacity>
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
      fontSize: 17,
      color: '#fff',
      textAlign: 'center'
    },
    capsuleButton: {
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
    }
  });
  