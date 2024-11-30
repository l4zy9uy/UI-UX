import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: { backgroundColor: '#ffffff' },
                tabBarActiveTintColor: '#0066ff',
                tabBarInactiveTintColor: '#888888',
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="analysis"
                options={{
                    tabBarLabel: 'Analysis',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="transaction"
                options={{
                    tabBarLabel: 'Transaction',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="category"
                options={{
                    tabBarLabel: 'Category',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <AntDesign name="setting" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
