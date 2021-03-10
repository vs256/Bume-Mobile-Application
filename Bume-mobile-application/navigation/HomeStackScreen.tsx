import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const HomeStack = createStackNavigator<RootStackParamList>();

export default function HomeStackScreen({ navigation }: any) {
  return (
    <HomeStack.Navigator screenOptions={{ headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle:
    {
      fontWeight: 'bold'
    }
    }}>
      <HomeStack.Screen name="Root" component={HomeScreen} options ={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor ='#009387' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }} />
      
    </HomeStack.Navigator>
  );
}