import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { StartPage } from '../screens/StartPage';
import { InfoScreen } from '../screens/InfoScreen';
import { CapsulesScreen} from '../screens/CapsulesScreen';


export type RootStackParamList = {
  HomeScreen: undefined,
  HelloPage: undefined,
  InfoScreen: undefined,
  CapsulesScreen: undefined
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HelloPage">
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{title: 'Главная страница'}}/>
            <Stack.Screen 
            name="HelloPage"
            component={StartPage}/>
            <Stack.Screen 
            name="InfoScreen"
            component={InfoScreen}/>
            <Stack.Screen 
            name="CapsulesScreen"
            component={CapsulesScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

