import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { StartPage } from '../screens/StartPage';
import { InfoScreen } from '../screens/InfoScreen';
import { CapsulesScreen} from '../screens/CapsulesScreen';
import { RocketScreen } from '../screens/RocketScreen';


export type RootStackParamList = {
  HomeScreen: undefined,
  HelloPage: undefined,
  InfoScreen: undefined,
  CapsulesScreen: undefined,
  RocketScreen: undefined
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HelloPage">
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: 'Главная страница',
              headerTitleAlign: 'center',
              }}/>
            <Stack.Screen 
            name="HelloPage"
            component={StartPage}
            options={{
              title: "Страница приветсвия",
              headerTitleAlign: 'center',
            }}/>
            <Stack.Screen 
            name="InfoScreen"
            component={InfoScreen}
            options={{
              title: "Инфо страница",
              headerTitleAlign: 'center',
            }}/>
            <Stack.Screen 
            name="CapsulesScreen"
            component={CapsulesScreen}
            options={{
              title: "Страница с капсулами",
              headerTitleAlign: 'center',
            }}/>
            <Stack.Screen 
            name="RocketScreen"
            component={RocketScreen}
            options={{
              title: "Cтраница c ракетами",
              headerTitleAlign: 'center',
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}
