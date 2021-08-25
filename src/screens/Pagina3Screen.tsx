import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{}


// a diferencia de la pagina 1 aqui estoy desestructurando los props para solamente usar el navigation
export const Pagina3Screen = ({navigation}:Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 3 screen</Text>
            <Button
                title='regresar'
                onPress={() => navigation.pop()}
            />

            <Button
                title='home'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
