import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }, titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 30,
        color: '#333',
        padding: 25,
        borderColor: 'lightblue',
        borderWidth: 2,
        margin: 5
    }, paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});