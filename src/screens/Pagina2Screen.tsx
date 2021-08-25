
import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    //react-navigation ofrece este hook para cuando no se usan los props como en la pagina1, pero por alguna razon typescript marca un error cuando lo usas
    //este error no afecta al funcionmiento de la aplicacion
    
    const navigator = useNavigation<any>() //se soluciona el <any>

    useEffect(() => {
        navigator.setOptions({
            title:'hola',
            headerBackTitle:'Back'
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 screen</Text>

            <Button
                title='ir pagina 3'
                onPress={() => navigator.navigate("Pagina3Screen")}
            />
        </View>
    )
}
