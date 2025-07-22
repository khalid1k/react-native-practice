import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const StatusBarComponent = () => {
  return (
    <View>
      <StatusBar barStyle={'dark-content'} hidden={true}/>
      <Text>helo</Text>
    </View>
  )
}

export default StatusBarComponent