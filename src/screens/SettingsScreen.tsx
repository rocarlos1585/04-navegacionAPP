import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';


export const SettingsScreen = () => {

    //Probar este hook para ver si funciona en ios o si ios tambien inserta el header que viene con el drawer
    const insets = useSafeAreaInsets();

    const {authState} = useContext(AuthContext);

    

    return (
        //en IOS no es necesario utilizar el hook insets ya que el header del drawer luce bien
        <View /*style={{marginTop:insets.top}}*/>
            <Text>Settings screen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
             <Icon name={authState.favoriteIcon} size={80} color='blue'/>
        </View>
    )
}
