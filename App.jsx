import { View, StyleSheet} from 'react-native'
import React from 'react'
import SignUpForm from './src/components/signUpForm'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/navigationScreens/home'
import About from './src/screens/navigationScreens/about'
import Login from './src/screens/navigationScreens/login'

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerStyle: styles.header, headerTitleStyle: styles.headerTitle , headerTintColor: '#fff', contentStyle: styles.screen}}>
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name='About' component={About}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}


export default App



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6200EE',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#fff'
    },
    screen: {
        backgroundColor: 'lightgreen'
    },
    headerTintColor: {
      color: '#fff'
    }
})