import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            }}
            >
                <StatusBar 
            barStyle="light-content" 
            backgroundColor="#1e42a0" 
            translucent={false}
          />
           <Photo/>
        
           <View
              style= {{
                width: 300,
                 backgroundColor: '#1e42a0',
                 paddingTop: 6,
                 paddingBottom: 6,
                 borderRadius: 5,

            }}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style= {{
                 fontSize: 14,
                 fontweight: '600',
                 color: 'white',
                 textAlign:  'center'
                 }}>
                 Login Ustadz/Muhafidz
            </Text>
            </TouchableOpacity>
           </View>
           <View
              style= {{
                width: 300,
                 backgroundColor: '#1e42a0',
                 paddingTop: 6,
                 paddingBottom: 6,
                 borderRadius: 5,
                 margin: 10

            }}>
          <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
            <Text style= {{
                 fontSize: 14,
                 fontweight: '600',
                 color: 'white',
                 textAlign:  'center'
                 }}>
                 Login Wali Santri
            </Text>
            </TouchableOpacity>
           </View>
        </View>
        
    )
}

const Photo = () => {
    return (
        <View style={{
            alignItems:'center',
            }}
            >
           <Image source={{uri :'https://app.darulfithrah.com/images/logo.png'}}
           style={styles.Photo}
           />
        </View>
        
    )
        
    }
    

    const styles = StyleSheet.create({
       text : {
        fontSize : 15,
        fontWight: 'bold',
        textAlign: 'center',
      
       },
       Photo : {
        width : 150,
        height: 56,
        margin: 20,
        alignItems:'center'
       },
      
       buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
       },
    }) 

    export default Login