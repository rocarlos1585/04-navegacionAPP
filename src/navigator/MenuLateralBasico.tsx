import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
      
      screenOptions={{
        drawerPosition:'left',
        drawerType:(width >= 760)? ('permanent') : ('front'),
        
        
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Stack Navigator'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}