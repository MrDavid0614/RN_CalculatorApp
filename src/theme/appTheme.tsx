import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    previousResult: {
        color: 'rgba(255, 255, 255, 255, 0.4)',
        fontSize: 30,
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});