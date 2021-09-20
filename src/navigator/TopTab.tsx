import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {

    const {top} = useSafeAreaInsets() //este hook nomas es para agregar padding si en IOS aparece encimado el navigator
  return (
    <Tab.Navigator
        style={{
            paddingTop:top
        }}

        sceneContainerStyle={{
            backgroundColor:'white',
        }}
        
        screenOptions={({route})=>({
            tabBarPressColor:'blue',
            tabBarShowIcon:true,
            tabBarIndicatorStyle:{
                backgroundColor:'red'
            },
            //con esta parte eliminas el borde inferior en los tabs
            tabBarStyle:{
                borderTopColor:'red',
                borderTopWidth:0,
                elevation:0,
            },

            tabBarIcon:({color, focused})=>{
                console.log("RUTA: ", route.name)

                let iconName:string=''

                switch (route.name) {
                    case 'Chat':
                        iconName='Ch'
                        break;
                
                    case 'Contacts':
                        iconName='Ct'
                        break;

                    case 'Albums':
                        iconName='Ab'
                        break;
                }

                return <Text style={{color: color}}>{iconName}</Text>
            },
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}
