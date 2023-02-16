import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './Components/HomeComponent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import DrawerContent from './Components/DrawerContent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Guidance from './Components/Guidance';




function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
            }}
     drawerContent = {(props) => <DrawerContent {...props}/>} 
      >     
        
        <Drawer.Screen name="Home" component={HomeComponent} 
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Ionicons name="ios-home-outline" size={24} color="black" />
          ),
       }}/>
        <Drawer.Screen name="Guidance" component={Guidance} 
       options={{
       
        drawerIcon: ({focused, size}) => (
          <MaterialIcons name="assistant-direction" size={24} color="black" />
        ),
     }} 
        
        />
        <Drawer.Screen name="UseCase" component={NotificationsScreen} 
         options={{
       title:'Documentation',
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="file-account-outline" size={24} color="black" />
          ),
       }} />
       
        <Drawer.Screen name="Help" component={NotificationsScreen} 
         options={{
         
             drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons name="help-rhombus" size={24} color="black" />
             ),
          }}
        />
        <Drawer.Screen name="Share" component={NotificationsScreen} 
         options={{
         
             drawerIcon: ({focused, size}) => (
              <MaterialIcons name="share" size={24} color="black" />
             ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}