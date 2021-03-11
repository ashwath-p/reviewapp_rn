import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Avengers : EndGame', rating: 5, body: 'Magnificent', key: '1' },
        { title: 'Friends with Benefits', rating: 3, body: 'Surreal', key: '2' },
        { title: 'Master', rating: 4, body: 'Break Through', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}