import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface RouteParams{
    id:number,
    nombre:string
}

interface Props extends StackScreenProps<any, any>{}

export const PersonaScreen = ({route, navigation}:Props) => {

    const params = route.params as RouteParams

    const {changeUserName, authState} = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title:params.nombre
        })
    }, [])

    useEffect(() => {
        if(authState.isLoggedIn){
            changeUserName(params.nombre)
        }
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
