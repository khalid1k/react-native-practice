import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation}) => {
    const [userName, setUserName] = useState('');
  return (
    <View>
      <TextInput placeholder='Enter Your Name' value={userName} onChangeText={setUserName}/>
      <Button title='Login' onPress={()=>navigation.navigate('Home', {userName})}/>
    </View>
  )
}

export default Login

