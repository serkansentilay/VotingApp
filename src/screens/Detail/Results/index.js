import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSubscription } from '@apollo/client'
import { RESULTS_SUBSCRIPTION } from '../queries'
import Loading from '../../../components/Loading'
import { Heading } from 'native-base'
import Item from './Item'

const Results = ({ id }) => {
    const { loading, error, data } = useSubscription(RESULTS_SUBSCRIPTION, {
        variables: {
            id
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Text>{JSON.stringify(error)}</Text>
    }

    const { options } = data.questions_by_pk
    const total = options.reduce(
        (total, item) => total + item.answers_aggregate.aggregate.count, 0
    )

    console.log("total", total)
    return (
        <View>
            {options.map((item) => (
                <Item item={item} key={item.id} total={total} />
            ))}
        </View>
    )
}

export default Results

const styles = StyleSheet.create({})