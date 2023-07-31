import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Heading, Progress } from 'native-base'

const Item = ({ item, total }) => {
    return (
        <Box my={3}>
            <Heading size={"mb"} mb={3}>
                {item.text} (% {""} {((item.answers_aggregate.aggregate.count * 100) / total).toFixed(1)})
                {" - "}
                {item.answers_aggregate.aggregate.count}
            </Heading>
            <Progress size={"lg"} value={item.answers_aggregate.aggregate.count} max={total} />
        </Box>
    )
}

export default Item

const styles = StyleSheet.create({})