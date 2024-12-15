import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSignUp = () => {
        const newErrors = {};

        if (!fullName) {
            newErrors.fullName = 'Họ và tên không được để trống';
        }
        if (!email) {
            newErrors.email = 'Email không được để trống';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!password) {
            newErrors.password = 'Mật khẩu không được để trống';
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Sign Up Successful!');
            // Proceed with sign-up logic (e.g., API call)
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
                <Text style={styles.heading}>Tạo Tài Khoản</Text>

                <View style={styles.subContainer}>
                    {/* Full Name Input */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Họ và Tên</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Nguyễn Văn A"
                            value={fullName}
                            onChangeText={setFullName}
                            style={styles.input}
                            theme={{
                                roundness: 30,
                                colors: {
                                    background: '#FFFFFF',
                                    outline: '#ffffff',
                                },
                            }}
                        />
                        {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
                    </View>

                    {/* Email Input */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="example@example.com"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            theme={{
                                roundness: 30,
                                colors: {
                                    background: '#FFFFFF',
                                    outline: '#ffffff',
                                },
                            }}
                        />
                        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Mật Khẩu</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="••••••••"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            style={styles.input}
                            theme={{
                                roundness: 30,
                                colors: {
                                    background: '#FFFFFF',
                                    outline: '#ffffff',
                                },
                            }}
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                    </View>

                    {/* Confirm Password Input */}
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
                        {errors.confirmPassword && (
                            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                        )}
                    </View>

                    {/* Sign Up Button */}
                    <Button
                        mode="contained"
                        onPress={handleSignUp}
                        style={styles.signUpButton}
                        labelStyle={styles.signUpButtonText}
                    >
                        Đăng Ký
                    </Button>

                    {/* Navigate to Login */}
                    <View style={styles.loginLinkContainer}>
                        <Text style={styles.loginText}>
                            Đã có tài khoản?{' '}
                            <Link href="../login" asChild>
                                <Text style={styles.loginLink}>Đăng Nhập</Text>
                            </Link>
                        </Text>
                    </View>
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
    },
    subContainer: {
        flex: 1,
        width: '100%',
        borderTopStartRadius: 54,
        borderTopEndRadius: 54,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F7FF',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
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
    signUpButton: {
        backgroundColor: '#0066ff',
        borderRadius: 25,
        paddingVertical: 10,
        width: '50%',
        marginTop: 15,
    },
    signUpButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    loginLinkContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 14,
        color: '#333333',
    },
    loginLink: {
        color: '#0066ff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default SignUpScreen;
