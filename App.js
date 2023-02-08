import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './Components/HomeComponent';
import DrawerLogo from './Components/DrawerLogo';
import DrawerContent from './Components/DrawerContent';




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
        <Drawer.Screen name="DrawerLogo" component={DrawerLogo} />
        <Drawer.Screen name="Home" component={HomeComponent} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}