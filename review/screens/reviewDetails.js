import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    const navg = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text>
            <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
            <Button title='goback' onPress={navg} />
        </View>
    )
}
