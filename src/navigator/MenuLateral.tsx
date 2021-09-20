import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, useWindowDimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const  MenuLateral = () => {

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerContent={(props)=><ContenidoMenu {...props}/>}
      screenOptions={{
        drawerPosition:'left',
        drawerType:(width >= 760)? ('permanent') : ('front'),
      }}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const ContenidoMenu=(props:any)=>{
  return(
    <DrawerContentScrollView contentContainerStyle={styles.contenidoMenuView}>
      <Image
        style={styles.imageAvatar} 
        source={require('../assets/images/avatarPlaceHolder.gif')}
      />
      
      <TouchableOpacity onPress={()=>props.navigation.navigate('Tabs')} style={styles.buttonOpionMenu}>
        <Text style={styles.textOptionMenu}>Tabs Navigator</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate('SettingsScreen')}  style={styles.buttonOpionMenu}>
        <Text style={styles.textOptionMenu}>Settings screen</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  )
}


const styles = StyleSheet.create({

  contenidoMenuView:{
    alignItems:'center'
  },

  imageAvatar:{
    width:100,
    height:100,
    borderRadius:100
  },

  buttonOpionMenu:{
    marginTop:30,
  },

  textOptionMenu:{
    fontSize:20,
    fontWeight:'bold'
  }

})