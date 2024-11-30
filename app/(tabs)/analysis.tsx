import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnalysisScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Analysis Screen</Text>
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
