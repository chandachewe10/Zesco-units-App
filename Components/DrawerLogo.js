import React from 'react';
import { StyleSheet,Image,View} from 'react-native';

function DrawerLogo(props) {
    return (
        <View style={styles.ViewLogo}>
        <Image style={styles.AppLogo} source={require('../assets/AppImages/Elogo.png')}/>
      </View>
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
});

export default DrawerLogo;