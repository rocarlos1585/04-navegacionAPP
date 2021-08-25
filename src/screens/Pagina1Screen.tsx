import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = (props:Props) => {

    console.log(props)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1 screen</Text>
            <Button
                title='ir pagina 2'
                onPress={ () => props.navigation.navigate('Pagina2Screen')}
            />

            <Text>Navegar con argumentos</Text>

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    onPress={ () => props.navigation.navigate('personaScreen', {
                        id:1,
                        nombre:'pedro'
                    })}

                    style={{
                        ...styles.botonGrande,
                        backgroundColor:'#5856D6'
                    }}
                >
                    <Text style={styles.botonGrandeText}>Pedro</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={ () => props.navigation.navigate('personaScreen', {
                        id:2,
                        nombre:'Maria'
                    })}
                    
                    style={{
                        ...styles.botonGrande,
                        backgroundColor:'#FF9427'
                    }}
                >
                    <Text style={styles.botonGrandeText}>Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
