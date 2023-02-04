import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image, TextInput, Button, Alert, ScrollView } from 'react-native';

export default function App() {


 
 const [amount,setAmount] = React.useState('Enter Amount e.g 200');
 const [amountAfterTax ,setamountAfterTax] = React.useState('K0.00');
 const [vat_tax ,setvat_tax] = React.useState('K0.00');
 const [customs_tax ,setcustoms_tax] = React.useState('K0.00');
 const [units ,setunits] = React.useState('kWh 0.00');
 
 

 const firstPurchase = () => {

  // Check if the amount is null or 0
  if(amount==='' || amount==0){
    Alert.alert('Invalid Amount', 'Please enter amount greater than 0');
  }
  




  let amount_value = parseFloat(amount);
  let vat_tax = (parseFloat(amount)*0.16).toFixed(2);
  let customs_tax = (parseFloat(amount)*0.03).toFixed(2);
  let totalTax = (parseFloat((vat_tax)) + parseFloat((customs_tax)));
  let amountAfterTax = (parseFloat(amount_value) - parseFloat(totalTax)).toFixed(2);
 // {setamountAfterTax(amount)}
  setamountAfterTax("Amount after Deductions: K"+parseFloat(amountAfterTax))
  setvat_tax("VAT: K"+vat_tax)
  setcustoms_tax("Customs: K"+customs_tax)
  
  
  if (amountAfterTax <= 47) {
    let units = (amount_value / 0.47).toFixed(2);
    setunits("Units :"+units)
  } else if (amountAfterTax >= 48 && amountAfterTax <= 217) {

   let R1units = 100;
    let units = (((amount_value - 55.93) / (1.2 * 0.85)) + R1units).toFixed(2)+" kWh";
    setunits("Units :"+units)
  } else {
   let R1units = 100;

   let R2units = 200;

   let R3units = ((amount_value - 258.23) / (1.2 * 1.94));

  let units = (R1units + R2units + R3units).toFixed(2)+" kWh";
  setunits("Units :"+units)
  }




 }




 const secondPurchase = () => {
  // Check if the amount is null or 0
  if(amount==='' || amount==0){
    Alert.alert('Invalid Amount', 'Please enter amount greater than 0');
  }

  let amount_value = parseFloat(amount);
  let vat_tax = (parseFloat(amount)*0.16).toFixed(2);
  let customs_tax = (parseFloat(amount)*0.03).toFixed(2);
  let totalTax = (parseFloat((vat_tax)) + parseFloat((customs_tax)));
  let amountAfterTax = (parseFloat(amount_value) - parseFloat(totalTax)).toFixed(2);
 // {setamountAfterTax(amount)}
  setamountAfterTax("Amount after Deductions: K"+parseFloat(amountAfterTax))
  setvat_tax("VAT: K"+vat_tax)
  setcustoms_tax("Customs: K"+customs_tax)
  
  
  if (amountAfterTax >= 1 && amountAfterTax <= 201) {
    let units = ((amount_value) / (1.01)).toFixed(2)+" kWh";
    setunits("Units :"+units)
  } else {
    //
    let units = (((amount_value-203) / (2.31)) + 201).toFixed(2)+" kWh";
    setunits("Units :"+units);
  }
   
 
  
}



const thirdPurchase = () => {
  // Check if the amount is null or 0
  if(amount==='' || amount==0){
    Alert.alert('Invalid Amount', 'Please enter amount greater than 0');
  }
  
  let amount_value = parseFloat(amount);
  let vat_tax = (parseFloat(amount)*0.16).toFixed(2);
  let customs_tax = (parseFloat(amount)*0.03).toFixed(2);
  let totalTax = (parseFloat((vat_tax)) + parseFloat((customs_tax)));
  let amountAfterTax = (parseFloat(amount_value) - parseFloat(totalTax)).toFixed(2);
 // {setamountAfterTax(amount)}
  setamountAfterTax("Amount after Deductions: K"+parseFloat(amountAfterTax))
  setvat_tax("VAT: K"+vat_tax)
  setcustoms_tax("Customs: K"+customs_tax)
  let R3bandPerUnit = 2.31;
  let units = (amount_value / R3bandPerUnit).toFixed(2)+" kWh";
  setunits("Units :"+units);
  
}



  return (
    
    <ImageBackground style={styles.background_image} source={require('./assets/AppImages/background_image.jpg')} >
      <SafeAreaView>
      <ScrollView style={styles.scrollView}>
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
  title="Third(+) Purchase"
  color="#f194ff"
  
/>
        </View>
        <View>
          <Text style={styles.title}>RESULTS</Text>
        </View>

<View style={styles.ResultsView}>
  <TextInput placeholderTextColor='white' editable={false} value={amountAfterTax.toString()} style={styles.textInput}/>
  <TextInput placeholderTextColor='white' editable={false} value={units.toString()} style={styles.textInput}/>
  <TextInput placeholderTextColor='white' editable={false} value={vat_tax.toString()} style={styles.textInput}/>
  <TextInput placeholderTextColor='white' editable={false} value={customs_tax.toString()} style={styles.textInput}/>

</View>
</ScrollView>
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
    marginTop:50
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
      },
      textInput: {
       
        padding: 10,
        
        borderBottomColor:'white',
        margin:5,
        marginRight:50,
        color: 'white',
        borderBottomColor: 'white', // Add this to specify bottom border color
        borderBottomWidth: 2     // Add this to specify bottom border thickness
    }
     
});
