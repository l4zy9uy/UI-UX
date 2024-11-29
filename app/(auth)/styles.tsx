import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#ffffff',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333333',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        marginLeft: -30,
        fontSize: 18,
        color: '#666666',
    },
    loginButton: {
        backgroundColor: '#0066ff',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 5,
    },
    signupButton: {
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    signupButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    biometricText: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 15,
    },
    socialLoginText: {
        color: '#ffffff',
        fontSize: 14,
        marginVertical: 15,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    socialIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 14,
        marginTop: 20,
    },
    registerLink: {
        color: '#ffcc00',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});