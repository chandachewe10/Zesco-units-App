import { StyleSheet } from 'react-native';


export default StyleSheet.create({
     
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
