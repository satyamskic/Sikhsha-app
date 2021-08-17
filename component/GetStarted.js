// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity, Alert, Button,} from 'react-native';


const GetStarted = ({navigation}) => {
    return(
	     
	     <View style={styles.container}>
          <ImageBackground source={require('./assets/getstarted.jpg')} resizeMode="cover" style={styles.image}>
          <View style={styles.bottom}> 
             <TouchableOpacity
                  style={styles.buttons}
                  onPress={()=> navigation.navigate(SignInScreen)} >
                  <Text style={styles.buttonText} >Get Started</Text>
              </TouchableOpacity>
           </View>
         </ImageBackground>
       </View>
	   
	);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    
  },
  bottom: {
  flex: 1,
  justifyContent: 'flex-end',

},
  buttons: {
      flex: 1,
        backgroundColor: '#008080',
        width: '75%',
        padding: 10,
        borderRadius: 8,
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default GetStarted;