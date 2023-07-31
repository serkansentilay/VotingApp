import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from './Item'

const List = ({ data }) => {
    console.log("data/**/**", data)
    return <View>
        {data.map((item, id) => <Item key={id} item={item} />)}
    </View>
}

export default List

const styles = StyleSheet.create({})