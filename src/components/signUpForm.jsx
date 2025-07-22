import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import DialogBox from './dialogBox';

const SignUpForm = () => {
  const [hasSignUp, sethasSignUp] = useState(false);
    const [data, setData] = useState({
        name: '',
        password: '',
        email: '',
        firebaseId: '',
        picture: ''
    }); 

    const handleChange = (field, value) => {
        setData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleLogin = async() => {
       try{
        const result = await axios.post('http://10.0.2.2:3003/users/create-by-email-password', data);
       if(result.data.statusCode === 201){
        sethasSignUp(true)
        setData({
        name: '',
        password: '',
        email: '',
        firebaseId: '',
        picture: ''
    })
       } 
       }catch(error){
        console.log("error while loin the user ", error);
       } 
    };

    return (
        <View style={styles.container}>

        {hasSignUp && <DialogBox tittle={"Welcome to the Applicaton"} message={"User is created successfully!"}/>}

            <Text style={styles.heading}>Sign Up</Text>
            
            <TextInput
                style={styles.input}
                placeholder='Enter Your Name'
                value={data.name}
                onChangeText={(text) => handleChange('name', text)}
                placeholderTextColor='#999'
            />
            
            <TextInput
                style={styles.input}
                placeholder='Enter Your Email'
                value={data.email}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType='email-address'
                autoCapitalize='none'
                placeholderTextColor='#999'
            />

            <TextInput
                style={styles.input}
                placeholder='Enter Your Password'
                value={data.password}
                onChangeText={(text) => handleChange('password', text)}
                placeholderTextColor='#999'
                secureTextEntry
            />
            
            <TextInput
                style={styles.input}
                placeholder='Enter Firebase ID'
                value={data.firebaseId}
                onChangeText={(text) => handleChange('firebaseId', text)}
                placeholderTextColor='#999'
            />
            
            <TextInput
                style={styles.input}
                placeholder='Enter Picture URL'
                value={data.picture}
                onChangeText={(text) => handleChange('picture', text)}
                placeholderTextColor='#999'
            />
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#f0f0f0'
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: 'center',
        color: '#333'
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default SignUpForm