import React from 'react';
import {  StyleSheet, Text,  View, TextInput, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../Drawer/DrawerContent';

const Drawer = createDrawerNavigator();
function MyHomeScreen() {
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen  name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>I am at drawer home</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
   
  
    container: {
      flex: 1,
      backgroundColor: '#1F7872'
    },
    header: {
      flex: 0.1,
      marginTop: "8%",
      marginLeft: "8%",
      
    },
    separator: {
      marginVertical: 8,
      opacity: 0,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingVertical: 50,
      paddingHorizontal: 30
    },
     
    logo: {
      width: '14%',
      height: 50,
    },
    title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
    },
    text: {
      color: 'black',
       fontWeight: 'bold'
    },
    button: {
      alignItems: 'flex-end',
      marginTop: 30,
    },
    signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
    },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
    },
    welcome: {
      color: "white",
      opacity: 0.3,
    },
    singin: {
      fontWeight: 'bold',
      fontSize: 28,
      color: 'white',
      
    },
    input: {
      borderBottomWidth: 0.2,
      fontWeight: 'bold',
      borderColor: '#E0E0E0',
      opacity: 0.9,
    },
    buttons: {
          backgroundColor: '#008080',
          width: '75%',
          padding: 10,
          borderRadius: 8,
          position: 'absolute',
          alignSelf: 'center',
          
      },
      buttonText: {
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
      },
      forgot: {
        color: 'grey',
          fontSize: 18,
          textAlign: 'center',
          fontSize: 12,
      }
  });
export default MyHomeScreen;