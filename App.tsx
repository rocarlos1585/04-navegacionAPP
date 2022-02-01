
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {


  return (
    
    <NavigationContainer>
      <AppState>
        <MenuLateral/>
      </AppState>
      
    </NavigationContainer>

    
  );
};

const AppState = ({children}:{children:JSX.Element}) =>{  //se puede tipar el elemento que recibe, en este caso children es del tipo JSX element
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
