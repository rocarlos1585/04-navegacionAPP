import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';

import { StackNavigator } from './StackNavigator';
import { Platform, Text } from 'react-native';

import { TopTab } from './TopTab';




export const Tabs = () => {
    return Platform.OS === 'ios' ? (<TabsIOS/>) : (<TabsAndroid/>)
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{

        }}

        screenOptions={({route})=>({
            tabBarActiveTintColor:'red',
            headerShown:false,
            tabBarLabelStyle:{
                fontSize:13
            },
            tabBarIcon:({color, focused})=>{
                

                let iconName:string=''

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName='home'
                        break;
                
                    case 'TopTab':
                        iconName='apps'
                        break;

                    case 'StackNavigator':
                        iconName='calendar'
                        break;

                    case 'AboutUs':
                        iconName='person'
                        break;
                }

                return <Text style={{color: color}}> <Icon name={iconName} size={20} color={color} /> </Text>
            },
            tabBarStyle:{
                borderTopColor:'red',
                borderTopWidth:0,
                elevation:0,
            },
            
        })}
    
    
    >
      {/* <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTab" options={{title:'Top Tab'}} component={TopTab} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
      <BottomTabAndroid.Screen name="AboutUs" options={{title:'About Us'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}









const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
      //la opcion headerShown en la version actual de react navigation que estoy usando viene por default en true, la pongo en false para que no intervenga con el header del drawer
    <BottomTabIOS.Navigator 
        sceneContainerStyle={{
             backgroundColor:'white'
        }}

        
        
        screenOptions={({route})=>({
            tabBarActiveTintColor:'red',
            headerShown:false,
            tabBarLabelStyle:{
                fontSize:13
            },
            tabBarIcon:({color, focused, size})=>{
                console.log("RUTA: ", route.name)

                let iconName:string=''

                switch (route.name) {
                    case 'Tab1Screen':
                        iconName='T1'
                        break;
                
                    case 'TopTab':
                        iconName='Tt'
                        break;

                    case 'StackNavigator':
                        iconName='St'
                        break;
                }

                return <Text style={{color: color}}>{iconName}</Text>
            },
            tabBarStyle:{
                borderTopColor:'red',
                borderTopWidth:0,
                elevation:0,
            },
            
        })}


    >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTab" options={{title:'Top Tab'}} component={TopTab} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}