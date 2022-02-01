import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const {signIn, authState} = useContext(AuthContext);


    return (
        <View>
            <Text>Contacts Screen</Text>
            {   authState.isLoggedIn ?
                (null)
                :
                (
                    <TouchableOpacity style={styles.buttonLogin} onPress={signIn}>
                        <Text style={styles.textButton}>Sign in</Text>
                    </TouchableOpacity>  
                )

            }

        </View>
    )
}

const styles = StyleSheet.create({
    buttonLogin:{
        backgroundColor:'blue',
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5,
        borderRadius:10
    },

    textButton:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})
