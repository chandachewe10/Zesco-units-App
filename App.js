import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image, TextInput, Button, Alert } from 'react-native';

export default function App() {


 
 const [amount,setAmount] = React.useState('Enter Amount e.g 200');

 const firstPurchase = () => {

 }
 const secondPurchase = () => {

}
const thirdPurchase = () => {

}



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


        
        <View style={styles.FirstPurchase}>
        <Button
  onPress={firstPurchase}
  title="First Purchase"
  color="#228b22"
  
/>
        </View>
        <View style={styles.SecondPurchase}>
        <Button
  onPress={secondPurchase}
  title="Second Purchase"
  color="#1e90ff"
  
/>
        </View>
        <View style={styles.ThirdPurchase}>
        <Button
  onPress={thirdPurchase}
  title="Third Purchase"
  color="#f194ff"
  
/>
        </View>
        <View>
          <Text style={styles.title}>RESULTS</Text>
        </View>

<View style={styles.ResultsView}>
<Text style={{color:'white',fontSize:18,fontStyle:'italic',fontWeight:'bold'}}>Amount After Tax: 0.00</Text>
<Text style={{color:'white',fontSize:18,fontStyle:'italic',fontWeight:'bold'}}>Units (kWh): 0.00</Text>
<Text style={{color:'white',fontSize:18,fontStyle:'italic',fontWeight:'bold'}}>VAT @16%: 0.00</Text>
<Text style={{color:'white',fontSize:18,fontStyle:'italic',fontWeight:'bold'}}>CUSTOMS @3%: 0.00</Text>   
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

  },
  FirstPurchase:{
  marginTop:25,
  width:'90%',
  alignSelf: "center",
  elevation:15,
  borderRadius: 100, 
    
  },
  SecondPurchase:{
    marginTop:8,
    width:'90%',
    alignSelf: "center",
    elevation:15,
    borderRadius: 100, 
      
    },
    ThirdPurchase:{
      marginTop:8,
      width:'90%',
      alignSelf: "center",
      elevation:15,
      borderRadius: 100, 
     marginBottom:25   
      },
      ResultsView:{
        margin:10
      }
     
});
