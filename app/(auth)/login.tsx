import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient'; // For gradient background
import AntDesign from '@expo/vector-icons/AntDesign';
import {Link} from "expo-router";

const LoginScreen = () => {
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
                <Text style={styles.greeting}>Xin Chào, Thành</Text>
                {/* Greeting */}
                <View style={styles.subContainer}>


                    {/* Username or Email Input */}
                    <TextInput
                        label="Tên đăng nhập hoặc Email"
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
                                outline: '#ffffff'
                            }
                        }}
                    />

                    {/* Login Button */}
                    <Link href="../(tabs)/home" asChild>
                        <Button
                            mode="contained"
                            onPress={() => console.log('Login pressed')}
                            style={styles.loginButton}
                            labelStyle={styles.loginButtonText}
                        >
                            Đăng Nhập
                        </Button>
                    </Link>

                    {/* Forgot Password */}
                    <Button
                        mode="text"
                        onPress={() => console.log('Forgot password pressed')}
                        style={styles.forgotPassword}
                        labelStyle={styles.forgotPasswordText}
                    >
                        Quên mật khẩu?
                    </Button>

                    {/* Sign Up Button */}

                    {/* Biometric Login */}
                    <Text style={styles.biometricText}>Dùng vân tay để đăng
                        nhập</Text>

                    {/* Social Login Section */}
                    <Text style={styles.socialLoginText}>Hoặc đăng nhập
                        với</Text>
                    <View style={styles.socialIcons}>
                        <AntDesign name="facebook-square" size={24}
                                   color="black" style={styles.socialIcon}/>
                        <AntDesign name="google" size={24} color="black"
                                   style={styles.socialIcon}/>
                    </View>

                    {/* Sign Up Link */}
                    <Text style={styles.registerText}>
                        Chưa có tài khoản?{' '}
                        <Link href="./signup" asChild>
                            <Text style={styles.registerLink}
                                  onPress={() => console.log('Sign up now pressed')}>
                                Đăng ký ngay
                            </Text>
                        </Link>

                    </Text>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F7FF', // Light blue container
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    subContainer: {
        flex: 1,
        width: '100%',
        borderTopStartRadius: 54,
        borderTopEndRadius: 54,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1edff', // Light blue container
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 40,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
    },
    loginButton: {
        backgroundColor: '#0066ff',
        borderRadius: 25,
        paddingVertical: 10,
        width: '50%',
        marginTop: 15,
    },
    loginButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        color: '#0066ff',
        fontSize: 14,
    },
    signupButton: {
        borderWidth: 1,
        borderColor: '#0066ff',
        borderRadius: 25,
        paddingVertical: 10,
        width: '50%',
        marginTop: 10,
    },
    signupButtonText: {
        color: '#0066ff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    biometricText: {
        marginTop: 15,
        color: '#333333',
        fontSize: 14,
    },
    socialLoginText: {
        marginTop: 15,
        fontSize: 12,
        color: '#333333',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        width: '50%',
    },
    socialIcon: {
        marginHorizontal: 10
    },
    registerText: {
        marginTop: 20,
        fontSize: 12,
        color: '#333333',
    },
    registerLink: {
        color: '#0066ff',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
