import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = (props) => {
    const {userName} = props.route.params;
  return (
    <View>
      <Text>Welcome to the app {userName}</Text>
      {/* <Button title='Go to About Page' onPress={()=>navigation.navigate('About')}/> */}
      <Button title='go back' onPress={()=>props.navigation.goBack()}/>
    </View>
  )
}

export default Home