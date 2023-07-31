import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import photom from "./photom.jpg"
import { Box, Heading, Image } from "native-base"

const EmptyList = ({ message }) => {
    return (
        <Box w={"100%"} h={"100%"} backgroundColor="#FFF" justifyContent="center" alignItems={"center"}>
            <Image
                source={photom} alt="photo" h={300} resizeMode="contain" mb={4}
            />
            <Heading size={"lg"} fontWeight="normal">{message}</Heading>
        </Box>
    )
}

export default EmptyList

const styles = StyleSheet.create({})