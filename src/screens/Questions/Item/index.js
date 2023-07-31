import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { IconButton, Box } from "native-base"
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../../auth';
import DeleteButton from './DeleteButton';


const Item = ({ item }) => {
    const navigation = useNavigation();
    console.log("ITEM,İTEM", item)
    return (
        <Box style={styles.container}>
            <TouchableOpacity
                style={styles.titleBtn}
                onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>

            {auth.currentUser.uid === item.user_id && (
                <DeleteButton id={item.id} />
            )}

        </Box>

    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleBtn: {
        flex: 1,
        padding: 10
    },
    text: {
        fontSize: 20,
        color: 'black'
    }

})