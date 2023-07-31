import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Radio } from 'native-base'
import { useMutation } from '@apollo/client'
import { NEW_ANSWER_MUTATION } from './queries'
import { auth } from '../../auth'

const Form = ({ options, setIsVoted, id }) => {
    const [selected, setSelected] = useState("")

    const [NewAnswerMutation, { loading, error, data }] = useMutation(NEW_ANSWER_MUTATION)

    const handleSubmit = async () => {
        if (!selected) {
            return
        }

        await NewAnswerMutation({
            variables: {
                option_id: selected,
                user_id: auth.currentUser?.uid,
                question_id: id
            }
        })

        setIsVoted(true)
    }

    return (
        <Box py={"3"}>
            <Radio.Group value={selected} onChange={setSelected}>
                {options.map(options => (
                    <Radio my={1} key={options.id} value={options.id}>{options.text}</Radio>
                ))}
            </Radio.Group>
            <Button mt={5} onPress={handleSubmit} isLoading={loading}>Submit</Button>
        </Box>
    )
}

export default Form

const styles = StyleSheet.create({})