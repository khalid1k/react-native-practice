import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import My from './MyComponent'

const HideShowToggle = () => {
    const [status, setStatus] = useState(true)
  return (
    <View>
      <Text style={{fontSize:20, fontWeight: 'bold', textAlign: 'center'}}>HideShowToggle</Text>
      {status && <My/>}
      <Button title={status ? 'Hide' : 'Show'} onPress={()=>setStatus(!status)}/>
    </View>
  )
}

export default HideShowToggle