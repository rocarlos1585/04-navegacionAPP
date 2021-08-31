import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsScreen = () => {

    //Probar este hook para ver si funciona en ios o si ios tambien inserta el header que viene con el drawer
    const insets = useSafeAreaInsets();


    return (
        <View style={{marginTop:insets.top}}>
            <Text>Settings screen</Text>
        </View>
    )
}
