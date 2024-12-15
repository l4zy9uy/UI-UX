import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const ForgotPasswordScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleContinue = () => {
        if (!email) {
            alert('Vui lòng nhập email!');
            return;
        }
        router.push('/pin'); // Navigate to the PIN screen
    };

    return (
        <LinearGradient colors={['#2980b9', '#6dd5fa', '#ffffff']} style={styles.container}>
            <Text style={styles.header}>Quên mật khẩu</Text>

            <View style={styles.subContainer}>
                <Text style={styles.title}>Đặt lại mật khẩu</Text>
                <Text style={styles.subtitle}>
                    Để được đặt lại mật khẩu, hãy nhập Email ở phía dưới. Mã xác nhận sẽ được gửi tới email của bạn.
                </Text>

                <TextInput
                    placeholder="example@example.com"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                />

                <Button mode="contained" onPress={handleContinue} style={styles.continueButton}>
                    Tiếp tục
                </Button>
            </View>
        </LinearGradient>
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
    },
    title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
    input: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    continueButton: { backgroundColor: '#0068ff', borderRadius: 25, padding: 10 },
});

export default ForgotPasswordScreen;
