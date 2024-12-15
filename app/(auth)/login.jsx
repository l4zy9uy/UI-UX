import React, { useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter } from 'expo-router';

const LoginScreen = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' }); // Error messages

    const handleLogin = useCallback(() => {
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Tên đăng nhập không được để trống';
        }
        if (!password) {
            newErrors.password = 'Mật khẩu không được để trống';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                router.replace('/home');
            }, 2000);
        }
    }, [username, password, router]);

    if (isLoading) {
        return (
            <LinearGradient colors={['#2980b9', '#6dd5fa']} style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
            </LinearGradient>
        );
    }

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
                <Text style={styles.greeting}>Xin Chào, Thành</Text>

                <View style={styles.subContainer}>
                    {/* Username Field */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Tên đăng nhập hoặc Email</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="example@example.com"
                            value={username}
                            onChangeText={setUsername}
                            style={styles.input}
                            theme={{
                                roundness: 30,
                                colors: {
                                    background: '#FFFFFF',
                                    outline: '#ffffff',
                                },
                            }}
                        />
                        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
                    </View>

                    {/* Password Field */}
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
                        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                    </View>

                    {/* Login Button */}
                    <Button
                        mode="contained"
                        onPress={handleLogin}
                        style={styles.loginButton}
                        labelStyle={styles.loginButtonText}
                    >
                        Đăng Nhập
                    </Button>

                    {/* Forgot Password */}
                    <Link href="./forgot-password" asChild>
                        <Button
                            mode="text"
                            style={styles.forgotPassword}
                            labelStyle={styles.forgotPasswordText}
                        >
                            Quên mật khẩu?
                        </Button>
                    </Link>

                    {/* Biometric Login */}
                    <Text style={styles.biometricText}>Dùng vân tay để đăng nhập</Text>

                    {/* Social Login Section */}
                    <Text style={styles.socialLoginText}>Hoặc đăng nhập với</Text>
                    <View style={styles.socialIcons}>
                        <AntDesign name="facebook-square" size={24} color="black" style={styles.socialIcon} />
                        <AntDesign name="google" size={24} color="black" style={styles.socialIcon} />
                    </View>

                    {/* Sign Up Link */}
                    <Text style={styles.registerText}>
                        Chưa có tài khoản?{' '}
                        <Link href="./signup" asChild>
                            <Text style={styles.registerLink}>Đăng ký ngay</Text>
                        </Link>
                    </Text>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: '#ffffff',
    },
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
        marginHorizontal: 10,
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
