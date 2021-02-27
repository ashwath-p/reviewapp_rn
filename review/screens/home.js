import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }, text: {
        fontFamily: 'futura-book',
        fontSize: 25,
    },
});