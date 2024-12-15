import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <LinearGradient
            colors={['#66ccff', '#99ddff']}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    );
};

export const SubContainer = ({ children, height }) => (
    <View style={[styles.subContainer, { height }]}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        width: '100%',
        backgroundColor: '#eef8ff',
        borderTopStartRadius: 54,
        borderTopEndRadius: 54,
        alignItems: 'center',
        // justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
        paddingTop: 20,
    },
});
