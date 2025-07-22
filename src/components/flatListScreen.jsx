import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { style1 } from '../style/styling';

const data = [
    { id: 1, title: 'Item 1'},
    { id: 2, title: 'Item 2'},
    { id: 3, title: 'Item 3'},
    { id: 4, title: 'Item 4'},
    { id: 5, title: 'Item 5'},
    { id: 6, title: 'Item 6'},
    { id: 7, title: 'Item 7'},
    { id: 8, title: 'Item 8'},
]
const FlatListScreen = () => {
    const renderItem = ({item}) => (
        <View>
            <Text style={style1.text}>{item.title}</Text>
        </View>
    );
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
    </View>
  )
}

export default FlatListScreen;