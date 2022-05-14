import AnimatedLoader from 'react-native-animated-loader';
import { StyleSheet } from 'react-native';

interface AnimateProps {
  state: boolean;
}

export const AnimationLoading = ({ state }: AnimateProps) => {
  const url = require('../../assets/animated-fetch.json');
  return (
    <AnimatedLoader
      source={url}
      visible={state}
      overlayColor="rgba(255,255,255,0)"
      animationStyle={Styles.lottie}
      speed={1}></AnimatedLoader>
  );
};

const Styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
});
