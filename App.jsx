import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import FirstComponents from './src/components/firstComponents'
import { useState } from 'react'
import { style1 } from './src/style/styling'
import FlatListScreen from './src/components/flatListScreen'
import Loader from './src/components/Loader'
// import SectionListScreen from './src/components/sectionList'
import SignUpForm from './src/components/signUpForm'
// import ContactListScreen from './src/screens/contact/contactListScreen'
// import Grid from './src/components/grid'
// import UseEffectHook from './src/components/useEffectHook'
// import HideShowToggle from './src/components/hideShowToggle'
// import StyleWithButton from './src/components/styleWithButton'
// import StatusBarComponent from './src/components/statusBarComponent'
// import DialogBox from './src/components/dialogBox'
import SimpleAlertBox from './src/components/simpleAlertBox'

const App = () => {
  const [nameValue, setNamevalue] = useState("Hamza")
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");
  const getName = (name)=> {
    setNamevalue(name)
    setCount((prev)=>count+1)
  }
  const handleInputUserName = (e) => {
    setUserName(e)
  }
  return (
    <View style= {{flex: 1}}>
      {/* <Text style = {style.text}>{userName}</Text> */}
      {/* <Button title='Tab here' onPress={()=> getName("khalid")}/> */}
      {/* <FirstComponents count = {count}/> */}
      {/* <TextInput style={{fontSize: 20, borderWidth: 2, borderColor: 'green', margin: 10}} placeholder='Enter Your Name' onChangeText={(e)=>handleInputUserName(e)}/> */}
      {/* <SectionListScreen/> */}

      <SignUpForm/>
      {/* <ContactListScreen/> */}
      {/* <Grid/> */}
      {/* <UseEffectHook/> */}
      {/* <HideShowToggle/> */}
      {/* <StyleWithButton/> */}
      {/* <Loader/> */}
      {/* <StatusBarComponent/> */}
      {/* <DialogBox/> */}
      {/* <SimpleAlertBox/> */}


    </View>
  )
}

const style = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 40,
    marginVertical: 2,
    padding: 6,
  }
})

export default App