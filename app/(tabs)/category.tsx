import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Category Screen</Text>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99ddff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});
