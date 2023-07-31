import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const Loading = () => {
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}

                source={require('./animations/loading.json')}
            />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})