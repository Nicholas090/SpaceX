import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ImageBackground } from 'react-native';
import GetService from '../API/api';
import { AnimationLoading } from '../components/Animation';
import { TextAPI } from '../components/TextAPI';
import { GetRocketsInterface } from '../types';

export const RocketScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [rockets, setRockets] = useState({
    stages: null as any,
    boosters: null as any,
    cost_per_launch: null as any,
    success_rate_pct: null as any,
    first_flight: '',
    country: '',
    company: '',
    wikipedia: '',
    rocket_name: '',
  });

  const GetServiceHome = new GetService();

  function chooseRandom(arr: GetRocketsInterface[]) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  const UpdateRandomRocket = () => {
    setLoading(true);

    GetServiceHome.getAllRockets()
      .then((info) => {
        setRockets(chooseRandom(info));
      })
      .finally(() => setLoading(false));
  };

  const url = require('../../assets/photos/Crew_Dragon_at_the_ISS_for_Demo_Mission_1_(cropped).jpg');
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: '#070303' }}>
      <View style={Styles.wrapTop}>
        <Text style={Styles.topText}>Информация про Ракеты</Text>
      </View>
      <View style={Styles.table}>
        <TextAPI state={rockets} type={'rocket'} />
        <View style={Styles.buttonWrap}>
          <Pressable style={Styles.buttonOpacity} onPress={UpdateRandomRocket}>
            <Text style={Styles.buttonText}>Получить информацию про ракету</Text>
          </Pressable>
        </View>
      </View>
      <AnimationLoading state={loading} />

      <View style={{ height: 350, width: '100%', position: 'absolute', bottom: 0, zIndex: -1 }}>
        <Image source={url} style={{ width: '100%', height: '100%' }} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  topText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
  },
  wrapTop: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
    backgroundColor: '#001fce9c',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
  },
  table: {
    marginTop: 30,
    // marginLeft: 20,
    // backgroundColor: 'blue',
  },
  tableText: {
    fontFamily: 'ProximaBold',
    marginTop: 20,
    fontSize: 20,
    color: '#ffff',
    backgroundColor: '#000000',
  },
  buttonWrap: {
    alignItems: 'center',
    marginTop: 50,
    alignContent: 'center',
  },
  buttonOpacity: {
    backgroundColor: '#0044d68a',
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

//
