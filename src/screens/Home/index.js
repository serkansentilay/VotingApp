import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Questions from '../Questions'
import AddButton from '../../components/AddButton';
import AddNewModal from '../Questions/AddNewModal';

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AddButton icon_name={"md-add-outline"} onPress={() => setModalVisible((prev) => !prev)} />
            ),
            headerLeft: () => (
                <AddButton icon_name={"person"} onPress={() => navigation.navigate("Profile")} />
            )
        });
    }, [navigation]);

    return (
        <View>
            <Questions />

            <Modal
                animationType="slide"
                presentationStyle={"pageSheet"}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}>
                <AddNewModal closeModal={() => { setModalVisible(false) }} />
            </Modal>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})