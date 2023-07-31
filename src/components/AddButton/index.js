import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const AddButton = ({ onPress, icon_name }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={icon_name} size={32} color="green" />
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({})