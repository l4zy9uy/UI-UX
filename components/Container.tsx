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

export const SubContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <View style={styles.subContainer}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#d1edff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },
});
