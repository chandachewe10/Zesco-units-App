import React from 'react';
import { Image,View, Text, ImageBackground,StyleSheet } from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import styles from '../assets/AppStyles';
import { FontAwesome5 } from '@expo/vector-icons';

function DrawerContent(props) {
    return (
        <View style={{flex:1}}>   
     <DrawerContentScrollView {...props}> 
     <ImageBackground source={require('../assets/AppImages/background_image.jpg')}>
     <View style={styles.ViewLogo}>
          <Image style={styles.AppLogo} source={require('../assets/AppImages/DrawerIcon.jpg')}/>
        </View>
        <Text style={{textAlign:'center',fontWeight:'600',marginTop:10,marginBottom:10,fontSize:18,color:'white'}}>Zesco Residential Calculator</Text>
        </ImageBackground>    
            
        <DrawerItemList {...props}/>

        <View
  style={{
    marginTop: 10,marginBottom:10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>


 
<View style={{marginLeft:20,flexDirection:'row',marginTop:15}}>
<FontAwesome5 name="user-shield" size={24} color="black" />
    <Text style={{marginLeft:20}} >Author </Text>
 </View>
     </DrawerContentScrollView>  
     </View>
    );
}

export default DrawerContent;