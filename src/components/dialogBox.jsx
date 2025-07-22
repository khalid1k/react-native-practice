import { View, Text, Touchable, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'

const DialogBox = ({tittle,message}) => {
    const [modelVisible, setModelVisible] = useState(true);
  return (
    <View style= {styles.container}>
       <Modal
       visible = {modelVisible}
       animation= 'fade'
       transparent= {true}
       onRequestClose={()=>setModelVisible(false)}
       >
        <View style = {styles.modalOverLay}>
            <View style= {styles.modalView}>
                <Text style = {styles.modalTitle}>{tittle}</Text>
                <Text style = {styles.modalText}>{message}</Text>
                <TouchableOpacity style= {styles.closeButton} onPress={()=>setModelVisible(false)}>
                    <Text style = {styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
       </Modal>
    </View>
  )
}

export default DialogBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    openButton: {
        backgroundColor: '#6200ea',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        elevation: 2
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalOverLay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D7D7D7'
    },
    modalView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#555'
    },
    closeButton: {
        backgroundColor: '#03DAC',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        elevation: 2
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})