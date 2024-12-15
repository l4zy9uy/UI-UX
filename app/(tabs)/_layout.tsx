import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TabBar from "@/components/TabBar";

export default function TabLayout() {
    const [isTabsReady, setIsTabsReady] = useState(false);

    useEffect(() => {
        const loadTabResources = async () => {
            try {
                // Simulate loading resources for all tabs
                await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3 seconds of loading
                setIsTabsReady(true);
            } catch (error) {
                console.error("Error loading tab resources:", error);
            }
        };

        loadTabResources();
    }, []);

    if (!isTabsReady) {
        // Show loading screen while resources are being loaded
        return (
            <LinearGradient colors={['#2980b9', '#6dd5fa']} style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
            </LinearGradient>
        );
    }

    // Render the tabs once resources are ready
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
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
                name="notification"
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
});
