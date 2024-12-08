import { Tabs } from 'expo-router';

export default function ProfileTabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    display: 'none', // Hides the bottom navbar for all sub-tabs
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Profile',
                    tabBarLabel: 'Profile Overview',
                }}
            />
            <Tabs.Screen
                name="personal-info"
                options={{
                    title: 'Personal Info',
                    tabBarLabel: 'Personal Info',
                }}
            />
            <Tabs.Screen
                name="security"
                options={{
                    title: 'Security',
                    tabBarLabel: 'Security',
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarLabel: 'Settings',
                }}
            />
            <Tabs.Screen
                name="support"
                options={{
                    title: 'Support',
                    tabBarLabel: 'Support',
                }}
            />
        </Tabs>
    );
}
