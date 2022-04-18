import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

export default class AppLoader extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <LottieView
          source={require('../../assets/rocket-in-space.json')}
          autoPlay 
          loop={true}
        />
      </View>
    )
  }
}