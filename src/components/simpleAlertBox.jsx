import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const SimpleAlertBox = () => {
    const showAlert = ()=>{
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'Cancel',
                    onPress: ()=>console.log("cancel button clicked"),
                    style: 'cancel'
                },
                {
                    'text': 'Ok',
                    onPress: ()=> console.log("ok button is clicked"),
                }
            ],
            {
                cancelable: false
            }

        )
    }
  return (
    <View>
        <Text style={{fontSize: 25}}>Alert Example</Text>
      <Button title = "show Alert" onPress={showAlert}/>
    </View>
  )
}

export default SimpleAlertBox