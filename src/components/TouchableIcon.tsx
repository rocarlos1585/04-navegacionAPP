import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface touchableIconProps{
    iconName:string,

    
}

export const TouchableIcon = ({iconName}:touchableIconProps) => {
  return(
      <TouchableOpacity onPress={() => console.log(iconName)}>
          <Icon name={iconName} size={80} color='blue'/>
      </TouchableOpacity>
  );
};
