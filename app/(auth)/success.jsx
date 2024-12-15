import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const PinSuccessScreen = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/change-password'); // Redirect to Change Password Screen
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timer
    }, [router]);

    return (
        <LinearGradient colors={['#2980b9', '#6dd5fa', '#ffffff']} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.icon}>✔</Text>
                <Text style={styles.message}>Mã PIN đã được xác minh!</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    content: { alignItems: 'center' },
    icon: { fontSize: 80, color: '#fff', marginBottom: 20 },
    message: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
});

export default PinSuccessScreen;
