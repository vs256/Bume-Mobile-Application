import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import DetailsScreen from '../screens/DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const DetailsStack = createStackNavigator<RootStackParamList>();


export default function DetailsStackScreen({ navigation }: any) {
  return (
    <DetailsStack.Navigator screenOptions={{ headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle:
    {
      fontWeight: 'bold'
    }
    }}>
      
      <DetailsStack.Screen name="Root" component={DetailsScreen} options={{
        title: 'Details',
         headerLeft: () => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor ='#009387' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
        }} />
    </DetailsStack.Navigator>
  );
}