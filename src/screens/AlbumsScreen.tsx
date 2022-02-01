import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

    const {logOut, authState} = useContext(AuthContext);

    return (
        <View>
            <Text>Albums Screen</Text>

            {   authState.isLoggedIn && (
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => logOut()}>
                        <Text style={styles.textButton}>Log Out</Text>
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

