import { View, StyleSheet, Button, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style = {styles.TextSyle}>Home Screen</Text>
    </View>
  )
}

const ProfileScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style = {styles.TextSyle}>Profile Screen</Text>
    </View>
  )
}

const SettingsScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style = {styles.TextSyle}>Settings Screen</Text>
    </View>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions = {
        {
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {backgroundColor: '#fff'},
          tabBarIndicatorStyle: {
            backgroundColor: '#007bff',
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 16,

          }
        }
      }>
        <Tab.Screen  name='Home' component={HomeScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
      <Tab.Screen name='Settings' component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  TextSyle: {
    fontWeight: 'bold',
    color: '#fff'
  }
})