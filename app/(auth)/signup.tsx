import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Signup</Text>
            <TextInput placeholder="Name" style={{ width: 200, borderWidth: 1, marginVertical: 10 }} />
            <TextInput placeholder="Email" style={{ width: 200, borderWidth: 1, marginVertical: 10 }} />
            <TextInput placeholder="Password" secureTextEntry style={{ width: 200, borderWidth: 1, marginVertical: 10 }} />
            <Button title="Signup" onPress={() => router.push('/')} />
            <Button title="Go to Login" onPress={() => router.push('/login')} />
        </View>
    );
};

export default Signup;
