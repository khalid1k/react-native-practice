import 'react-native-gesture-handler'
import { View, StyleSheet, Button, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title='Open the drawer' onPress={() => navigation.openDrawer() }/>
    </View>
  )
}

const ProfileScreen = ({navigation}) => {
  return(
    <View>
      <Text>Profile Screen</Text>
      <Button title='Open the drawer' onPress={() => navigation.openDrawer() }/>
    </View>
  )
}

const SettingsScreen = ({navigation}) => {
  return(
    <View>
      <Text>Settings Screen</Text>
      <Button title='Open the drawer' onPress={() => navigation.openDrawer() }/>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
          drawerStyle: {backgroundColor: '#e6e6e6', width: 240},
          drawerLabelStyle: {
            fontSize: 18,
            color: '#333'
          },
          headerStyle: {
            backgroundColor: '#06200E'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center', 
        }}
      >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Settings' component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App