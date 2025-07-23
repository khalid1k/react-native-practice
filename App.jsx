import { View, StyleSheet, Button, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator()


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
const getTabBarIcon = (routName, focused, color, size) => {
  let iconName;
  if(routName === 'Home'){
    iconName = focused ? 'home' : 'home-outline'
  }else if(routName === 'Profile'){
    iconName = focused ? 'person' : 'person-outline'
  }else if(routName === 'Settings'){
    iconName = focused ? 'settings' : 'settings-outline'
  }
  return <Ionicons name={iconName} size = {size}  color= {color}/>
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        height: 60
      
      })}
      >
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