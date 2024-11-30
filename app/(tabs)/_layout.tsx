import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { View, StyleSheet } from 'react-native';
import TabBar from "@/components/TabBar";

export default function TabLayout() {
    return (
        <Tabs
            tabBar={props=> <TabBar {...props} />}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="analysis"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="transaction"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="category"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 40, // Width of the square background
        height: 40, // Height of the square background
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12, // Rounded corners for the square
        backgroundColor: 'transparent', // Default background color
    },
    activeIcon: {
        backgroundColor: '#0066ff', // Background color when active
    },
});
