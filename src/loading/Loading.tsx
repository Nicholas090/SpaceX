import React from "react"
import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Loading:React.FC = () => {


    return (
       <AnimatedLoader visible={true}
       overlayColor="rgba(255,255,255,0.75)"
       source={require("./loader.json")}
       animationStyle={styles.lottie}
       speed={1}
     >
       <Text>Wait...</Text>
       </AnimatedLoader>
    )
}

const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100
    }
  });

  export default Loading;