import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("this is useEffect Hook")
    },[])
  return (
    <View>
      <Text style={{fontSize: 30, marginVertical: 10, fontWeight: 'bold'}}>UseEffectHook</Text>
      <Text style={{fontSize: 20, marginVertical: 10, fontWeight: 'bold', textAlign:'center'}}>{count}</Text>
      <Button title='press me' onPress={()=>setCount(count + 1)}/>
    </View>
  )
}

export default UseEffectHook