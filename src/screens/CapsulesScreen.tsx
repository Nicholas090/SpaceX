import  React, {useState} from 'react';
import { View , StyleSheet, Text, Button, ImageBackground, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GetService from "../API/api";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

  export const CapsulesScreen:React.FC = () => {

        const [state, setstate] = useState({   
            name: '',
            founder:  '',
            founded: null as any,
            employees:  null as any,
            vehicles: null as any
        });

        const [capsules, setCapsules] = useState({
            capsule_serial: '' ,
            capsule_id: '',
            status: '',
            original_launch: '',
            details: ''
        });

        const GetServiceHome = new GetService;

        const UpdateInfo = () => {
        GetServiceHome.getCompanyInfo().
                then((info) => {
                    console.log(info)
                    setstate(info)
                })
        
    } 

    const UpdateCapsules = () => {
       GetServiceHome.getOneCapsule('C112').
              then((info) => {
                  console.log(info)
                  setCapsules(info)
              })

            }

    const { capsule_serial, capsule_id, status, original_launch, details} = capsules

    const url = require('../../assets/photos/Crew_Dragon_at_the_ISS_for_Demo_Mission_1_(cropped).jpg')
    return (
            <View style={{ height: '100%', width: '100%', backgroundColor: '#070303'}}>         
                <View style={Styles.wrapTop}>
                    <Text style={Styles.topText}>Информация про  Капсулы</Text>
                </View>
            <View style={Styles.table}>
                <Text style={Styles.tableText}>Номер капсулы: {capsule_serial}</Text>
                <Text style={Styles.tableText}>Название капсулы: {capsule_id}</Text>
                <Text style={Styles.tableText}>Статус: {status}</Text>
                <Text style={Styles.tableText}>Дата запуска: {original_launch}</Text>
                <Text style={Styles.tableText}>Детали: {details}</Text>
            </View>
                 <View style={Styles.buttonWrap}>
                    <TouchableOpacity style={Styles.buttonOpacity} onPress={UpdateCapsules} >
                        <Text style={Styles.buttonText}>Получить информацию про капсулу</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#001fced6',
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
        backgroundColor: '#0044d6',
        padding: 15,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 17,
        color: '#ffff'
    }
});


