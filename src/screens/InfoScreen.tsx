import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import GetService from '../API/api';
import { AnimationLoading } from '../components/Animation';
import { TextAPI } from '../components/TextAPI';

export const InfoScreen: React.FC = () => {
  const [state, setstate] = useState({
    name: '',
    founder: '',
    founded: '' as any,
    employees: null as any,
    vehicles: null as any,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const GetServiceHome = new GetService();

  const UpdateInfo = () => {
    setLoading(true);
    GetServiceHome.getCompanyInfo()
      .then((info) => {
        setstate(info);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/photos/SpaceX_Info.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <View style={Styles.wrapTop}>
          <Text style={Styles.topText}>Информация про компанию SpaceX</Text>
        </View>
        <View style={Styles.table}>
          <TextAPI state={state} type={'info'} />
          <View style={Styles.buttonWrap}>
            <Pressable style={Styles.buttonOpacity} onPress={UpdateInfo}>
              <Text style={Styles.buttonText}>Обновить информацию про компанию</Text>
            </Pressable>
          </View>
        </View>
        <AnimationLoading state={loading} />
      </ImageBackground>
    </View>
  );
};

const Styles = StyleSheet.create({
  topText: {
    fontFamily: 'ProximaBold',
    fontSize: 20,
    fontWeight: '700',
    color: '#030303',
  },
  wrapTop: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
  },
  table: {
    marginTop: 30,
    display: 'flex',
  },
  tableText: {
    fontFamily: 'ProximaBold',
    marginTop: 20,
    fontSize: 20,
    marginLeft: 10,
  },
  buttonWrap: {
    // display: 'flex',
    // textAlign: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonOpacity: {
    backgroundColor: '#0044d6',
    padding: 15,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: 'ProximaThin',
    fontSize: 17,
    color: '#ffff',
    fontWeight: '800',
    fontStyle: 'italic',
  },
});
