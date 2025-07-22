import { View, Text,SectionList, StyleSheet } from 'react-native'
import React from 'react'

const food = [
    {
        tittle: 'fruits',
        data: [
            {id: 1, name: "Apple"},
            {id: 2, name: "Orange"},
            {id: 3, name: "Peach"},
            {id: 4, name: "Pear"},
            {id: 5, name: "Pine-Apple"},
        ]
    },
    {
        tittle: 'vegitables',
        data: [
            {id: 1, name: "Patato"},
            {id: 2, name: "Onion"},
            {id: 3, name: "Bringle"},
            {id: 4, name: "Lady finger"},
            {id: 5, name: "Redish"},
        ]
    },
]

const SectionListScreen = () => {
    const renderItem = ({item}) => (
        <View style = {styles.item}>
      <Text style = {styles.title}>{item.name}</Text>
      ,/</View>  
    );

    const renderSectionHeader = ({section}) => (
        <View style = {styles.header}>
        <Text style = {styles.headerTitle}>{section.tittle} </Text>
        </View>
    );
  return (
    <View style= {styles.container}>
      <SectionList 
      sections = {food}
      renderItem = {renderItem}
      renderSectionHeader = {renderSectionHeader}
      keyExtractor = {(item) => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        paddingTop: 15,
    },
    item : {
        backgroundColor: '#add8e6',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
    },
    header: {
        backgroundColor: '#90ee90',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default SectionListScreen;