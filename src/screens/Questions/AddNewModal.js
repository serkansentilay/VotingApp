import { Box, Button, Heading, Input, useToast } from "native-base"
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMutation } from "@apollo/client";
import { APP_NEW_QUESTION_MUTATION } from "./queries";
import { auth } from "../../auth";

const AddNewModal = ({ closeModal }) => {
    const toast = useToast()
    const [question, setQuestion] = useState("")
    const [options, setOptions] = useState([{ text: "" }, { text: "" }])
    const [addNewQuestion, { loading, error }] = useMutation(APP_NEW_QUESTION_MUTATION)

    const handleOptionChange = (val, i) => {
        const data = [...options]
        data[i].text = val
        setOptions(data)
    }

    const handleNewOption = () => {
        if (options.length === 5) {
            return
        }
        setOptions((prev) => [...prev, { text: "" }])
    }

    const handleSave = async () => {
        const options_data = options.filter((item) => item.text !== "")

        if (!question || options_data.length < 2) {
            return
        }

        const result = await addNewQuestion({
            variables: {
                title: question,
                options: options_data,
                user_id: auth.currentUser?.uid
            }
        })

        closeModal()
        toast.show({
            title: "Question added!",
            placement: "bottom",
        })

        console.log("result", result)

    }

    return (
        <Box backgroundColor={"#ddd"} flex={"1"}>
            <Box p="6" flex={"1"} >
                <Heading mb="2">Question</Heading>
                <Input
                    placeholder="Enter a new question..."
                    fontSize={20}
                    borderColor="#686565"
                    value={question}
                    onChangeText={setQuestion}
                />
                <Heading mt="6" mb="2">Options</Heading>
                {options.map((item, i) => (
                    <Input
                        placeholder="Enter a new option..."
                        fontSize={18}
                        borderColor="#686565"
                        mb={1}
                        key={i}
                        value={item.text}
                        onChangeText={(val) => handleOptionChange(val, i)}
                    />
                ))}

                <Box mt="3" alignItems={{ base: "flex-end" }}>
                    <Button
                        colorScheme={"coolGray"}
                        size="xs"
                        alignItems={{ base: "flex-end" }}
                        onPress={handleNewOption}
                        disabled={options.length === 5}
                        leftIcon={<Ionicons name="add-circle" size={32} color={"#fff"} />}
                    />
                </Box>
            </Box>
            <Box>
                <Button size={"lg"} onPress={handleSave} isLoading={loading} >Save</Button>
            </Box>
        </Box>
    )
}

export default AddNewModal
