import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GET_QUESTION_SUBSCRIPTION } from './queries'
import { useQuery, useSubscription } from '@apollo/client'
import List from './List'
import Item from './Item'
import Loading from '../../components/Loading'
import EmptyList from '../../components/EmptyList.js'

const Questions = () => {
    const { data, error, loading } = useSubscription(GET_QUESTION_SUBSCRIPTION)

    if (error) {
        return <Text>{JSON.stringify(error)}</Text>
    }

    if (loading) {
        return <Loading />
    }

    console.log("data", data)
    return <>
        {data.questions.length > 0
            ? <List data={data.questions} />
            : <EmptyList message={"No surveys yet."} />}
    </>
}

export default Questions

const styles = StyleSheet.create({})