import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const ChangePasswordScreen = () => {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ newPassword: '', confirmPassword: '' });

    const handleChangePassword = () => {
        const newErrors = {};

        if (!newPassword) {
            newErrors.newPassword = 'Mật khẩu mới không được để trống';
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Xác nhận mật khẩu không được để trống';
        } else if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu không khớp';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Simulate a success response and redirect
            setTimeout(() => {
                router.push('/change-success');
            }, 2000);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <LinearGradient
                colors={['#2980b9', '#6dd5fa', '#ffffff']}
                locations={[0, 0.3, 1]}
                style={styles.container}
            >
                <Text style={styles.greeting}>Mật Khẩu Mới</Text>

                <View style={styles.subContainer}>
                    {/* New Password Field */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Nhập Mật Khẩu Mới</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="••••••••"
                            secureTextEntry
                            value={newPassword}
                            onChangeText={setNewPassword}
                            style={styles.input}
                            theme={{
                                roundness: 30,
                                colors: {
                                    background: '#FFFFFF',
                                    outline: '#ffffff',
                                },
                            }}
                        />
                        {errors.newPassword ? <Text style={styles.errorText}>{errors.newPassword}</Text> : null}
                    </View>

                    {/* Confirm Password Field */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Xác Nhận Mật Khẩu</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="••••••••"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            style={styles.input}
                            theme={{
                                roundness: 30,
                                colors: {
                                    background: '#FFFFFF',
                                    outline: '#ffffff',
                                },
                            }}
                        />
                        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
                    </View>

                    {/* Change Password Button */}
                    <Button
                        mode="contained"
                        onPress={handleChangePassword}
                        style={styles.changePasswordButton}
                        labelStyle={styles.changePasswordButtonText}
                    >
                        Đổi Mật Khẩu
                    </Button>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F7FF',
    },
    subContainer: {
        flex: 1,
        width: '100%',
        borderTopStartRadius: 54,
        borderTopEndRadius: 54,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1edff',
        padding: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 40,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
    },
    inputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333333',
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    errorText: {
        fontSize: 12,
        color: '#FF4444',
        marginTop: 5,
    },
    changePasswordButton: {
        backgroundColor: '#0066ff',
        borderRadius: 25,
        paddingVertical: 10,
        width: '50%',
        marginTop: 15,
    },
    changePasswordButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default ChangePasswordScreen;
