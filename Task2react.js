import React from 'react';
import { SafeAreaView, StyleSheet,Text,View,Image } from "react-native";
"react-native";
export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.image}>
            <Image style={{width:400, height:300 }} source={require('../assets/intros.png')} image/>
        </View>
        <View >
           <Text style={styles.content}>Discover Your {'\n'} Own Dream House</Text>
            <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. {'\n'}  Diam maecenas mi non sed ut odio. Non,justo,sed facilisi {'\n'} et.Eget viverra urna, vestibulum egestas faucibus {'\n'} egesta. Sagittis nam velit volutat eu nunc.</Text>
        </View>
        <View style={styles.button}>
            <Text style={styles.signin}> Sign in</Text>
            <Text style={styles.register}>Register</Text>
        </View>    
    </SafeAreaView>    
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    image:{

        marginTop:10,
        borderRadius:50,
        padding:10,
        margin:100,
    },
    content:{
        marginTop:0,
        fontWeight:'bold',
        fontSize:40,
        justifyContent:"center",
        textAlign:"center"
    },
    lorem:{
      padding:19,
      lineHeight:20,
      justifyContent:'center',
      textAlign:'center',
      top:12,
      margin:4
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:70
},
    signin:{
        backgroundColor:'#ee82ee',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        paddingHorizontal:65,
        paddingVertical:20,
    },
    register:{
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        backgroundColor:'gainsboro',
        paddingHorizontal:65,
        paddingVertical:20,
    }
})