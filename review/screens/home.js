import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForms from './reviewForms';

export default function Home({ navigation }) {
    const [modal, setModal] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Avengers : EndGame', rating: 5, body: 'Magnificent', key: '1' },
        { title: 'Friends with Benefits', rating: 3, body: 'Surreal', key: '2' },
        { title: 'Master', rating: 4, body: 'Break Through', key: '3' },
    ]);
    return (
        <View style={globalStyles.container}>
            <Modal visible={modal} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModal(false)} />
                    <ReviewForms />
                </View>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModal(true)} />
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

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});