import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const pressHandler = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            <MaterialIcons name='menu' size={28} onPress={pressHandler} style={styles.icon} />
            <View style={styles.title}>
                <Image source={require('../assets/heart_logo.png')} style={styles.image} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }, headerText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    title: {
        flexDirection: 'row',
    },
    image: {
        width: 26,
        height: 26,
        marginHorizontal: 25,
        marginTop: 8,
    }

});