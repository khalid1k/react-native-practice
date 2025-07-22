import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(false)
  return (
    <View style = {styles.container}>
      
      <TouchableOpacity onPress={()=>setLoading(!loading)} style = {styles.button}>
        <Text style = {styles.buttonText}>{loading ? 'Hide Loader': 'Show Loader' }</Text>
      </TouchableOpacity>
      
      {
        loading && (<View style= {styles.loaderContainer}>
        <ActivityIndicator size={200} color='#4CAF50'/>
        <Text style = {styles.loadingText}>Loading....</Text>
        </View>)

      }

    </View>
  )
}

export default Loader;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#4CAF50',
        marginBottom: 20,
        borderRadius: 10,

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    loaderContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        shadowColor: '#000',
        elevation: 5,
    },
    loadingText: {
        margin: 'top',
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: 'bold'
    }
})