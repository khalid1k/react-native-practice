import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const StyleWithButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            Press me
        </Text>
      </TouchableOpacity>
      <TouchableHighlight style= {styles.button} underlayColor='#3A1078' onPress={()=>{console.log("helo")}}>
        <Text style={styles.buttonText} >Touchable Higlight</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
    button: {
        margin: 20,
        backgroundColor: "#4E31AA",
        padding: 20,
        borderRadius: 25,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default StyleWithButton