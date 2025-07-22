import { View, Text } from 'react-native'
import React from 'react'

const FirstComponents = ({count}) => {
  return (
    <View>
      <Text style={{fontSize: 60}}>Count: {count}</Text>
    </View>
  )
}

export default FirstComponents;
