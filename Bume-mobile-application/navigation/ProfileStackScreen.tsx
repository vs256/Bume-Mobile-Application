import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const ProfileStack = createStackNavigator<RootStackParamList>();

export default function ProfileStackScreen({ navigation }: any) {
  return (
    <ProfileStack.Navigator screenOptions={{ headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle:
    {
      fontWeight: 'bold'
    }
    }}>
      
      <ProfileStack.Screen name="Root" component={ProfileScreen} options={{
        title: 'Profile',
         headerLeft: () => (
          <Icon.Button name ='ios-menu' size={25}
          backgroundColor ='#009387' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
        }} />
    </ProfileStack.Navigator>
  );
}