import React from 'react';
import Navigation from './src/navigations/AppNavigation';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// export default function App() {
//   return (
//     <Navigation />
//   )
// }

interface IPropsApp {
  
}

interface IStateApp {
  appIsReady: boolean
}


export default class App extends React.Component {

  constructor(props: IPropsApp) {
    super(props);
    
  }
    state: IStateApp = {
      appIsReady: false,
    };

  
  _loadResourcesAsync = async () => {
    return  Promise.all([
     await Asset.loadAsync([
        require("./assets/photos/SpaceX_Info.jpg"),
        require("./assets/photos/SpaceX-NASA-Launch-04.jpg"),
        require("./assets/photos/SpaceX_Crew_Dragon_(More_cropped).jpg"),
        require("./assets/photos/Crew_Dragon_at_the_ISS_for_Demo_Mission_1_(cropped).jpg"),

      ]),
      await Font.loadAsync({
        // Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        'ProximaRegular': require("./assets/fonts/ProximaNova-Regular.otf"),
        'ProximaBold': require("./assets/fonts/ProximaNovaBold.otf"),
        'ProximaThin': require("./assets/fonts/ProximaNovaAltThin.otf"),
      }),
    ]);
  };
  
  componentDidMount() {
    this._loadResourcesAsync();
  }

  _handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ appIsReady: true });
  };


  render(){
    if (this.state.appIsReady) {
      return (

            <Navigation/>
        
      );
    } else {
      return (
        <AppLoading
          // @ts-ignore
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }
  }
}

