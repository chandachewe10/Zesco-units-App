import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image, TextInput } from 'react-native';

export default function App() {


 
 const [amount,setAmount] = React.useState('Enter Amount e.g 200');




  return (
    
    <ImageBackground style={styles.background_image} source={require('./assets/AppImages/background_image.jpg')} >
      <SafeAreaView>
        <View style={styles.ViewLogo}>
          <Image style={styles.AppLogo} source={require('./assets/AppImages/Elogo.png')}/>
        </View>
        <View>
          <Text style={styles.title}>Zesco Units Calculator</Text>
        </View>
        <View style={styles.ViewInput}>
          <TextInput keyboardType='numeric' onChangeText={setAmount} placeholder='Enter Amount' placeholderTextColor='white' style={styles.amount_input}/>
        </View>
        <View style={styles.ViewInput}>
          <Text>The amount entered is {amount}</Text>
        </View>
        </SafeAreaView> 
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  
  background_image: {
 flex:1
  },
  AppLogo:{
   width:100,
   height:100,
   borderRadius:100,
   
  },
  ViewLogo:{
    alignItems:'center',
    marginTop:100
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    color:'white',   
    textAlign:'center',
    marginTop:10
  },
  amount_input:{
    width:'90%',
    borderRadius:20,
    padding:8,
    borderWidth:1,
    borderColor:'white',
    marginTop:30,
    alignItems:'center',
    color:'white'

  },
  ViewInput:{
    
    alignItems:'center'

  }
});
