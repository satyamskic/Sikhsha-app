import React from 'react';
import { Image, Dimensions, TouchableOpacity, SafeAreaView,Button, ScrollView, StatusBar, StyleSheet, Text, Alert, useColorScheme, View, TextInput } from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);


const SignInScreen = () => {
  return (
    
    <View style={styles.container}>
        <View style={styles.header}>
              <Image source={require('./assets/logo.png')}  style={styles.logo} />  
          <Separator/>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.singin}>Sing In</Text>
        </View>
       

      <View style={styles.footer}>

        <View>
          <View>
            <Text style={styles.text}>Admission No</Text>
            <TextInput style={styles.input}  />
          </View>
          <Separator/>
          <Separator/>
          <View>
            <Text style={styles.text}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>
        </View>
          <Separator/>
          <Separator/>
        <View>
          <TouchableOpacity onPress={()=> Alert.alert("change password")}>
            <Text style={styles.forgot}>Forget Password?</Text>
          </TouchableOpacity>
          <Separator/>
          <View>
            
            <TouchableOpacity
                  style={styles.buttons}
                  onPress={()=> Alert.alert("Sign in screen")} >
                  <Text style={styles.buttonText} >Sign In</Text>
              </TouchableOpacity>
          </View>
          <Separator />
        </View>
      </View>
	   
    </View>
  );
};


const { height } = Dimensions.get("screen");
const height_logo = height * 28;

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
    flex: 0.8,
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
/*
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
*/
export default SignInScreen;
