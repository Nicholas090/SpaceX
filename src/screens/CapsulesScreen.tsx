import  React, {useState} from 'react';
import { View , StyleSheet, Text, Image, Pressable} from 'react-native';
import GetService from "../API/api";
import {  TextAPI } from '../components/TextAPI';
import { GetCapsulesInterface } from '../types';

  export const CapsulesScreen:React.FC = () => {

    const [state, setState] = useState({
        capsule_serial: '' ,
        capsule_id: '',
        status: '',
        original_launch: '',
        details: ''
    });

    const GetServiceHome = new GetService;

    function chooseRandom(arr: GetCapsulesInterface[]){
        const rand = Math.floor(Math.random() * arr.length);
        return arr[rand]

    }

    const UpdateRandomCapsules = () => {
       GetServiceHome.getAllCapusles().
              then((info) => {
                  setState(chooseRandom(info))
              })
            }


    const url = require('../../assets/photos/Crew_Dragon_at_the_ISS_for_Demo_Mission_1_(cropped).jpg')
    return (
            <View style={{ height: '100%', width: '100%', backgroundColor: '#070303'}}>         
                <View style={Styles.wrapTop}>
                    <Text style={Styles.topText}>Информация про  Капсулы</Text>
                </View>
            <View style={Styles.table}>
                <TextAPI state={state as GetCapsulesInterface} type={'capsule'} />
                 <View style={Styles.buttonWrap}>
                    <Pressable style={Styles.buttonOpacity} onPress={UpdateRandomCapsules} >
                        <Text style={Styles.buttonText}>Получить информацию про рандомную капсулу</Text>
                    </Pressable>
                 </View>
            </View>
                <View style={{ height: 350, width: '100%', position: 'absolute', bottom: 0, zIndex: -1}}>
                    <Image source={url}  style={{width: '100%', height: '100%', }}/>
                </View>
            
        </View>
       
    )
}

const Styles = StyleSheet.create({
    topText: {
        fontSize: 17,
        fontWeight: '700',
        color: '#ffffff'
    },
    wrapTop: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10%',
        // backgroundColor: '#001fced6',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 30
    },
    table: {
        marginTop: 30,
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: 20
    },
    tableText: {
        fontFamily: 'ProximaBold',
        marginTop: 20,
        fontSize: 20,
        color: '#ffff',
        backgroundColor: '#000000'
    },
    buttonWrap: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50
    },
    buttonOpacity: {
        backgroundColor: '#0044d647',
        padding: 15,
        borderRadius: 30,
    },
    buttonText: {
        fontFamily: 'ProximaThin',
        fontSize: 17,
        color: '#ffff',
        fontWeight: 'bold',
    
    }
});


