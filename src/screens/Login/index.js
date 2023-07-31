import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Input } from "native-base"
import { auth } from "../../auth"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsub
        //unmount olduğunda durdurmak için unsub returnledik
        //Abone olunan gerçek zamanlı bir veri kaynağına olan abonelik ne zaman durdurulmalıdır?


    }, [])



    const handleSignUp = () => {
        if (!email || !password) {
            return
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials
                console.log("user", user)
            })
            .catch(error => alert(error.message))

    }

    const handleSignIn = () => {
        if (!email || !password) {
            return
        }

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials
                console.log("user", user)
            })
            .catch(error => alert(error.message))
    }


    return (
        <Box p={6}>
            <Box mb={2}>
                <Heading mb="2">E-mail</Heading>
                <Input
                    placeholder="example@gmail.com"
                    fontsize={20}
                    borderColor="#686868"
                    autoCapitalize={"none"}
                    value={email}
                    onChangeText={setEmail}
                />
            </Box>
            <Box my={2}>
                <Heading mb={2}>Password</Heading>
                <Input
                    placeholder="*********"
                    fontsize={20}
                    borderColor="#686868"
                    type={"password"}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </Box>
            <Box mt={4}>
                <Button
                    size={"lg"}
                    onPress={handleSignIn}
                >Login</Button>
                <Button
                    mt={2}
                    size={"lg"}
                    variant={"outline"}
                    onPress={handleSignUp}
                >Register</Button>
            </Box>
        </Box>
    )
}

export default Login

const styles = StyleSheet.create({})