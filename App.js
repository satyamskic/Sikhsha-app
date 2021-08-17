import * as React from 'react';
import GetStarted from './component/GetStarted.js';
import SignInScreen from './component/SignInScreen.js';
import HomeScreen from './component/HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted" >
        <Stack.Screen options={{ headerShown: false }} name="GetStarted" component={GetStarted} />
        <Stack.Screen options={{ headerShown: false }} name="SignInScreen" component={SignInScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


