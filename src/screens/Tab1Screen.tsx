import React from 'react'
import { Text, View } from 'react-native';
import { TouchableIcon } from '../components/TouchableIcon';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
    return (
        <View style={styles.globalMargin}>
            <TouchableIcon iconName='leaf-outline'/>
            <TouchableIcon iconName='paw'/>
            <TouchableIcon iconName='camera-outline'/>
            <TouchableIcon iconName='airplane-outline'/>
            <TouchableIcon iconName='images-outline'/>
            <TouchableIcon iconName='attach-outline'/>

        </View>
    )
}
