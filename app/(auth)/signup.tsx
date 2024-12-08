import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient'; // For gradient background
import {Link} from 'expo-router';

const SignUpScreen = () => {
    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
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
                    <TextInput
                        label="Họ và Tên"
                        mode="outlined"
                        placeholder="Nguyễn Văn A"
                        style={styles.input}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        theme={{
                            roundness: 30,
                            colors: {
                                background: '#FFFFFF',
                                outline: '#ffffff',

                            },
                        }}
                    />

                    {/* Email Input */}
                    <TextInput
                        label="Email"
                        mode="outlined"
                        placeholder="example@example.com"
                        style={styles.input}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        theme={{
                            roundness: 30,
                            colors: {
                                background: '#FFFFFF',
                                outline: '#ffffff',
                            },
                        }}
                    />

                    {/* Password Input */}
                    <TextInput
                        label="Mật Khẩu"
                        mode="outlined"
                        placeholder="••••••••"
                        secureTextEntry
                        right={<TextInput.Icon icon="eye"/>}
                        style={styles.input}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        theme={{
                            roundness: 30,
                            colors: {
                                background: '#FFFFFF',
                                outline: '#ffffff',
                            },
                        }}
                    />

                    {/* Confirm Password Input */}
                    <TextInput
                        label="Xác Nhận Mật Khẩu"
                        mode="outlined"
                        placeholder="••••••••"
                        secureTextEntry
                        right={<TextInput.Icon icon="eye"/>}
                        style={styles.input}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        theme={{
                            roundness: 30,
                            colors: {
                                background: '#FFFFFF',
                                outline: '#ffffff',
                            },
                        }}
                    />

                    {/* Sign Up Button */}
                    <Button
                        mode="contained"
                        onPress={() => console.log('Sign Up pressed')}
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
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
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
