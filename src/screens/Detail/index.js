import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_QUESTION_DETAIL } from './queries'
import Loading from '../../components/Loading'
import { Box, Divider, Heading } from 'native-base'
import Form from './Form'
import Results from './Results'
import { auth } from '../../auth'


const Detail = ({ route }) => {
    const [isvoted, setIsVoted] = useState(false)

    const { id } = route.params
    const { loading, error, data } = useQuery(GET_QUESTION_DETAIL, {
        variables: {
            id,
            user_id: auth.currentUser.uid
        },
        fetchPolicy: 'network-only'
    })

    console.log("data", data)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text>{JSON.stringify(error)}</Text>
    }

    const { text, options, answers } = data.questions_by_pk

    return (
        <Box p="3">
            <Heading >{text}</Heading>
            <Divider my={2} />
            {!isvoted && answers.length < 1
                ? <Form id={id} options={options} setIsVoted={setIsVoted} />
                : <Results id={id} />}
        </Box>
    )
}

export default Detail

const styles = StyleSheet.create({})