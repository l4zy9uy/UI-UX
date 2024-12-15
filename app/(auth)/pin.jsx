import React, { useState } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const PinScreen = () => {
    const router = useRouter();
    const [pin, setPin] = useState('');
    const correctPin = '273916';

    const handleConfirmPress = () => {
        if (pin === correctPin) {
            router.push('/success'); // Navigate to the success screen
        } else {
            alert('Mã PIN không đúng!');
            setPin(''); // Clear the input field
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <LinearGradient colors={['#2980b9', '#6dd5fa', '#ffffff']} style={styles.container}>
                <Text style={styles.header}>Mã PIN</Text>

                <View style={styles.subContainer}>
                    <Text style={styles.title}>Nhập mã PIN</Text>

                    <TextInput
                        value={pin}
                        onChangeText={setPin}
                        keyboardType="number-pad"
                        maxLength={6}
                        secureTextEntry={true}
                        style={styles.pinInput}
                        placeholder="******"
                        textAlign="center"
                        placeholderTextColor="#cccccc"
                    />

                    <Button
                        mode="contained"
                        onPress={handleConfirmPress}
                        style={styles.confirmButton}
                        labelStyle={styles.confirmButtonText}
                    >
                        Xác nhận
                    </Button>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginTop: 40 },
    subContainer: {
        flex: 1,
        marginTop: 50,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#eef8ff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 },
    pinInput: {
        width: '80%',
        height: 50,
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#0068ff',
        color: '#333',
        marginBottom: 40,
    },
    confirmButton: {
        backgroundColor: '#0068ff',
        borderRadius: 25,
        padding: 10,
        width: '60%',
    },
    confirmButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
});

export default PinScreen;
