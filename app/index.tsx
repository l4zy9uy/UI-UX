import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Home</Text>
            <Button title="Go to Login" onPress={() => router.push('/login')} />
        </View>
    );
};

export default Home;
