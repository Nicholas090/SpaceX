import  React, {useState} from 'react';
import { View , StyleSheet, Text, Button, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GetService from "../API/api";

  export const InfoScreen:React.FC = () => {

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

             let {name, founder, founded, employees, vehicles} = state
    return (
        <View >
           <ImageBackground source={require('../../assets/photos/SpaceX_Info.jpg')} style={{width: '100%', height: '100%'}}>
           <View style={Styles.wrapTop}>
            <Text style={Styles.topText}>Информация про компанию SpaceX</Text>
            </View>
            <View style={Styles.table}>
                <Text style={Styles.tableText}>Название комрании: {name}</Text>
                <Text style={Styles.tableText}>Создатель комрании: {founder}</Text>
                <Text style={Styles.tableText}>Была создана: {founded}</Text>
                <Text style={Styles.tableText}>Количество работников: {employees}</Text>
                <Text style={Styles.tableText}>Количество ракет: {vehicles}</Text>
            </View>
                <View style={Styles.buttonWrap}>
                    <TouchableOpacity style={Styles.buttonOpacity} onPress={UpdateInfo} >
                        <Text style={Styles.buttonText}>Обновить информацию про компанию</Text>
                    </TouchableOpacity>
                </View>
           </ImageBackground>
        </View>
    )
}

const Styles = StyleSheet.create({
    topText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#030303'
    },
    wrapTop: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10%'
    },
    table: {
        marginTop: 30,
        display: 'flex',
        alignItems: 'flex-start',
    },
    tableText: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 10
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


